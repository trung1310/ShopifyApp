import React, {useState} from 'react';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import {DisplayText, Button} from '@shopify/polaris';

// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';
import ggIcon from '../../public/images/google.svg';
import Image from 'next/image'

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
          // <GoogleLogin
          //   clientId={clientId}
          //   render={renderProps => (
          //     <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          //       Signin with Google
          //     </Button>
          //   )}
          //   buttonText="Login"
          //   onSuccess={onSuccess}
          //   onFailure={onFailure}
          //   cookiePolicy={'single_host_origin'}
          //   style={{ marginTop: '100px' }}
          //   isSignedIn={true}
          // />
          <div className='button'>
            <Button onClick={signIn}>
              {/* <img alt='googleIcon' src={ggIcon} className='icon' /> */}
              <span className='button-text'>Sign in with google</span>
            </Button>
          </div>
        )
      }
      {
        user.name !== '' ? (
          <>
          <DisplayText size="medium">Good morning, {user.name}.</DisplayText>
          {/* <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
          /> */}
          <div className='button'>
            <Button onClick={signOut}>
              {/* <img alt='googleIcon' src={ggIcon} className='icon' /> */}
              <Image 
                src='/images/google.svg'
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <span className='button-text'>Signout</span>
            </Button>
          </div>
          </>
        ) : null
      }
      
    </div>
  );
}

export default LoginThirdParty;