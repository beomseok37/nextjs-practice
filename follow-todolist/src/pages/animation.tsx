import { NextPage } from 'next';

import Page from 'src/components/Page';
import PracticeAnimation from 'src/components/PracticeAnimation';

const Animation: NextPage = () => {
  return (
    <Page
      header="animation"
      pageContentList={[{ content: 'transform, translateZ 공부', done: false }]}
    >
      <PracticeAnimation />
    </Page>
  );
};

export default Animation;
