import { Heading, Page, Layout } from "@shopify/polaris";
import Login from '../modules/Login/Login';
import LoginThirdParty from '../modules/LoginThirdParty/LoginThirdParty';

const Index = () => (
  <Page>
    <Layout className='layout-login'>
      <Heading className='text-title'>USACI Store</Heading>
      <Login />
      <LoginThirdParty />
    </Layout>
  </Page>
);

export default Index;
