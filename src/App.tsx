import { useState } from 'react';
import ButtonsBar from './ButtonBar';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <ButtonsBar setColor={setColor}></ButtonsBar>
    </>
  );
}

export default App;
