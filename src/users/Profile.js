import React from 'react'

const Header = React.lazy(() => import('../layouts/Header'))

const Profile = props => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Profile;