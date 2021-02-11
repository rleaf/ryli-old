<template>
   <keep-alive>
      <div id="planets">
         
      </div>
   </keep-alive>
</template>

<script>

import * as THREE from "three";

export default {
   
   mounted() {

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({antialias: false});
      
      // camera.position.set(0, 0, 6);
      camera.position.z = 6;
      // camera.translateY(-6);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('planets').appendChild(renderer.domElement);

      // Geometry
      const ringGeometry = [];

      ringGeometry[0] = new THREE.CircleGeometry(1.5, 70);
      ringGeometry[1] = new THREE.CircleGeometry(2.8, 70);
      ringGeometry[2] = new THREE.CircleGeometry(3.8, 70);
      ringGeometry[3] = new THREE.CircleGeometry(5.9, 70);
      ringGeometry[4] = new THREE.CircleGeometry(20.125, 70);
      ringGeometry[5] = new THREE.CircleGeometry(36.531, 70);
      ringGeometry[6] = new THREE.CircleGeometry(73.16, 70);
      ringGeometry[7] = new THREE.CircleGeometry(114.4, 70);

      const saturnRings = new THREE.TorusGeometry(1, 0.2, 2, 30);

      const sunGeometry = new THREE.SphereBufferGeometry(0.85, 25, 25);
      const mercuryGeometry = new THREE.SphereBufferGeometry(0.02, 15, 15);
      const venusGeometry = new THREE.SphereBufferGeometry(0.05, 15, 15);
      const earthGeometry = new THREE.SphereBufferGeometry(0.06, 15, 15);
      const marsGeometry = new THREE.SphereBufferGeometry(0.07, 15, 15);
      const jupiterGeometry = new THREE.SphereBufferGeometry(0.65, 15, 15);
      const saturnGeometry = new THREE.SphereBufferGeometry(0.55, 15, 15);
      const uranusGeometry = new THREE.SphereBufferGeometry(0.55, 15, 15);
      const neptuneGeometry = new THREE.SphereBufferGeometry(0.55, 15, 15);

      // Material
      const ringMaterial = new THREE.PointsMaterial({color: '#ffffff',size: 0.01});
      const sunMaterial = new THREE.PointsMaterial({color: '#d3c124', size: 0.015});
      const mercuryMaterial = new THREE.PointsMaterial({color: '#636363', size: 0.001});
      const venusMaterial = new THREE.PointsMaterial({color: '#826b35', size: 0.002});
      const earthMaterial = new THREE.PointsMaterial({color: '#3750e0', size: 0.002});
      const marsMaterial = new THREE.PointsMaterial({color: '#7d4628', size: 0.01});
      const jupiterMaterial = new THREE.PointsMaterial({color: '#a6865a', size: 0.003});
      const saturnMaterial = new THREE.PointsMaterial({color: '#827b51', size: 0.003});
      const uranusMaterial = new THREE.PointsMaterial({color: '#5f8696', size: 0.003});
      const neptuneMaterial = new THREE.PointsMaterial({color: '#416687', size: 0.003});

      // Structures & Groups
      const mainGroup = new THREE.Group();
      
      const sunPoints = new THREE.Points(sunGeometry, sunMaterial);

      const mercuryGroup = new THREE.Group();
      const mercuryPoints = new THREE.Points(mercuryGeometry, mercuryMaterial);
      mercuryGroup.add(mercuryPoints);
      mercuryPoints.position.set(1.5, 0, 0);

      const venusGroup = new THREE.Group();
      const venusPoints = new THREE.Points(venusGeometry, venusMaterial);
      venusGroup.add(venusPoints);
      venusPoints.position.set(2.8, 0, 0);

      const earthGroup = new THREE.Group();
      const earthPoints = new THREE.Points(earthGeometry, earthMaterial);
      earthPoints.rotateZ(-0.41);
      earthGroup.add(earthPoints);
      earthPoints.position.set(3.8, 0, 0);

      const marsGroup = new THREE.Group();
      const marsPoints = new THREE.Points(marsGeometry, marsMaterial);
      marsPoints.rotateZ(-0.44);
      marsGroup.add(marsPoints);
      marsPoints.position.set(5.9, 0, 0);

      const jupiterGroup = new THREE.Group();
      const jupiterPoints = new THREE.Points(jupiterGeometry, jupiterMaterial);
      jupiterGroup.add(jupiterPoints);
      jupiterPoints.position.set(20.125, 0, 0);

      const saturnringPoint = new THREE.Points(saturnRings, ringMaterial);

      saturnringPoint.rotateX(1.9808);
      saturnringPoint.rotateX(-0.41);
      const saturnGroup = new THREE.Group();
      const saturnRingGroup = new THREE.Group();
      const saturnPoints = new THREE.Points(saturnGeometry, saturnMaterial);
      saturnRingGroup.add(saturnPoints, saturnringPoint);
      saturnRingGroup.rotateZ(0.47);
      saturnGroup.add(saturnRingGroup);
      saturnRingGroup.position.set(36.531, 0, 0);

      const uranusGroup = new THREE.Group();
      const uranusPoints = new THREE.Points(uranusGeometry, uranusMaterial);
      uranusPoints.rotateZ(1.7);
      uranusGroup.add(uranusPoints);
      uranusPoints.position.set(73.16, 0, 0);

      const neptuneGroup = new THREE.Group();
      const neptunePoints = new THREE.Points(neptuneGeometry, neptuneMaterial);
      neptunePoints.rotateZ(0.49);
      neptuneGroup.add(neptunePoints);
      neptunePoints.position.set(114.4, 0, 0);
      


      const ringPoints = [];
      for (let i = 0; i < ringGeometry.length; i++) {
         ringPoints[i] = new THREE.Points(ringGeometry[i], ringMaterial);
         ringPoints[i].rotateX(1.9808);
         // scene.add(ringPoints[i]);
         ringPoints[i].rotateX(-0.41);
         mainGroup.add(ringPoints[i]);
         
      }


      mainGroup.add(sunPoints, mercuryGroup, venusGroup, earthGroup, marsGroup, jupiterGroup, saturnGroup, neptuneGroup, uranusGroup);
      mainGroup.rotateX(0.41);

      scene.add(mainGroup);

      function animate() {
         const speed = 0.0005;
         const yAxis = new THREE.Vector3(0, 1, 0).normalize();

         mainGroup.rotateOnWorldAxis(yAxis, speed);

         mercuryGroup.rotateOnAxis(yAxis, 0.004);
         mercuryPoints.rotateOnAxis(yAxis, 0.008);

         venusGroup.rotateOnAxis(yAxis, 0.0016);
         venusPoints.rotateOnAxis(yAxis, -0.00003);

         earthGroup.rotateOnAxis(yAxis, 0.001);
         earthPoints.rotateOnAxis(yAxis, 0.008);

         marsGroup.rotateOnAxis(yAxis, 0.00056);
         marsPoints.rotateOnAxis(yAxis, 0.008);

         jupiterGroup.rotateOnAxis(yAxis, 0.00008);
         jupiterPoints.rotateOnAxis(yAxis, 0.019);

         saturnGroup.rotateOnAxis(yAxis, 0.00003);
         saturnRingGroup.rotateOnAxis(yAxis, 0.018);

         uranusGroup.rotateOnAxis(yAxis, 0.000015);
         uranusPoints.rotateOnAxis(yAxis, 0.005);

         neptuneGroup.rotateOnAxis(yAxis, 0.00000765);
         neptunePoints.rotateOnAxis(yAxis, 0.005);

         requestAnimationFrame(animate);
         renderer.render(scene, camera);
      }

      animate();
   }
}
</script>

<style>

   #planets {
      position: fixed;
      z-index: 0;
   }

</style>