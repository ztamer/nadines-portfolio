"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const WEDGE_COUNT = 16;

export function ThreePinwheel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const group = new THREE.Group();

    for (let i = 0; i < WEDGE_COUNT; i++) {
      const angleStart = (i / WEDGE_COUNT) * Math.PI * 2;
      const angleEnd = ((i + 1) / WEDGE_COUNT) * Math.PI * 2;
      const color = i % 2 === 0 ? "#f62a99" : "#0a0208";
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      for (let s = 0; s <= 12; s++) {
        const a = angleStart + (s / 12) * (angleEnd - angleStart);
        shape.lineTo(Math.cos(a) * 1.5, Math.sin(a) * 1.5);
      }
      shape.lineTo(0, 0);
      group.add(
        new THREE.Mesh(
          new THREE.ShapeGeometry(shape),
          new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })
        )
      );
    }

    scene.add(group);

    let animId: number;
    let scrollY = window.scrollY;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = () => {
      animId = requestAnimationFrame(animate);
      group.rotation.z = scrollY * 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!canvas) return;
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%, 50%)",
        width: "140vmax",
        height: "140vmax",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
