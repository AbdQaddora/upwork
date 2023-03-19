import React, { useState } from 'react'
import { Container, H1, SideModal } from 'components'
import Style from './style'
import needAuth from 'utils/HOC/needAuth';
import { useAppDispatch } from 'hooks/redux';
import User from './components/User';
import Search from './components/Search';
import JobsTabs from './components/JobsTabs';
import IJob from 'types/Job';
import JobDetail from 'components/JobDetail';

const Home = () => {
    const [job, setJop] = useState<IJob | null>(null);
    const [isJopModalOpen, setIsJopModalOpen] = useState(false);

    const onJobClick = (jobData: IJob) => {
        setIsJopModalOpen(true);
        setJop(jobData)
    }

    return (
        <>
            {isJopModalOpen && <SideModal close={() => setIsJopModalOpen(false)}>
                <JobDetail job={job as IJob} />
            </SideModal>}
            <Container>
                <Style>
                    <div>
                        <Search />
                        <JobsTabs onJobClick={onJobClick} />
                    </div>
                    <User />
                </Style>
            </Container>
        </>
    )
}

export default needAuth(Home)