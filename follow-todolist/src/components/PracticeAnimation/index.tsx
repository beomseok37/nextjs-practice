import { ReactElement, useState } from 'react';

import Column from 'src/components/Grid/Column';
import Button from 'src/components/base/Button';

import { MoveBox } from './style';

function PracticeAnimation(): ReactElement {
  const [state, setState] = useState(0);
  const handleClick = () => {
    setState(state > 0 ? state - 80 : state + 80);
  };
  return (
    <Column>
      <p>animation</p>
      <Button onClick={handleClick}>click</Button>
      <MoveBox state={state}>hihi</MoveBox>
    </Column>
  );
}

export default PracticeAnimation;
