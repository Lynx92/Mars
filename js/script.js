import * as THREE from 'https://threejs.org/build/three.module.js';
import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Textures
const galaxy = new THREE.TextureLoader().load(
  '../assets/8k_stars_milky_way.jpg'
);
const surface = new THREE.TextureLoader().load('../assets/8k_mars.jpg');

// Materials
const planetMaterial = new THREE.MeshBasicMaterial({ map: surface });

// Geometries
const planetGeometry = new THREE.SphereGeometry(3, 128, 128);

// Scene
const scene = new THREE.Scene();
scene.background = galaxy;

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Lights
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(20, 20, 0);
scene.add(light);
scene.add(new THREE.AmbientLight(0x222222));

// Objects
const sphere = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(sphere);

const animate = () => {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.001;
  sphere.rotation.y += 0.001;
  // controls.update();
  renderer.render(scene, camera);
};

animate();
