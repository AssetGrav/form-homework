import React from "react";

const SearchUsers = ({ onChange }) => {
    return (
        <input
            type="search"
            name="search"
            id="form1"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={onChange}
        />
    )
}
 
export default SearchUsers;