import { ReactElement } from 'react';

import Column from 'src/components/Grid/Column';
import ThreeDimensionCube from './ThreeDimensionCube';

function PracticeAnimation(): ReactElement {
  return (
    <Column>
      <p>animation</p>
      <ThreeDimensionCube />
    </Column>
  );
}

export default PracticeAnimation;
