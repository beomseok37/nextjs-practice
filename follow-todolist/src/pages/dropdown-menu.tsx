import { NextPage } from 'next';
import { useState } from 'react';

import Page from 'src/components/Page';
import DropdownMenu from 'src/components/DropdownMenu';

import { DROPDOWN_MENU_PAGE_CONTENT } from 'src/constant/page';

const DropdownMenuPage: NextPage = () => {
  const bind = useState('');
  const menuList = ['사과', '배', '오렌지', '수박'];

  return (
    <Page
      header="dropdown menu"
      pageContentList={[{ content: DROPDOWN_MENU_PAGE_CONTENT, done: false }]}
    >
      <DropdownMenu bind={bind} menuList={menuList} />
    </Page>
  );
};

export default DropdownMenuPage;
