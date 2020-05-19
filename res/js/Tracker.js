var Tracker = Tracker || {};

Tracker = (function () {
  "use strict";

  var that = {},
    templDiv = document.querySelector("#myTemp").innerHTML,
    data = document.querySelector("#data").innerHTML,
    list = JSON.parse(data),
    view = new Tracker.ShowTooltips(),
    listOfItems;

  function processData() {
    for(let i = 0; i < list.length; i++) {
      buildListItems(list[i].kategorie, list[i]);
    }
    handleTooltips();
  }

  // template building
  function buildListItems(cat, elem) {
    let newEntry = _.template(templDiv),
      categoryContainer = document.querySelector(".content-list#"+cat),
      entryNode = document.createElement("div");
    entryNode.innerHTML = newEntry(elem);
    categoryContainer.appendChild(entryNode.children[0]);
  }

  function handleTooltips() {
    listOfItems = document.querySelectorAll(".content-list-item");
    view.handleTooltips(listOfItems);
  }

  that.processData = processData;
  return that;
})();
