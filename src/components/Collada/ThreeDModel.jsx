import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDModel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, mixer;
    const clock = new THREE.Clock();

    // Fixed aspect ratio (e.g., 16:9)
    const aspectRatio = 16 /9;

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
      camera = new THREE.PerspectiveCamera(25, aspectRatio, 1, 1000); // Use fixed aspect ratio
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
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      
      // Set renderer size to match container size
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setAnimationLoop(animate);
      container.appendChild(renderer.domElement);

      // Controls setup
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.screenSpacePanning = true;
      controls.minDistance = 5;
      controls.maxDistance = 40;
      controls.target.set(0, 2, 0);
      controls.update();

      // Handle window resize
      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      if (containerRef.current) {
        // Set renderer size to match container size
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      }
    };

    const animate = () => {
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    };

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (renderer) renderer.dispose();
      if (scene) cleanUpScene();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '70%', // 50% of the screen width
        height: '70vh', // 50% of the viewport height
        position: 'absolute',
        top: '25%', // Center vertically
        left: '30%', // Center horizontally
        overflow: 'hidden' // Ensure no overflow
      }}
    />
  );
};

export default ThreeDModel;
