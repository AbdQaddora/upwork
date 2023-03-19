import React, { ReactNode, useState } from 'react'
import Style from './style'
interface ITap {
    title: string,
    content: ReactNode
}
interface IProps {
    tabs: ITap[]
}

const Tabs = ({ tabs }: IProps) => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].title)
    return (
        <Style>
            <div className="tabs_head">
                {tabs.map(el => <button
                    className={`tabs_head_item ${el.title === activeTab ? "active" : ""}`}
                    onClick={() => {
                        setActiveTab(el.title)
                    }}>{el.title}</button>)}
            </div>
            <div className="body">
                {tabs.find(el => el.title === activeTab)?.content}
            </div>
        </Style>
    )
}

export default Tabs