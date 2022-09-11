import { ReactElement, useState } from 'react';

import Column from 'src/components/Grid/Column';
import Button from 'src/components/base/Button';
import Row from 'src/components/Grid/Row';

import { MoveBox, Rotate, Scene } from './style';

function PracticeAnimation(): ReactElement {
  const [frontAngle, setFrontAngle] = useState('0');
  const [topAngle, setTopAngle] = useState('90');

  const sideList = ['Front', 'Right', 'Back', 'Left', 'Top', 'Bottom'];

  const handleClick = (side: string) => {
    switch (side) {
      case 'Front':
        setFrontAngle('0');
        break;
      case 'Right':
        setFrontAngle('-90');
        break;
      case 'Back':
        setFrontAngle('180');
        break;
      case 'Left':
        setFrontAngle('90');
        break;
      case 'Top':
        setTopAngle('0');
        break;
      case 'Bottom':
        setTopAngle('180');
        break;
      default:
        console.error('wrong input');
        break;
    }
  };
  return (
    <Column>
      <p>animation</p>
      <Row>
        {sideList.map((side) => (
          <Button key={side} onClick={() => handleClick(side)}>
            {side}
          </Button>
        ))}
      </Row>

      <Scene>
        <Rotate>
          <MoveBox
            rotateY={frontAngle}
            rotateX={`${+topAngle - 90}`}
            color="red"
          >
            Front
          </MoveBox>
          <MoveBox
            rotateY={`${+frontAngle + 90}`}
            rotateX={`${+topAngle - 90}`}
            color="blue"
          >
            Right
          </MoveBox>
          <MoveBox
            rotateY={`${+frontAngle + 180}`}
            rotateX={`${+topAngle - 90}`}
            color="purple"
          >
            Back
          </MoveBox>
          <MoveBox
            rotateY={`${+frontAngle - 90}`}
            rotateX={`${+topAngle - 90}`}
            color="green"
          >
            Left
          </MoveBox>
          <MoveBox rotateX={topAngle} rotateZ={`${-frontAngle}`} color="orange">
            Top
          </MoveBox>
          <MoveBox
            rotateX={`${+topAngle - 180}`}
            rotateZ={frontAngle}
            color="grey"
          >
            Bottom
          </MoveBox>
        </Rotate>
      </Scene>
    </Column>
  );
}

export default PracticeAnimation;
