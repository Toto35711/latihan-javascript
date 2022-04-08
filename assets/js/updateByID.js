function updateByID(i) {
    document.getElementById("departmentID2").value = i;
    console.log(document.getElementById("departmentID2").value)
    


    // return false;

    // console.log("halo");
    // var nama = prompt("Anda ingin ganti apa nama departemennya?",'')

    // var xhr = new XMLHttpRequest();
    // var url = "http://localhost:8090/department/response/";

    // var data = JSON.stringify({
    //     departmentID: i,
    //     departmentName: nama,
    //     // managerID: document.getElementById("managerID").value,
    //     // locationID: document.getElementById("locationID").value
    // })

    // xhr.open("PUT", url, true);
    // xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    // xhr.onload = function () {
    //     // console.log(this.responseText.status);
    // }
    // xhr.onerror = function () {
    //     alert('Error simpan data.')
    // }
    // xhr.onloadend = function () {
    //     console.log(this.responseText)
    //     var response = JSON.parse(this.responseText);

    //     // perlu ngebenerin backend biar seragam responnya seragam

    //     if (response.data !== null) {
    //         alert("Sukses memperarui data.");
    //         loadContent();
    //     } else {
    //         alert('Error memperbarui data.');
    //     }
    // }
    // xhr.send(data);
    // return false;
}

function updateByID2(){

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8090/department/response/";

    var data = JSON.stringify({
        departmentID: document.getElementById("departmentID2").value,
        departmentName: document.getElementById("departmentName2").value,
        managerID: document.getElementById("managerID2").value,
        locationID: document.getElementById("locationID2").value
    })

    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.onload = function () {
    }
    xhr.onerror = function () {
        alert('Error simpan data.')
    }
    xhr.onloadend = function () {
        console.log(this.responseText)
        var response = JSON.parse(this.responseText);

        if (response.data !== null) {
            alert("Sukses memperbarui data.");
            document.getElementById("departmentName2").value = '',
            document.getElementById("managerID2").value = '',
            document.getElementById("locationID2").value = ''
            loadContent();
        } else {
            alert('Error memperbarui data.');
        }
    }
    xhr.send(data);
    return false;
}