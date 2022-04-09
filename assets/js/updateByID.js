/** 
 * This is a function to get all current values of a record
 * @param id department ID
 * @param nama department name
 * @param lokasi location ID
 * @param nama manager's name
*/
function updateByID(id,nama,lokasi,manajer) {
    console.log(id,nama,lokasi,manajer);
    document.getElementById("departmentID2").value = id;
    document.getElementById("departmentName2").value = nama;
    lokasi=lokasi==null?"":lokasi;
    manajer=manajer==null?"":manajer;
}

/**
 * This is a function to get all values from an update form, stringify them and send them via PUT request
 */
function updateByID2() {

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
    xhr.onload = function () {}
    xhr.onerror = function () {
        Swal.fire({
            icon: 'error',
            title: 'Sorry',
            text: 'There is something wrong with the service!',
          });
    }
    xhr.onloadend = function () {
        console.log(this.responseText)
        var response = JSON.parse(this.responseText);

        if (response.data !== null) {
            Swal.fire(
                "Success",
                "The department record has been successfully updated!",
                'success'
            );
            document.getElementById("departmentName2").value = '',
            document.getElementById("managerID2").value = '',
            document.getElementById("locationID2").value = ''
            var myModalEl = document.getElementById('form2');
            var modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
            loadContent();
            loadContent();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Could not update the record.',
            });
        }
    }
    xhr.send(data);
    return false;
}