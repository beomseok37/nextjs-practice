import { NextPage } from 'next';
import Page from 'src/components/Page';

import { DROPDOWN_MENU_PAGE_CONTENT } from 'src/constant/page';

const DropdownMenu: NextPage = () => {
  return (
    <Page
      header="dropdown menu"
      pageContentList={[{ content: DROPDOWN_MENU_PAGE_CONTENT, done: false }]}
    >
      hihi
    </Page>
  );
};

export default DropdownMenu;
