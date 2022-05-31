import { useState } from 'react';
import { AgregarCategoria } from './components/AgregarCategoria';
import {CuadriculaVideos} from './components/CuadriculaVideos'


function PornApp() {
  const [categoria, setCategoria] = useState(['sissy'])
  return (
    <>
     <h1>Porn App</h1>
     <AgregarCategoria setCategoria={setCategoria} />
     <hr/>
     <ol>
       {/* {console.log(categoria)} */}
       {
          <CuadriculaVideos key={categoria} categoria={categoria}/> 
       }
     </ol>
    </>
  );
}

export default PornApp;
