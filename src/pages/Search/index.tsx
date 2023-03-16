import React from 'react'
import needAuth from 'utils/HOC/needAuth'

const Search = () => {
    return (
        <div>Search</div>
    )
}

export default needAuth(Search)