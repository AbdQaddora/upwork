import React from 'react'

// components
import Button from '@components/Button';
import Input from '@components/Input';
import { H1 } from '@components/Typography';

// layout
import AuthPages from '@layouts/AuthPages';

// hooks
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <AuthPages>
            <H1 align='center' weight={600}>Log in to Upwork</H1>
            <Input fullWidth placeholder='username' />
            <Input fullWidth placeholder='password' type={"password"} />
            <Button></Button>
        </AuthPages>
    )
}

export default Login