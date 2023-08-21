import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';

// Function to initialize the controls
function createControls(camera, domElement) {
  // Create new OrbitControls linked to the camera and the renderer's DOM element
  const controls = new OrbitControls(camera, domElement);

  return controls;
}

export { createControls };

