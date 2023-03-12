


import React, { useState } from 'react'
import { PATHS } from 'router';

// components
import { Button, Input, H1, Divider, InputGroup, CustomLink } from 'components';

// layout
import AuthPages from 'layouts/AuthPages';

// hooks
import { useNavigate } from 'react-router-dom';

// validation
import signupSchema from 'validation/signupSchema';

// types
import IApiResponse from 'types/apiResponse';
import IUserAuthResponse from 'types/userAuthResponse';
import { signupApi } from 'api/auth';

const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: { value: "", error: "" },
        password: { value: "", error: "" },
        passwordConfirmation: { value: "", error: "" },
    })

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
    }

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signupSchema.validate({
            username: data.username.value,
            password: data.password.value,
            passwordConfirmation: data.passwordConfirmation.value,
        }, { abortEarly: false }).then(async () => {
            const res: IApiResponse<IUserAuthResponse> = await signupApi(data.username.value, data.password.value)
            if (res.status === 'SUCCESS') {
                // TODO: store the user in redux
                navigate(PATHS.HOME)
            } else {
                setData(prev => ({
                    ...prev,
                    username: { ...prev.username, error: res.error },
                }))
            }
        }).catch(err => {
            const tempData = { ...data };
            // @ts-ignore
            err.inner.forEach(({ message, params }) => { tempData[params.path].error = message; });
            setData({ ...tempData });
        })
    }

    return (
        <AuthPages>
            <H1 align='center' margin="0 0 1rem" weight={600}>Log in to Upwork</H1>
            <form onSubmit={handelSubmit}>
                <InputGroup
                    label='Username'
                    fullWidth
                    onChange={handelChange}
                    name="username"
                    value={data.username.value}
                    error={data.username.error}
                />
                <InputGroup
                    label='Password'
                    fullWidth
                    onChange={handelChange}
                    name="password"
                    type='password'
                    value={data.password.value}
                    error={data.password.error}
                />
                <InputGroup
                    label='Confirm password'
                    fullWidth
                    onChange={handelChange}
                    type='password'
                    name="passwordConfirmation"
                    value={data.passwordConfirmation.value}
                    error={data.passwordConfirmation.error}
                />
                <Button fullWidth>Sign up</Button>
            </form>
            <Divider>Or</Divider>
            <CustomLink to="LOG_IN">
                <Button variant='outlined' fullWidth>
                    Already have an account? Login
                </Button>
            </CustomLink>
        </AuthPages>
    )
}

export default Signup
