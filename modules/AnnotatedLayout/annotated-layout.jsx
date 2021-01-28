import React, {useState} from 'react';
import { 
    Card, 
    Layout, 
    Page, 
    Button,
    Form,
    FormLayout,
    Stack,
    TextField,
} from '@shopify/polaris';

function AnnotatedLayout() {

    const [discount, setDiscount] = useState('10%')

    const handleSubmit = () => {
        setDiscount(discount);
        console.log('submission: ', discount);
      };
    
    const handleChange = () => {
        return (value) => setDiscount(value);
    };

    return (
        <Page>
        <Layout>
          <Layout.AnnotatedSection
            title='Default discount'
            description='Add a product to Sample App, it will automatically be discounted.'
          >
            <Card sectioned>  
                <Form onSubmit={handleSubmit}>
                    <FormLayout>
                    <TextField
                        value={discount}
                        onChange={handleChange()}
                        label='Discount percentage'
                        type='discount'
                    />
                    <Stack distribution='trailing'>
                        <Button primary submit>
                        Save
                        </Button>
                    </Stack>
                    </FormLayout>
                </Form>
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    )
}

export default AnnotatedLayout
