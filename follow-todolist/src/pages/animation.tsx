import { NextPage } from 'next';

import Page from 'src/components/Page';
import PracticeAnimation from 'src/components/PracticeAnimation';

const Animation: NextPage = () => {
  return (
    <Page
      header="animation"
      pageContentList={[{ content: 'transform, translate 공부', done: true }]}
    >
      <PracticeAnimation />
    </Page>
  );
};

export default Animation;
