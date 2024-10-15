import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three'; // 导入 THREE 命名空间

type GLTFResult = {
  nodes: {
    Curve007_1: THREE.Mesh;
    Curve007_2: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.Material;
    ['Material.002']: THREE.Material;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF('/Poimandres.gltf') as unknown as GLTFResult;

  const showa = (e: any) => {
    console.log('??', e);
  };

  return (
    <group ref={groupRef} {...props} dispose={null} onClick={e => showa(e)}>
      <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
    </group>
  );
}

useGLTF.preload('/Poimandres.gltf');