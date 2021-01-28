import { Heading, Page, Layout } from "@shopify/polaris";
import Login from '../modules/Login/Login';
import LoginThirdParty from '../modules/LoginThirdParty/LoginThirdParty';
import './style.scss';

const Index = () => (
  <Page>
    <div className='layoutTop'>
      <Layout>
        <Heading>USACI Store</Heading>
        <Login />
      </Layout>
    </div>

    <div className='layoutBottom'>
      <Layout >
      <Heading>Login Social</Heading>
        <LoginThirdParty />
      </Layout>
    </div>
  </Page>
);

export default Index;
