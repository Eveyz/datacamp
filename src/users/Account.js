import React from 'react';

const Header = React.lazy(() => import('../layouts/Header'))

const Account = props => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Account;