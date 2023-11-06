//function createTable() {
    //Write your code here
  function createTable() {
    const numRows = parseInt(document.getElementById("numRows").value);
    const numColumns = parseInt(document.getElementById("numColumns").value);

    if (!isNaN(numRows) && !isNaN(numColumns)) {
        const table = document.getElementById("myTable");
        table.innerHTML = '';

        for (let i = 0; i < numRows; i++) {
            const row = table.insertRow(i);

            for (let j = 0; j < numColumns; j++) {
                const cell = row.insertCell(j);
                cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
            }
        }
    } else {
        alert("Invalid input. Please enter valid numbers for rows and columns.");
    }
}

//}