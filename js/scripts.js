$(document).ready(function () {
  let groceryList = [];
  let sortedGroceryList = [];
  $("#button").click(function () {
    const itemText = $("#itemInput").val();
    if (itemText) {
      console.log(itemText);
      groceryList.push(itemText);
      $("#itemInput").val(null);
      $("#grocery-list").append(`<li>${itemText}</li>`);
      $("#grocery-list").show();
      $("#submitButton").show();
    };
  });
  $("#groceryForm").submit(function (event) {
    event.preventDefault();
    if (groceryList.length > sortedGroceryList.length) {
      sortedGroceryList = groceryList.sort();
      if (sortedGroceryList.length >= 1) {
        groceryList.forEach(function (item) {
          $("#grocery-list-sorted").append(`<li>${item.toUpperCase()}</li>`);
        });
        $("#grocery-list-sorted").show();
      };
    };
  });
});