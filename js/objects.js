import * as THREE from 'https://threejs.org/build/three.module.js';

// Function to initialize the objects
function createObjects(scene) {
  // Load the surface texture
  const surface = new THREE.TextureLoader().load('../assets/8k_mars.jpg');

  // Create the material for the planet
  const planetMaterial = new THREE.MeshBasicMaterial({ map: surface });

  // Create the geometry for the planet
  const planetGeometry = new THREE.SphereGeometry(10, 128, 128);

  // Create the sphere object and add it to the scene
  const sphere = new THREE.Mesh(planetGeometry, planetMaterial);
  scene.add(sphere);

  return scene;
}

export { createObjects };

