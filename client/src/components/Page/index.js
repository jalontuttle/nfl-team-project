import React from 'react';
import PageContent from '../PageContent';
import Teams from '../Teams';

import Home from '../Home';
import Login from '../Login';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'teams':
        return <Teams />;
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;
      default:
        return <Home />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
