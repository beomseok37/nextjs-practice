import { ReactElement, useState } from 'react';

import Column from 'src/components/Grid/Column';
import Button from 'src/components/base/Button';

import { MoveBox, Rotate, Scene } from './style';

function PracticeAnimation(): ReactElement {
  const [state, setState] = useState(0);
  const handleClick = () => {
    setState(state + 90);
  };
  return (
    <Column>
      <p>animation</p>
      <Button onClick={handleClick}>click</Button>
      <Scene>
        <Rotate>
          <MoveBox rotateY="0" color="red">
            front
          </MoveBox>
          <MoveBox rotateY="90" color="blue">
            Right
          </MoveBox>
          <MoveBox rotateY="180" color="purple">
            Back
          </MoveBox>
          <MoveBox rotateY="-90" color="green">
            Left
          </MoveBox>
          <MoveBox rotateX="90" color="orange">
            Left
          </MoveBox>
          <MoveBox rotateX="-90" color="grey">
            Left
          </MoveBox>
        </Rotate>
      </Scene>
    </Column>
  );
}

export default PracticeAnimation;
