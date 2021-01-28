import React, {useEffect, useState} from 'react';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {DisplayText} from '@shopify/polaris';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId =
  '353459151264-rgj7g8n05n9vtg9l2r6rpkqr24ammgh7.apps.googleusercontent.com';

function LoginThirdParty() {
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const onSuccess = (res) => {
    if(res){
      console.log('Login Success: currentUser:', res.profileObj);
      setUser({
        ...user,
        name: res.profileObj.name,
        email: res.profileObj.email,
      })
  
      refreshTokenSetup(res);
    }else {
      console.log('Logout made successfully: ');
      setUser({
        name: '',
        email: '',
      })
    }
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };


  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
      {
        user.name !== '' ? (
          <>
          <DisplayText size="medium">Good morning, {user.name}.</DisplayText>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
          />
          </>
        ) : null
      }
      
    </div>
  );
}

export default LoginThirdParty;