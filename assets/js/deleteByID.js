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

function deleteByIDInner(i) {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8090/department/response/" + i;
  xhr.open("DELETE", url, true);
  xhr.onloadend = function () {
    loadContent();
  }
  xhr.send();
}