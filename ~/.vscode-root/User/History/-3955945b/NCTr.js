"use strict";

import * as THREE from 'three';

import * as CANNON from 'cannon-es';

import {
  OrbitControls
} from 'three/addons/controls/OrbitControls.js';

import {
  GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';

import CannonDebugger from 'cannon-es-debugger';


import Stats from 'https://unpkg.com/three@0.122.0/examples/jsm/libs/stats.module.js'
// three.js variables
let camera, scene, renderer, stats
let movementPlane
let clickMarker
let raycaster
let cubeMesh
let sphereMesh

// cannon.js adde
let world
let jointBody
let jointConstraint
let cubeBody
let sphereBody

let isDragging = false

let loader = new GLTFLoader();

// To be synced
const meshes = []
const bodies = []

initThree()
initCannon()
animate()

function initThree() {

  // Camera
  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.5, 1000)
  camera.position.set(-80, 70, -80)
  camera.lookAt(0, 0, 0);

  // Scene
  scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0x000000, 500, 1000)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(scene.fog.color)

  renderer.outputEncoding = THREE.sRGBEncoding

  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  document.body.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.listenToKeyEvents(window); // optional

  // Stats.js
  stats = new Stats()
  document.body.appendChild(stats.dom)

  // Lights
  const ambientLight = new THREE.AmbientLight(0x666666)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
  const distance = 20
  directionalLight.position.set(-distance, distance, distance)

  directionalLight.castShadow = true

  directionalLight.shadow.mapSize.width = 2048
  directionalLight.shadow.mapSize.height = 2048

  directionalLight.shadow.camera.left = -distance
  directionalLight.shadow.camera.right = distance
  directionalLight.shadow.camera.top = distance
  directionalLight.shadow.camera.bottom = -distance

  directionalLight.shadow.camera.far = 3 * distance
  directionalLight.shadow.camera.near = distance

  scene.add(directionalLight)

  // Raycaster for mouse interaction
  raycaster = new THREE.Raycaster()

  const loader = new THREE.TextureLoader();
  const material = new THREE.MeshLambertMaterial({
    map: loader.load('assets/terrain.jpg')
  });

  // Floor
  const floorGeometry = new THREE.BoxBufferGeometry(50, 50, 1)
  floorGeometry.rotateX(-Math.PI / 2)
  const floorMaterial = new THREE.MeshLambertMaterial({ color: 0x777777 })
  // const floor = new THREE.Mesh(floorGeometry, floorMaterial)
  const floor = new THREE.Mesh(floorGeometry, material)
  floor.receiveShadow = true
  scene.add(floor)
  floor.position.set(0, -0.5, 0)

  //Line
  const edges = new THREE.EdgesGeometry(floorGeometry);
  const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xab0f0f }));
  scene.add(line);
  line.position.set(0, -0.5, 0)

  // Click marker to be shown on interaction
  const markerGeometry = new THREE.SphereBufferGeometry(0.2, 8, 8)
  const markerMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 })
  clickMarker = new THREE.Mesh(markerGeometry, markerMaterial)
  clickMarker.visible = false // Hide it..
  scene.add(clickMarker)

  // Cube
  // const cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1, 10, 10)
  // const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x999999 })
  // cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
  // cubeMesh.castShadow = true
  // meshes.push(cubeMesh)
  // scene.add(cubeMesh)

  // Sphere
  const sphereGeometry = new THREE.SphereBufferGeometry(1, 20, 20, 10, 10)
  const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xa1260c })
  sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
  sphereMesh.castShadow = true
  meshes.push(sphereMesh)
  scene.add(sphereMesh)


  // function loadData() {
  //   new GLTFLoader()
  //     .setPath('assets/models/')
  //     .load('Football.glb', gltfReader);
  // }

  // function gltfReader(gltf) {
  //   let testModel = null;

  //   testModel = gltf.scene;

  //   if (testModel != null) {
  //     console.log("Model loaded:  " + testModel);
  //     scene.add(gltf.scene);
  //   } else {
  //     console.log("Load FAILED.  ");
  //   }
  // }
  // loadData();



  function loadData() {
    new GLTFLoader()
      .setPath('assets/models/')
      .load('scene.glb', gltfReader);
  }

  function gltfReader(gltf) {
    let testModel = null;

    testModel = gltf.scene;

    if (testModel != null) {
      console.log("Model loaded:  " + testModel);
      gltf.scene.rotateY(Math.PI / 2);
      gltf.scene.translateZ(20);
      gltf.scene.translateX(-2.5);
      scene.add(gltf.scene);
    } else {
      console.log("Load FAILED.  ");
    }
  }

  loadData();


  // Movement plane when dragging
  const planeGeometry = new THREE.PlaneBufferGeometry(100, 100)
  movementPlane = new THREE.Mesh(planeGeometry, floorMaterial)
  movementPlane.visible = false // Hide it..
  scene.add(movementPlane)



  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function initCannon() {


  const cannonDebugger = new CannonDebugger(scene, world, {
    // options...
  })
  
  
  // Setup world
  world = new CANNON.World()
  world.gravity.set(0, -10, 0)

  // Floor
  // const floorShape = new CANNON.Plane()
  const floorShape = new CANNON.Box(new CANNON.Vec3(24.5, 24.5, 1))
  const floorBody = new CANNON.Body({ mass: 0 })
  floorBody.addShape(floorShape)
  floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
  world.addBody(floorBody)
  floorBody.position.set(0, -1, 0)

  //Trigger
  const boxShape = new CANNON.Box(new CANNON.Vec3(2, 2, 5))
  const triggerBody = new CANNON.Body({ isTrigger: true })
  triggerBody.addShape(boxShape)
  triggerBody.position.set(5, 1, 0)
  // world.addBody(triggerBody)
  // scene.addVisual(triggerBody)

  // Cube body
  // const cubeShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5))
  // cubeBody = new CANNON.Body({ mass: 5 })
  // cubeBody.addShape(cubeShape)
  // cubeBody.position.set(0, 5, 0)
  // bodies.push(cubeBody)
  // world.addBody(cubeBody)

  // Sphere body
  const sphereShape = new CANNON.Sphere(1)
  sphereBody = new CANNON.Body({ mass: 5 })
  sphereBody.addShape(sphereShape)
  sphereBody.position.set(0, 5, 0)
  bodies.push(sphereBody)
  world.addBody(sphereBody)

  // Joint body, to later constraint the cube
  const jointShape = new CANNON.Sphere(0.1)
  jointBody = new CANNON.Body({ mass: 0 })
  jointBody.addShape(jointShape)
  jointBody.collisionFilterGroup = 0
  jointBody.collisionFilterMask = 0
  world.addBody(jointBody)
}



// window.addEventListener('pointerdown', (event) => {
//   // Cast a ray from where the mouse is pointing and
//   // see if we hit something
//   // const hitPoint = getHitPoint(event.clientX, event.clientY, cubeMesh, camera)
//   const hitPoint = getHitPoint(event.clientX, event.clientY, sphereMesh, camera)

//   // Return if the cube wasn't hit
//   if (!hitPoint) {
//     return
//   }

//   // Move marker mesh on contact point
//   showClickMarker()
//   moveClickMarker(hitPoint)

//   // Move the movement plane on the z-plane of the hit
//   moveMovementPlane(hitPoint, camera)

//   // Create the constraint between the cube body and the joint body
//   // addJointConstraint(hitPoint, cubeBody)
//   addJointConstraint(hitPoint, sphereBody)

//   // Set the flag to trigger pointermove on next frame so the
//   // movementPlane has had time to move
//   requestAnimationFrame(() => {
//     isDragging = true
//   })
// })

// window.addEventListener('pointermove', (event) => {
//   if (!isDragging) {
//     return
//   }

//   // Project the mouse onto the movement plane
//   const hitPoint = getHitPoint(event.clientX, event.clientY, movementPlane, camera)

//   if (hitPoint) {
//     // Move marker mesh on the contact point
//     moveClickMarker(hitPoint)

//     // Move the cannon constraint on the contact point
//     moveJoint(hitPoint)
//   }
// })

// window.addEventListener('pointerup', () => {
//   isDragging = false

//   // Hide the marker mesh
//   hideClickMarker()

//   // Remove the mouse constraint from the world
//   removeJointConstraint()
// })

// function showClickMarker() {
//   clickMarker.visible = true
// }

// function moveClickMarker(position) {
//   clickMarker.position.copy(position)
// }

// function hideClickMarker() {
//   clickMarker.visible = false
// }

window.addEventListener('keydown', (e) => {
  console.log(e)
  if (e.key == 'p') {
    sphereBody.velocity.y = 15;
    sphereBody.velocity.x = 15;
  }

  if (e.key == "q") {
    sphereBody.velocity.z = -4;
  }

  if (e.key == "d") {
    sphereBody.velocity.z = 4;
  }

  if (e.key == "z") {
    sphereBody.velocity.x = 4;
  }

  if (e.key == "s") {
    sphereBody.velocity.x = -4;
  }


})



// This function moves the virtual movement plane for the mouseJoint to move in
function moveMovementPlane(point, camera) {
  // Center at mouse position
  movementPlane.position.copy(point)

  // Make it face toward the camera
  movementPlane.quaternion.copy(camera.quaternion)
}

// Returns an hit point if there's a hit with the mesh,
// otherwise returns undefined
function getHitPoint(clientX, clientY, mesh, camera) {
  // Get 3D point form the client x y
  const mouse = new THREE.Vector2()
  mouse.x = (clientX / window.innerWidth) * 2 - 1
  mouse.y = -((clientY / window.innerHeight) * 2 - 1)

  // Get the picking ray from the point
  raycaster.setFromCamera(mouse, camera)

  // Find out if there's a hit
  const hits = raycaster.intersectObject(mesh)

  // Return the closest hit or undefined
  return hits.length > 0 ? hits[0].point : undefined
}

// Add a constraint between the cube and the jointBody
// in the initeraction position
function addJointConstraint(position, constrainedBody) {
  // Vector that goes from the body to the clicked point
  const vector = new CANNON.Vec3().copy(position).vsub(constrainedBody.position)

  // Apply anti-quaternion to vector to tranform it into the local body coordinate system
  const antiRotation = constrainedBody.quaternion.inverse()
  const pivot = antiRotation.vmult(vector) // pivot is not in local body coordinates

  // Move the cannon click marker body to the click position
  jointBody.position.copy(position)

  // Create a new constraint
  // The pivot for the jointBody is zero
  jointConstraint = new CANNON.PointToPointConstraint(constrainedBody, pivot, jointBody, new CANNON.Vec3(0, 0, 0))

  // Add the constraint to world
  world.addConstraint(jointConstraint)
}

// This functions moves the joint body to a new postion in space
// and updates the constraint
function moveJoint(position) {
  jointBody.position.copy(position)
  jointConstraint.update()
}

// Remove constraint from world
function removeJointConstraint() {
  world.removeConstraint(jointConstraint)
  jointConstraint = undefined
}



function animate() {
  requestAnimationFrame(animate)

  // Step the physics world
  world.fixedStep()

  // Sync the three.js meshes with the bodies
  for (let i = 0; i !== meshes.length; i++) {
    meshes[i].position.copy(bodies[i].position)
    meshes[i].quaternion.copy(bodies[i].quaternion)
  }

  // world.step(timeStep) // Update cannon-es physics
  // cannonDebugger.update()
  // Render three.js
  renderer.render(scene, camera)

  stats.update()
}