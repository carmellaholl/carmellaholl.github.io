const container = document.querySelector(".container");

let isDragging = false; // Flag to track whether dragging is in progress

// Variables to store initial mouse position and container's initial position
let initialMouseX, initialMouseY, initialContainerX, initialContainerY;

function onMouseDown(event) {
  isDragging = true;

  // Get initial mouse position and container's initial position
  initialMouseX = event.clientX;
  initialMouseY = event.clientY;

  let containerStyle = window.getComputedStyle(container);
  initialContainerX = parseInt(containerStyle.left);
  initialContainerY = parseInt(containerStyle.top);

  // Prevent default browser drag behavior
  event.preventDefault();

  // Add mousemove and mouseup event listeners for dragging
  document.addEventListener("mousemove", onMouseDrag);
  document.addEventListener("mouseup", onMouseUp);
}

function onMouseDrag(event) {
  if (!isDragging) return;

  // Calculate the distance the mouse has moved since the last event
  const deltaX = event.clientX - initialMouseX;
  const deltaY = event.clientY - initialMouseY;

  // Update the container's position based on the mouse movement
  container.style.left = `${initialContainerX + deltaX}px`;
  container.style.top = `${initialContainerY + deltaY}px`;
}

function onMouseUp() {
  isDragging = false;

  // Remove mousemove and mouseup event listeners
  document.removeEventListener("mousemove", onMouseDrag);
  document.removeEventListener("mouseup", onMouseUp);
}

// Add mousedown event listener to start dragging
container.addEventListener("mousedown", onMouseDown);
