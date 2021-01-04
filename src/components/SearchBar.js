import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props)=>(
    <div className='insidebox'>
        <div className="inputbox" id='searchBar'>
            <FontAwesomeIcon className='icon' icon={faSearch}/>
            <input
                type='text'
                placeholder="Search"
                className="searchInput" 
                name="search" 
                value={ props.search } 
                onChange={ e => props.setSearch(e.target.value) }
            />
        </div>
        <button type='button' className='toggle' onClick={()=>props.setShowAdd(!props.showAdd)}>New</button>
    </div>
)

export default SearchBar