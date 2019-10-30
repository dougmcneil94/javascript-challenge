// from data.js
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
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);


  // weather report values (weekday, date, high, low)
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
