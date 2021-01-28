import { DisplayText, Page, Layout, EmptyState } from "@shopify/polaris";
import AnnotatedLayout from "../modules/AnnotatedLayout/annotated-layout";
import { TitleBar } from '@shopify/app-bridge-react';
// import Login from '../modules/Login/Login';
import LoginThirdParty from '../modules/LoginThirdParty/LoginThirdParty';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
import './style.scss';
import { useState } from "react";

const Index = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <Page>
      <div className='layoutTop'>
        <Layout >
          <LoginThirdParty />
        </Layout>
      </div>

      <div className='layoutBottom'>
        <TitleBar
          title="Sample App"
          primaryAction={{
            content: 'Select products',
          }}
        />
        <Layout>
          <DisplayText size='extraLarge'>USACI Store</DisplayText>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: 'Select products',
              onAction: () => console.log('clicked'),
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
          <AnnotatedLayout  />
        </Layout>
      </div>
    </Page>
)};

export default Index;
