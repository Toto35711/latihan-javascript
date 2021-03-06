/** 
 * This is a function to get all employeeID and fullname (first nama + last name) from employee table
 * to be displayed in the dropdown field of add and update form, so that the users
 * won't input any value that does not exist in the employee table.
*/
function loadManager() {
    var xhr = new XMLHttpRequest;
    var url = "http://localhost:8090/employee/2findAll";

    xhr.onloadend = function () {
        if (this.responseText !== "") {
            var data = JSON.parse(this.responseText).data;
            var listEmployeeID=[];

            for(i=0;i<data.length;i++){
                var optionString= document.createElement("option");
                var optionString2= document.createElement("option");
                optionString.value=data[i].employeeID;
                optionString.innerText=data[i].employeeID+" "+data[i].firstName+" "+data[i].lastName;
                optionString2.value=data[i].employeeID;
                optionString2.innerText=data[i].employeeID+" "+data[i].firstName+" "+data[i].lastName;
                document.getElementById("managerID2").append(optionString2);
                document.getElementById("managerID").append(optionString);
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

loadManager();