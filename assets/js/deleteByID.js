function deleteByID(i) {
    var hapusTidak = confirm("Apakah anda benar-benar ingin menghapus ini?");
    if (hapusTidak == false) {
        return 0;
    } else {
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:8090/department/response/" + i;
        xhr.open("DELETE", url, true);
        xhr.onloadend = function () {
            loadContent();
        }
        xhr.send();
    }
}