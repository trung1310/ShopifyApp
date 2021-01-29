import { useState } from "react";

import { DisplayText, Page, Layout, EmptyState } from "@shopify/polaris";
import store from 'store-js';

import AnnotatedLayout from "../modules/AnnotatedLayout/annotated-layout";
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';
import LoginThirdParty from '../modules/LoginThirdParty/LoginThirdParty';
import ResourceListWithProducts from '../components/ResourceList/ResourceList';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
import './style.scss';

const Index = () => {
  const [open, setOpen] = useState(false)

  const handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    setOpen(false);

    store.set('ids', idsFromResources);
  }
  
  return (
    <Page>
      <div className='layoutTop'>
        <Layout >
          <LoginThirdParty />
        </Layout>
      </div>

      <div className='layoutBottom'>
        <Layout>
          <TitleBar
            title="Sample App"
            primaryAction={{
              content: 'Choose products',
              onAction: () => setOpen(true),
            }}
          />
          <ResourcePicker
            resourceType="Product"
            showVariants={false}
            open={open}
            onSelection={(resources) => handleSelection(resources)}
            onCancel={() => setOpen(false)}
          />
          <DisplayText size='extraLarge'>USACI Store</DisplayText>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: 'Select products',
              onAction: () => setOpen(true),
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
          <AnnotatedLayout  />
        </Layout>

        <ResourceListWithProducts />
      </div>
    </Page>
)};

export default Index;
