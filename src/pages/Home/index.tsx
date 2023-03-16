import React, { useState } from 'react'
import { Container, H1, SideModal } from 'components'
import Style from './style'
import needAuth from 'utils/HOC/needAuth';
import { useAppDispatch } from 'hooks/redux';
import { logout } from 'redux/features/userSlice';

const Home = () => {
    const [jop, setJop] = useState({});
    const [isJopModalOpen, setIsJopModalOpen] = useState(false);
    const dispatch = useAppDispatch();
    return (
        <>
            {isJopModalOpen && <SideModal close={() => setIsJopModalOpen(false)}>
                <H1>Hello WORLD</H1>
            </SideModal>}
            <Container>
                <Style>
                    <button onClick={() => dispatch(logout())}>logout</button>
                </Style>
            </Container>
        </>
    )
}

export default needAuth(Home)