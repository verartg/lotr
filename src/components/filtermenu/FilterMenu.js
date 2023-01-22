import React from "react";

const FilterMenu = ({race, onChange, children}) => {

    return (
        <select
        value={race}
        placeholder="Select race"
        onChange={(e) => onChange(e.target.value)}
        >
            {children}
        </select>
    );
}

export default FilterMenu;