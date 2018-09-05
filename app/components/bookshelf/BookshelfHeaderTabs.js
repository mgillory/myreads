// @flow
import * as React from 'react';

import { HeaderContainer } from 'Styles/common/CommonComponents';

import {
  Tabs,
  Tab,
  Button,
} from 'Styles/components/bookshelf/_BookshelfHeaderTabs';

type Props = {
  changeShelf: Function,
}

const BookshelfHeaderTabs = ({ changeShelf }: Props) => {
  const changeToShelfCurrentlyReading = () => changeShelf('currentlyReading');
  const changeToShelfWantToRead = () => changeShelf('wantToRead');
  const changeToShelfRead = () => changeShelf('read');

  return (
    <HeaderContainer>
      <Tabs>
        <Tab>
          <Button type="button" onClick={changeToShelfCurrentlyReading}>Currently Reading</Button>
        </Tab>
        <Tab>
          <Button type="button" onClick={changeToShelfWantToRead}>Want to Read</Button>
        </Tab>
        <Tab>
          <Button type="button" onClick={changeToShelfRead}>Already Read</Button>
        </Tab>
      </Tabs>
    </HeaderContainer>
  );
};

export default BookshelfHeaderTabs;