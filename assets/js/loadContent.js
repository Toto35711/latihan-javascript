/** 
 * This is a function to show all records
*/
function loadContent() {

    clearResult();

    var xhr = new XMLHttpRequest;
    var url = "http://localhost:8090/department/2findAll";

    xhr.onloadstart = function () {
        document.getElementById("loadButton").innerHTML = "Loading...";
    }

    xhr.onerror = function () {
        Swal.fire({
            icon: 'error',
            title: 'Sorry',
            text: 'There is something wrong with the service!',
          });
    }

    xhr.onloadend = function () {
        if (this.responseText !== "") {
            var data = JSON.parse(this.responseText);
            var listDepaterment = data.data;

            for (i = 0; i < listDepaterment.length; i++) {
                var baris = document.createElement("tr");
                var kolom1 = document.createElement("td");
                var kolom2 = document.createElement("td");
                var kolom3 = document.createElement("td");
                kolom3.innerHTML =
                    `<input type="button" class="btn btn-danger" onclick='deleteByID(${listDepaterment[i].departmentID})' value="Delete">` +
                    `<input type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#form2" value="Update" onclick='updateByID(${listDepaterment[i].departmentID},"${listDepaterment[i].departmentName}",${listDepaterment[i].locationID},${listDepaterment[i].managerID})'> `;
                kolom1.innerHTML = listDepaterment[i].departmentID;
                kolom2.innerHTML = listDepaterment[i].departmentName;

                baris.append(kolom1, kolom2, kolom3);
                document.getElementById("departmentTable").append(baris);
            }

            setTimeout(function () {
                document.getElementById("loadButton").innerHTML = "Load";
            }, 1000);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

loadContent();