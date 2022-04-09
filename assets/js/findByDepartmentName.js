function loadContent2() {

    clearResult();

    var xhr = new XMLHttpRequest;
    var a=document.getElementById("departmentName00").value;
    
    var url = `http://localhost:8090/department/2findByDepartmentName?departmentName=${a}&page=0&Size=1000`;

    xhr.onloadstart = function () {
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
                    `<input type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#form2" value="Update" onclick='updateByID(${listDepaterment[i].departmentID})'> `;
                kolom1.innerHTML = listDepaterment[i].departmentID;
                kolom2.innerHTML = listDepaterment[i].departmentName;

                baris.append(kolom1, kolom2, kolom3);
                document.getElementById("departmentTable").append(baris);
            }

            setTimeout(function () {
                document.getElementById("loadButton").innerHTML = "Load";
            }, 1000);
        }
        if(listDepaterment.length==0){
            Swal.fire({
                icon: 'error',
                title: 'Sorry',
                text: 'The search key was not found in any record!',
              });
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}