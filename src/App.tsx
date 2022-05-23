import React from 'react';

import { useRive, useStateMachineInput } from 'rive-react';

// @ts-ignore
import SafeBoxIconAnimation from './assets/animation/safe-box-icon.riv';

function App() {
  const STATE_MACHINE_NAME = 'State Machine 1';
  const INPUT_NAME = 'Pressed';

  const { rive, RiveComponent } = useRive({
    src: SafeBoxIconAnimation,
    autoplay: true,
    animations: 'Hover_in',
    stateMachines: STATE_MACHINE_NAME,
  });

  const onClickInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f1e3e',
      }}
      onClick={() => onClickInput?.fire()}
    >
      <RiveComponent
        height={'100vh'}
        width={'100vw'}
        style={{
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  );
}

export default App;
