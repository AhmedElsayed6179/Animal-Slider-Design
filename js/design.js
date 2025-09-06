// Get next and prev buttons
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

// Next button click → move first item to the end
next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item"); // get all slide items
  document.querySelector(".slide").appendChild(items[0]); // move first item to end
});

// Prev button click → move last item to the start
prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item"); // get all slide items
  document.querySelector(".slide").prepend(items[items.length - 1]); // move last item to start
});