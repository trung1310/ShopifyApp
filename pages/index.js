import { Heading, Page, Layout } from "@shopify/polaris";
import Login from '../modules/Login/Login';
import LoginThirdParty from '../modules/LoginThirdParty/LoginThirdParty';
import './style.scss';

const Index = () => (
  <Page>
    <Layout className='layout-top'>
      <Heading>USACI Store</Heading>
      <Login />
    </Layout>
    <Layout className='layout-bottom'>
      <LoginThirdParty />
    </Layout>
  </Page>
);

export default Index;
