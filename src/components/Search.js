import React, { useState } from 'react'
import '../style/Search.scss'

import SearchIcon from '@material-ui/icons/Search'

function Search() {
    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className="search__inputIcon" />
                <input type='text' placeholder="Search..."/>
            </div>
        </form>
    )
}

export default Search
