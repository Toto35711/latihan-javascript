function loadManager() {
    var xhr = new XMLHttpRequest;
    var url = "http://localhost:8090/employee/2findAll";

    xhr.onloadend = function () {
        if (this.responseText !== "") {
            var data = JSON.parse(this.responseText).data;
            var listEmployeeID=[];

            for(i=0;i<data.length;i++){
                var optionString= document.createElement("option");
                optionString.value=data[i].employeeID;
                optionString.innerText=data[i].employeeID+" "+data[i].firstName+" "+data[i].lastName;
                document.getElementById("managerID2").append(optionString);
            }
        }
    };



    xhr.open("GET", url, true);
    xhr.send();
}

loadManager();