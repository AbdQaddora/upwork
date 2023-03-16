import { useAppSelector } from 'hooks/redux'
import Style from './style'

const User = () => {
    const { user, isFetching, isLoggedIn } = useAppSelector(state => state.user)
    return (
        <Style>

        </Style>
    )
}

export default User