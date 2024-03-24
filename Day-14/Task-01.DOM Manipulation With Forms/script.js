document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var food = document.getElementById("food").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
        newRow.insertCell(5),
        newRow.insertCell(6),
        newRow.insertCell(7)
    ];
    cells[0].innerText = firstName;
    cells[1].innerText = lastName;
    cells[2].innerText = address;
    cells[3].innerText = pincode;
    cells[4].innerText = gender;
    cells[5].innerText = food;
    cells[6].innerText = state;
    cells[7].innerText = country;

    document.getElementById("myForm").reset();
});
