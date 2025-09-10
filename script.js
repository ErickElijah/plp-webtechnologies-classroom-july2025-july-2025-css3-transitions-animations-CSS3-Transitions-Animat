/* ================================
   Part 2: JavaScript Functions
   - Demonstrating scope, parameters, return values
   ================================ */

// Global variable (accessible everywhere)
let clickCount = 0;

/**
 * Function: incrementCounter
 * @param {number} current - the current count
 * @returns {number} - the updated count
 * Demonstrates: parameters + return values
 */
function incrementCounter(current) {
  return current + 1;
}

/**
 * Function: logMessage
 * @param {string} msg - message to log
 * Demonstrates: local scope inside functions
 */
function logMessage(msg) {
  let decorated = `💡 LOG: ${msg}`; // local variable
  console.log(decorated);
}

/* ================================
   Part 3: Combining CSS + JS
   ================================ */

// DOM references
const box = document.getElementById("box");
const btn = document.getElementById("animateBtn");

// Event listener → triggers animation
btn.addEventListener("click", function () {
  // Update counter
  clickCount = incrementCounter(clickCount);

  // Trigger CSS keyframe animation by adding a class
  box.classList.add("animate");

  // Remove class after animation ends (so it can retrigger)
  setTimeout(() => {
    box.classList.remove("animate");
  }, 2000);

  // Log interaction
  logMessage(`Box animated ${clickCount} time(s)`);
});
