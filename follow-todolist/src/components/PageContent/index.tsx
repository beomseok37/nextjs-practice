import { ReactElement } from 'react';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

import Row from 'src/components/Grid/Row';

interface props {
  done?: boolean;
  content: string;
}

function PageContent({ done, content }: props): ReactElement {
  return (
    <Row height="fit-content" padding="1rem">
      {done ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      <p>{content}</p>
    </Row>
  );
}

PageContent.defaultProps = {
  done: false,
};

export default PageContent;
