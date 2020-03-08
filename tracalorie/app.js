// Storage Controller

// Item Controller
const ItemController = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: "Steak Dinner", calories: 1200 },
      { id: 1, name: "Cookie", calories: 400 },
      { id: 2, name: "Eggs", calories: 300 }
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    logData: function () {
      return data;
    }
  }
})();



// UI Controller
const UIController = (function () {

  // Public methods
  return {

  }

})();



// App Controller
const AppController = (function (ItemController, UIController) {

  // Public methods
  return {
    init: function () {
      console.log("initialising app");

    }
  }

})(ItemController, UIController);

// Initialise App
AppController.init();