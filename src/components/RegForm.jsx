import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RegForm({handleSubmit, handleChange, regData, enableSubmit, form}){
  return (
    <>
      <h1 className="pt-2" style={{textAlign: "center"}}>Hello {regData.fName ? regData.fName : 'User'}</h1>
      <div className='d-flex justify-content-center'>
        <Form className='px-2 py-2' onChange={(e) => handleChange(e, form)} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="fName" type="text" placeholder="Enter first Name" value={regData.fName}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" value={regData.email}/>
              <Form.Text className="text-muted">
              We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" value={regData.password}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="rememberMe" type="checkbox" label="Remember Me" value={regData.rememberMe}/>
          </Form.Group>
          {enableSubmit && <Button variant="primary" type="submit">Generate Form</Button>}
        </Form>
      </div>
    </>
  );
}