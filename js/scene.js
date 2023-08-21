import * as THREE from 'https://threejs.org/build/three.module.js';

// Function to initialize the scene
function createScene() {
  // Create a new scene
  const scene = new THREE.Scene();

  // Set the background to the galaxy texture
  const galaxy = new THREE.TextureLoader().load('../assets/8k_stars_milky_way.jpg');
  scene.background = galaxy;

  // Add light to the scene
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(20, 20, 0);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0x222222));

  // Add objects to the scene
  const surface = new THREE.TextureLoader().load('../assets/8k_mars.jpg');
  const planetMaterial = new THREE.MeshBasicMaterial({ map: surface });
  const planetGeometry = new THREE.SphereGeometry(10, 128, 128);
  const sphere = new THREE.Mesh(planetGeometry, planetMaterial);
  scene.add(sphere);

  return scene;
}

export { createScene };

