import * as THREE from 'https://threejs.org/build/three.module.js';
import { createScene } from './scene.js';
import { createCamera } from './camera.js';
import { createControls } from './controls.js';
import { createLights } from './lights.js';
import { createObjects } from './objects.js';

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Create the scene
const scene = createScene();

// Create the camera
const camera = createCamera();

// Create the controls
const controls = createControls(camera, renderer.domElement);

// Create the lights
createLights(scene);

// Create the objects
createObjects(scene);

// Animation function
const animate = () => {
  requestAnimationFrame(animate);

  // Update the rotation of the objects in the scene
  scene.children.forEach((child) => {
    if (child instanceof THREE.Mesh) {
      child.rotation.x += 0.001;
      child.rotation.y += 0.001;
    }
  });

  // Update the controls and render the scene
  controls.update();
  renderer.render(scene, camera);
};

// Start the animation
animate();
