import styled from "styled-components";
interface IProps {
    fullWidth?: boolean
}

const Input = styled.input<IProps>`
    ${props => props.fullWidth ? "width:100%;" : ""};
    padding: 2px 15px;
    outline: none;
    line-height: 40px;
    border:${props => props.theme.border.form};
    border-radius: 10px;
    font-weight: 500;

    transition: ${props => props.theme.transition.main};
    
    &:focus , &:hover{
        border-color: ${props => props.theme.colors.primary.main};
    }

    &::placeholder{
        color: ${props => props.theme.colors.primary.main};
    }

    margin-top:1rem;
`

export default Input;