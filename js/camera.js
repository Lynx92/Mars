import * as THREE from 'https://threejs.org/build/three.module.js';

// Function to initialize the camera
function createCamera() {
  // Create a new perspective camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Set the camera's position
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 18;

  return camera;
}

export { createCamera };

