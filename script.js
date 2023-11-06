function createTable() {
    //Write your code here
	    // Prompt for the number of rows and columns
    const numRows = parseInt(prompt("Input number of rows"));
    const numCols = parseInt(prompt("Input number of columns"));

    // Get a reference to the table element
    const table = document.getElementById("myTable");

    // Clear the existing content of the table
    table.innerHTML = "";

    // Create the table rows and cells
    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < numCols; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
  
}