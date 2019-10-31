var tableData = data;

var tbody = d3.select("tbody");
tableData.forEach(function (InitialList) {
  console.log(InitialList);
  var row = tbody.append("tr");
  Object.entries(InitialList).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function () {
  tbody.html("");
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);
  a
  filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  var inputcity = d3.select("#city");
  var tableData = data;
  var inputValuecity = inputcity.property("value");
  if (inputValuecity) {
    var filteredData = tableData.filter(tableData => tableData.city === inputValuecity);
  };



  var inputstate = d3.select("#state");
  var inputValuestate = inputstate.property("value");
  if (inputValuestate) {
    var filteredData = tableData.filter(tableData => tableData.state === inputValuestate)
  };



  var inputcountry = d3.select("#country");
  var inputValuecountry = inputcountry.property("value");
  if (inputValuecountry) {
    var filteredData = tableData.filter(tableData => tableData.country === inputValuecountry)
  };




  var inputshape = d3.select("#shape");
  var inputValueshape = inputshape.property("value");
  if (inputValueshape) {
    var filteredData = tableData.filter(tableData => tableData.shape === inputValueshape)
  };

  filteredData.forEach(function (ufosighting) {
    console.log(ufosighting);
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(function ([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
