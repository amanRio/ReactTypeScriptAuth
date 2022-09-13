import React,{useState ,SyntheticEvent} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormContainer } from '../components/FormContainer';
import {useNavigate} from 'react-router-dom'



export const LoginScreen = () => { 
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    let navigate = useNavigate();

    const submitHandler = async (e: SyntheticEvent)=>{
     e.preventDefault();
     
    await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers: {'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},

        body:JSON.stringify({
            username: email,
            password
        })
    })
        .then(res=>res.json())
        .then(json=>console.log(json))

        navigate('/')

    }

    return (
        <FormContainer>
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Email" 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </FormContainer>
    )
}
