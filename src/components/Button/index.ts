import styled, { css } from "styled-components";
type TVariant = "filled" | "outlined";

const filledStyle = css`
    background-color: ${props => props.theme.colors.primary.main};
    transition: ${props => props.theme.transition.main};
    border: ${props => props.theme.border.form};
    border-color:${props => props.theme.colors.primary.main};

    &:hover{
        background-color: ${props => props.theme.colors.primary.primary300};
        border-color:${props => props.theme.colors.primary.primary300};
    }
`

const outlinedStyle = css`
    color: ${props => props.theme.colors.primary.main};
    border: ${props => props.theme.border.form};
    border-color:${props => props.theme.colors.primary.main};
    transition: ${props => props.theme.transition.main};
    background-color: transparent;
    
    &:hover{
        background-color: ${props => props.theme.colors.gray.gray4};
    }
`
type TSize = "small" | "medium" | "large";
type TShape = "box" | "rounded_small" | "rounded_large" | "circled";

interface IProps {
    variant?: TVariant
    size?: TSize
    fullWidth?: boolean
    shape?: TShape
    margin?: string
}

const Button = styled.button<IProps>`
    outline: none;
    margin:${props => props.margin ? props.margin : "1rem 0 0"};
    padding: 0.5rem 1rem ;

    ${props => props.variant === 'outlined' ? outlinedStyle : filledStyle};
`

export default Button;