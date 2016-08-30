// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function getData() {
  var divParks = document.getElementById("parks");
  divParks.innerHTML = "Loading...";

  $.get("https://data.sfgov.org/api/views/z76i-7s65/rows.json", function(response) {
    var htmlString = "";
    for (var i = 1; i < response.data.length; i++) {
      var park = response.data[i];
      htmlString += "<div onclick='changePark(this)'>"
        htmlString += '<p>' + park[8]+" "+park[9]+" "+park[10]+" "+park[11]+" "+park[12]+" "+park[13]+ '</p>'
      htmlString += "</div>"
    }
    divParks.innerHTML = htmlString;
  });
} 

function changePark(divPark) {
  divPark.style.color = 'blue';
}