const insertEvent = document.getElementById("insertEvent");
const getInserted = document.getElementById("getInserted");
const clearBtn = document.getElementById("clear-btn");
let groupOfEvents = [];

getInserted.addEventListener("click", function (e) {
  e.preventDefault();
  if (insertEvent.value === "") {
    alert("you must insert value");
    return;
  }

  const isValueNumber = checkValue(insertEvent.value);

  if (isValueNumber) {
    alert("inserted value must be a string");
    insertEvent.value = "";
    return;
  }

  addEventToList(groupOfEvents, insertEvent.value);
  renderEventsFromList(groupOfEvents, "todoList");
  insertEvent.value = "";
});

function checkValue(insertedValue) {
  const bringToNumber = Number(insertedValue);
  const bringToBolean = Boolean(bringToNumber);
  return bringToBolean;
}

function addEventToList(eventList, event) {
  eventList.unshift(event);
}

function renderEventsFromList(collectionOfEvents, targetHTMLelementClass) {
  const getHTMLelement = document.querySelector(`.${targetHTMLelementClass}`);
  const eventShouldBeRendered = collectionOfEvents[0];
  const createElement = `<li id=${
    groupOfEvents.length - 1
  } class="todoList__item">
  <a href="#">${eventShouldBeRendered}</a>
  <button id=${groupOfEvents.length - 1} onclick="getIdElementShouldBeDelete(${
    groupOfEvents.length - 1
  })">Delete</button> 
  </li>`;
  getHTMLelement.insertAdjacentHTML("afterbegin", createElement);
}

// очищение списка
clearBtn.addEventListener("click", function () {
  groupOfEvents.length = 0;
  removeAllChildrenElements("todoList");
});

function removeAllChildrenElements(elementClass) {
  const result = document.querySelector(`.${elementClass}`);
  while (result.firstChild) {
    result.removeChild(result.lastChild);
  }
}

function getIdElementShouldBeDelete(id) {
  const parentElement = document.querySelector(".todoList");
  groupOfEvents.splice(id, 1);
  let i = 0;
  while (i < parentElement.children.length) {
    if (Number(parentElement.children[i].id) === id) {
      parentElement.children[i].remove();
    }
    i++;
  }
}

// module.exports = checkValue;
