import React, { ReactNode } from 'react'
import EditButton from 'components/EditButton'
import Style from './style'

interface IProps {
    children: ReactNode,
    onEdit: () => void,
    className?: string,
}

const ContentWithEdit = ({ children, className = "", onEdit }: IProps) => {
    return (
        <Style className={className}>
            {children} <EditButton onClick={onEdit} />
        </Style>
    )
}

export default ContentWithEdit