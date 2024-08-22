import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDModel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, mixer;
    const clock = new THREE.Clock();

    const cleanUpScene = () => {
      if (scene) {
        while (scene.children.length > 0) {
          const child = scene.children[0];
          scene.remove(child);
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      }
    };

    const init = () => {
      const container = containerRef.current;

      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }

      cleanUpScene();

      // Camera setup
      camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.set(15, 10, -15);

      // Scene setup
      scene = new THREE.Scene();
      scene.background = null; // Set the scene background to null

      // Load collada model
      const loader = new ColladaLoader();
      loader.load('/models/stormtrooper.dae', (collada) => {
        console.log(collada);
        
        const avatar = collada.scene;
        const animations = avatar.animations;

        mixer = new THREE.AnimationMixer(avatar);
        mixer.clipAction(animations[0]).play();

        scene.add(avatar);
      });

      // Ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      // Directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
      directionalLight.position.set(1.5, 1, -1.5);
      scene.add(directionalLight);

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Set alpha to true for transparency
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);
      container.appendChild(renderer.domElement);

      // Controls setup
      const controls = new OrbitControls(camera, renderer.domElement);
      // console.log(controls);
      
      controls.screenSpacePanning = true;
      controls.minDistance = 5;
      controls.maxDistance = 40;
      controls.target.set(0, 2, 0);
      controls.update();

      // Handle window resize
      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    };

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeDModel;
