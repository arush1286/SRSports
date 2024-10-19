document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const productName = document.getElementById('product-name').value;
    const date = document.getElementById('date').value;
    const stockStatus = document.getElementById('stock-status').value;
    const quantity = document.getElementById('product-quantity').value;

    // Check if inputs are filled
    if (productName && date && stockStatus && quantity) {
        // Create new row in the table
        const table = document.getElementById('product-list');
        const row = table.insertRow();
        row.insertCell(0).innerText = date;
        row.insertCell(1).innerText = productName;
        row.insertCell(2).innerText = stockStatus;
        row.insertCell(3).innerText = quantity;

        // Reset form fields after submission
        document.getElementById('product-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Save as CSV functionality
document.getElementById('save-csv').addEventListener('click', function () {
    let csvContent = "data:text/csv;charset=utf-8,";
    const rows = document.querySelectorAll("table tr");
    rows.forEach(row => {
        const cols = row.querySelectorAll("td, th");
        const rowData = Array.from(cols).map(col => col.innerText).join(",");
        csvContent += rowData + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "product_data.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
});
