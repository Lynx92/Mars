import * as THREE from 'https://threejs.org/build/three.module.js';

// Function to initialize the lights
function createLights(scene) {
  // Create a new directional light and add it to the scene
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(20, 20, 0);
  scene.add(light);

  // Add an ambient light to the scene
  scene.add(new THREE.AmbientLight(0x222222));

  return scene;
}

export { createLights };

