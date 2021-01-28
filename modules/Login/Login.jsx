import React, {useState} from 'react';
import {Heading, Button, TextField, Form, FormLayout, InlineError} from '@shopify/polaris';

const Login = () =>{
  const [field, setField] = useState({
    email: '',
    password: ''
  });
  const [isCorrect, setIsCorrect] = useState(true);

  const {email, password} = field;
  const pass = '123'

  const handleSubmit = () => {
    let check = false;
    if(field){
      if(password === pass){
        console.log('email: ', email)
        console.log('password: ', password)
        check = true;
      }else {
        console.log('Failed !')
        check = false;
      }
    }
    setIsCorrect(check);
  }

  const handleChange = (value, id) => {
    if(id === 'email'){
      setField((prevState) => ({
       ...prevState,
        email: value
      }))
    } else {
      setField((prevState) => ({
        ...prevState,
         password: value
       }))
    }
  };


  return (
    <div>
      <Heading>Login</Heading>
      <Form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          value={email}
          id='email'
          onChange={handleChange}
          label="Email"
          type="email"
        />
        

        <TextField
          value={password}
          id='pass'
          onChange={handleChange}
          label="Password"
          type="password"
          placeholder='pass: 123'
          helpText={ isCorrect ? null : <InlineError message="Password is not correct" fieldID="email" />}
        />

        <Button submit>Submit</Button>
      </FormLayout>
    </Form>
    </div>
  );

}

export default Login;
