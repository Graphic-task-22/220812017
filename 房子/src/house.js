import * as THREE from 'three';

export default function createHouse({
  baseSize = [40, 20, 40],
  roofHeight = 16,
  roofRadius = 36,
} = {}) {
  const group = new THREE.Group();

  // 主体 - 粉色
  const base = new THREE.Mesh(
    new THREE.BoxGeometry(...baseSize),
    new THREE.MeshLambertMaterial({ color: 0xFFC0CB }) // 粉色
  );
  base.position.y = baseSize[1] / 2;
  group.add(base);

  // 屋顶 - 粉色
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(roofRadius, roofHeight, 4),
    new THREE.MeshLambertMaterial({ color: 0xFFC0CB }) // 粉色
  );
  roof.position.y = baseSize[1] + roofHeight / 2;
  roof.rotation.y = Math.PI / 4;
  group.add(roof);

  // 门窗 - 保持原来的颜色（天蓝色）或也可以修改
  const door = new THREE.Mesh(
    new THREE.BoxGeometry(10, 6, 0.5),
    new THREE.MeshLambertMaterial({ color: 0x87ceeb }) // 天蓝色
  );
  door.position.set(0, 3, baseSize[2] / 2 + 0.25);
  group.add(door);

  const winMaterial = new THREE.MeshLambertMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.5 });
  const window1 = new THREE.Mesh(new THREE.BoxGeometry(8, 5, 0.2), winMaterial);
  window1.position.set(-10, 10, baseSize[2] / 2 + 0.25);
  const window2 = window1.clone();
  window2.position.x = 10;
  group.add(window1, window2);

  return group;
}