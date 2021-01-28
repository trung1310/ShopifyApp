import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '353459151264-rgj7g8n05n9vtg9l2r6rpkqr24ammgh7.apps.googleusercontent.com';

function LogoutThirdParty() {
  const onSuccess = () => {
    console.log('Logout made successfully: ');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default LogoutThirdParty;