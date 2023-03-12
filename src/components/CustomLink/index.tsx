import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { PATHS } from '@router';

import { Link } from 'react-router-dom';

const LinkSpan = styled.span`
  display: contents;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  
  a{
    display: contents;
    text-decoration: none;
    color: inherit;
  }
`;

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
    to: keyof typeof PATHS,
    children: ReactNode
}
const CustomLink = ({ to, children, ...rest }: IProps) => {

    return <LinkSpan {...rest}>
        <Link to={to}>
            {children}
        </Link>
    </LinkSpan>
}

export default CustomLink;