/** 
 * This is a function to save a new record
*/
function sendData() {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8090/department/response/";

    var data = JSON.stringify({
        departmentName: document.getElementById("departmentName").value,
        managerID: document.getElementById("managerID").value,
        locationID: document.getElementById("locationID").value
    })

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.onload = function () {

    }
    xhr.onerror = function () {
        xhr.onerror = function () {
            Swal.fire({
                icon: 'error',
                title: 'Sorry',
                text: 'There is something wrong with the service!',
              });
        }
        var myModalEl = document.getElementById('form1');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
    }
    xhr.onloadend = function () {
        console.log(this.responseText)
        var response = JSON.parse(this.responseText);

        if (response.data !== null) {
            document.getElementById("departmentName").value = '',
                document.getElementById("managerID").value = '',
                document.getElementById("locationID").value = ''
            Swal.fire(
                "Success",
                "The department record has been successfully added!",
                'success'
            );
            var myModalEl = document.getElementById('form1');
            var modal = bootstrap.Modal.getInstance(myModalEl);
            modal.hide();
            loadContent();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Could not add a new record.',
            });
        }


    }
    xhr.send(data);

    return false;
}
