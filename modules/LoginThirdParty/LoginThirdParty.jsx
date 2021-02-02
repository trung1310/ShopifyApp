import React, {useState} from 'react';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import {DisplayText, Button} from '@shopify/polaris';

// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';
import Image from 'next/image';
import './_LoginThirdParty.scss';

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

  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    setUser({
      name: '',
      email: '',
    })
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const {signIn} = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline'
  });

  const {signOut} = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  })


  return (
    <div>
      {
        user.name !== '' ? null : (
          <div className='button btn-signin'>
            <Button onClick={signIn}>
              <Image 
                src='/images/google.svg'
                alt='Google icon'
                width={30}
                height={30}
              />
              <span className='button-text'>Sign in with google</span>
            </Button>
          </div>
        )
      }
      {
        user.name !== '' ? (
          <>
          <DisplayText size='medium'>Good morning, {user.name}.</DisplayText>
          <div className='button btn-signout'>
            <Button onClick={signOut}>
              <Image 
                src='/images/google.svg'
                alt='Google icon'
                width={30}
                height={30}
              />
              <span className='button-text'>Sign out</span>
            </Button>
          </div>
          </>
        ) : null
      }
      
    </div>
  );
}

export default LoginThirdParty;