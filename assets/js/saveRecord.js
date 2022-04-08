function sendData() {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8090/department/response/";

    var data = JSON.stringify({
        departmentName: document.getElementById("departmentName").value,
        managerID: document.getElementById("managerID").value,
        locationID: document.getElementById("locationID").value
    })

    // console.log(data);

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.onload = function () {
        // console.log(this.responseText.status);
    }
    xhr.onerror = function () {
        alert('Error simpan data.');
    }
    xhr.onloadend = function () {
        console.log(this.responseText)
        var response = JSON.parse(this.responseText);

        // perlu ngebenerin backend biar seragam responnya seragam
        
        if (response.data !== null) {
            document.getElementById("departmentName").value = '',
            document.getElementById("managerID").value = '',
            document.getElementById("locationID").value = ''
            alert("Sukses simpan data.");
            loadContent();
        } else {
            alert('Error simpan data.');
        }

    }
    xhr.send(data);
    return false; //onsubmit kalau true refresh, kalau false, seolah-olah tidak ngerefresh
}