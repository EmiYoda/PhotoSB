import React, { useState } from 'react'
import '../style/Search.scss'

import SearchIcon from '@material-ui/icons/Search'

function Search() {
    return (
        <div className='search'>
            <div className='search__input'>
                <SearchIcon className="search__inputIcon" />
                <input type='text' placeholder="Search..."/>
            </div>
        </div>
    )
}

export default Search
