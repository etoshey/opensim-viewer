import { Canvas, useThree } from '@react-three/fiber'
import { useTheme } from '@mui/material'
import { useGLTF, GizmoHelper, GizmoViewport, Bounds, Environment } from '@react-three/drei'
import BottomBar from './BottomBar';
import SettingsDrawer from './SettingsDrawer';
import OpenSimControl from './OpenSimControl';
import { Vector3 } from 'three/src/math/Vector3';

function OpenSimModel() {
  
   const {
    gl, // WebGL renderer
    camera
  } = useThree();


  window.addEventListener("keyup", (event) => {
    if (event.code==='KeyP'){ // P for print screen
      const link = document.createElement('a')
      link.setAttribute('download', 'viewer_snapshot.png')
      link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
      link.click()
      event.preventDefault();
    };
    if (event.code==='KeyI'){ // I for camera zoom in
      let v = new Vector3();
      camera.position.lerp(v.set(1, 0, 0), 0.025);
    };
    if (event.code==='KeyO'){ // O for camera zoom out
      let v = new Vector3();
      camera.position.lerp(v.set(1, 0, 0), -0.025);
    }    
  });
  
  // useGLTF suspends the component, it literally stops processing
  const { scene } = useGLTF('/builtin/leg39_nomusc.gltf' )
  // By the time we're here the model is guaranteed to be available
  return <primitive object={scene} />
}


const ModelViewPage = () => {
  const theme = useTheme();
  console.log(theme.palette.mode);
  return (
    <div id="canvas-container">
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows 
          style={{ width: "100vw", height: "85vh" }}
          camera={{ position: [1500, 2000, 1000], fov: 75, far: 10000}}>
        <color attach="background" 
            args={(theme.palette.mode==='dark')?['#151518']:['#cccccc']} />
        <directionalLight position={[1500, 2000, 1000]} intensity={0.05} shadow-mapSize={128} castShadow />
        <Bounds fit clip>
          <OpenSimModel />
        </Bounds>
        <Environment preset='city' />
        <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
        <OpenSimControl />
      </Canvas>
      <SettingsDrawer/>
      <BottomBar/>
    </div>
  );
};

export default ModelViewPage;