function loadContent() {

    clearResult();

    var xhr = new XMLHttpRequest;
    var url = "http://localhost:8090/department/2findAll";

    xhr.onloadstart = function () {
        document.getElementById("loadButton").innerHTML = "Loading...";
    }

    xhr.onerror = function () {
        alert("Gagal mengambil data");
    }

    xhr.onloadend = function () {
        if (this.responseText !== "") {
            var data = JSON.parse(this.responseText);
            // console.log(data);
            var listDepaterment = data.data;

            for (i = 0; i < listDepaterment.length; i++) {
                var baris = document.createElement("tr");
                var kolom1 = document.createElement("td");
                var kolom2 = document.createElement("td");
                var kolom3 = document.createElement("td");
                kolom3.innerHTML =
                    `<input type="button" class="btn btn-danger" onclick='deleteByID(${listDepaterment[i].departmentID})' value="hapus">` +
                    `<input type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#form2" value="perbarui" onclick='updateByID(${listDepaterment[i].departmentID})'> `;
                    // `<input type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#form2" value="perbarui"' onclick = "updateByID()> `;
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

function loadContent2() {

    clearResult();

    var xhr = new XMLHttpRequest;
    var a=document.getElementById("departmentName00").value;
    console.log(a);
    var url = `http://localhost:8090/department/2findByDepartmentName?departmentName=${a}&page=0&Size=5`;

    xhr.onloadstart = function () {
        document.getElementById("button").innerHTML = "Loading...";
    }

    xhr.onerror = function () {
        alert("Gagal mengambil data");
    }

    xhr.onloadend = function () {
        if (this.responseText !== "") {
            var data = JSON.parse(this.responseText);
            // console.log(data);
            var listDepaterment = data.data;

            for (i = 0; i < listDepaterment.length; i++) {
                var baris = document.createElement("tr");
                var kolom1 = document.createElement("td");
                var kolom2 = document.createElement("td");
                var kolom3 = document.createElement("td");
                kolom3.innerHTML =
                    `<input type="button" class="btn btn-danger" onclick='deleteByID(${listDepaterment[i].departmentID})' value="hapus">` +
                    `<input type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#form2" value="perbarui" onclick='updateByID(${listDepaterment[i].departmentID})'> `;
                    // `<input type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#form2" value="perbarui"' onclick = "updateByID()> `;
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