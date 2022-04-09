/** 
 * This is a function to delete a record using departmentID
 * @param {i} departmentID this the ID of a department record that we want to delete
*/
function deleteByID(i) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteByIDInner(i);
      Swal.fire(
        'Deleted!',
        'The record has been deleted.',
        'success'
      );
    };
  })
}

/** 
 * This is a function that send the delete request
 * @param {i} departmentID this the ID of a department record that we want to delete
*/
function deleteByIDInner(i) {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8090/department/response/" + i;
  xhr.open("DELETE", url, true);
  xhr.onloadend = function () {
    loadContent();
  }
  xhr.send();
}