import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="row col-8 col-md-5 col-lg-4">
            <input type="search" className="form-control col" id="formGroupExampleInput" placeholder="Example input placeholder" onChange={props.change} value={props.search}/>
            <button className="btn btn-outline-success col-3 col-sm-2" type="submit" onClick={props.submission}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>        
            </button>
        </div>
    )
}

export default SearchBar;