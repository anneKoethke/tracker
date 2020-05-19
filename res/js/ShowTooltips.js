var Tracker = Tracker || {};

Tracker.ShowTooltips = function() {

  "use strict";
  
  var that = {};

  function handleTooltips(items) {
    for (let i = 0; i < items.length; i++) {      
      let currItem = items[i],
        currTooltip = currItem.querySelector(".tooltip"), 
        currDeleteBtn = currItem.querySelector(".tt-delete");         
      handleItemClick(items, currItem, currTooltip, currDeleteBtn);
    }
  } 

  function hideAllTooltips(items) {
    for (let j = 0; j < items.length; j++) {
      if(items[j].querySelector(".tooltip").classList.contains("show")) {
        items[j].querySelector(".tooltip").classList.replace("show", "hide");
      }          
    }
  }

  // Apple devices need touch events
  function getEventType () {
    let eventType = "click";
    if(navigator.userAgent.match(/mobile/i)) {
      if(navigator.userAgent.match(/iPad|iPhone/i)) {
        eventType = "touchend";
      }
	  }
    return eventType;
  }

  function hideTooltip () {
    let currTip = this.parentNode.parentNode;
    currTip.classList.replace("show", "hide");
  }


  function handleItemClick(list, item, tooltip, deleteBtn) {
    let eventType = getEventType();

    item.addEventListener(eventType, function () {      
      hideAllTooltips(list);
      tooltip.classList.replace("hide", "show");   
    }, true);

    deleteBtn.addEventListener(eventType, hideTooltip, false)
  }


  
  that.handleTooltips = handleTooltips;
  return that;
};