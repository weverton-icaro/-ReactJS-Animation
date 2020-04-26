import React, {useState} from 'react';

import Switch from './components/switch';

const initialState = {
  fat: false,
  bald: false,
  poor: false
};

const App = () => {
  const [switches, setSwitches] = useState(initialState);

  const toggleSwitch = id => {
    const currentState = switches[id];
    if (currentState === undefined) return;

    const activeSwitches = Object.values(switches).filter(values => values).length;
    const maxActive = Object.values(switches).length - 1;
    const newState = activeSwitches === maxActive ? initialState : switches;
    setSwitches({...newState, [id]: !currentState });
  };

  return (
    <div className="container">
      <h1>Choises</h1>
      <Switch onClick={toggleSwitch} id="fat" active={switches['fat']} label="Fat" />
      <Switch onClick={toggleSwitch} id="bald" active={switches['bald']} label="Bald" />
      <Switch onClick={toggleSwitch} id="poor" active={switches['poor']} label="Poor" />
    </div>
  );


};

export default App;