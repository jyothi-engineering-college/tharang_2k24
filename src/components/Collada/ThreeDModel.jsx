import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './collada.css';

const ThreeDModel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera = null, scene = null, renderer = null, mixer = null;
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
  
    const updateAspectRatio = () => {
      if (camera && renderer && containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
  
        camera.aspect = containerWidth / containerHeight;
        camera.updateProjectionMatrix();
  
        renderer.setSize(containerWidth, containerHeight);
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
      const fov = 50;
      const nearPlane = 1;
      const farPlane = 1000;
      camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, nearPlane, farPlane);
      camera.position.set(15, 10, -15);
  
      // Scene setup
      scene = new THREE.Scene();
      scene.background = null;
  
      // Load collada model
      const loader = new ColladaLoader();
      loader.load('/models/stormtrooper.dae', (collada) => {
        const avatar = collada.scene;
        const animations = avatar.animations;
  
        // Scale the model
        avatar.scale.set(2, 2, 2);
        mixer = new THREE.AnimationMixer(avatar);
        mixer.clipAction(animations[0]).play();
        
        avatar.position.set(0, -2, 0); // Adjust model position if head is cut off
  
        scene.add(avatar);
      });
  
      // Lights and renderer
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
      directionalLight.position.set(1.5, 1, -1.5);
      scene.add(directionalLight);
  
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      updateAspectRatio();
      container.appendChild(renderer.domElement);
  
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 1.5, 0);
      controls.update();
  
      window.addEventListener('resize', updateAspectRatio);
    };
  
    const animate = () => {
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
  
    init();
    animate();
  
    return () => {
      window.removeEventListener('resize', updateAspectRatio);
      if (renderer) renderer.dispose();
      if (scene) cleanUpScene();
    };
  }, []);
  

  return (
    <div
      ref={containerRef}
      
      className='colllam'
    />
  );
};

export default ThreeDModel;
