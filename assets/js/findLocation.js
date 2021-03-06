/** 
 * This is a function to get all locationID and city from location table
 * to be displayed in the dropdown field of add and update form, so that the users
 * won't input any value that does not exist in the location table.
*/
function loadLocationID() {
    var xhr = new XMLHttpRequest;
    var url = "http://localhost:8090/locations/findAll";

    xhr.onloadend = function () {
        if (this.responseText !== "") {
            var data = JSON.parse(this.responseText);
            var listLocationID=[];

            for(i=0;i<data.length;i++){
                listLocationID.push(data[i].locationId+" "+data[i].city);
                var optionString= document.createElement("option");
                var optionString2= document.createElement("option");
                optionString.value=data[i].locationId;
                optionString.innerText=data[i].locationId+" "+data[i].city;
                optionString2.value=data[i].locationId;
                optionString2.innerText=data[i].locationId+" "+data[i].city;
                document.getElementById("locationID").append(optionString2);
                document.getElementById("locationID2").append(optionString);
            }
        }
    };



    xhr.open("GET", url, true);
    xhr.send();
}

loadLocationID();