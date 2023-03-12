import styled from "styled-components";

const Style = styled.div`
    position: relative;

    .nav{
        position: static;
        padding: 24px;
        top:0;
        left: 0;
        right: 0;
        background-color: #fff;
    }

    .footer{
        padding: 70px;
        margin:0 24px 24px;
        border-radius: 8px;
        background-color: ${props => props.theme.colors.black};
    }

    .auth_form{
        padding-top: 30px;
        width: 80%;
        max-width: 1200px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        .card{
            padding: 30px;
            margin-top: 30px;
            margin-bottom: 30px;
            border: ${props => props.theme.border.base};
            border-radius: 16px;
            width: 45%;
        }
    }
`

export default Style;