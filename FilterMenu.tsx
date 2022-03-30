import React from "react";
import { BaseClassEvenSpread, FilterContainer } from "../styles";
import { FilterSelectDropdown } from "./index";
import { filterDropdownData } from "../constants/filterDropdown";

export const FilterMenu = React.memo(() => {
    const [sortBy, setSortBy] = React.useState('');
    const [countFilter, setCountFilter] = React.useState('');
    const [yearFilter, setYearFilter] = React.useState('');
    const [saleFilter, setSaleFilter] = React.useState('');

    return (
        <FilterContainer>
            <BaseClassEvenSpread>
                <FilterSelectDropdown filter={filterDropdownData.sortFilter} defaultValue={sortBy || null}/>
                <FilterSelectDropdown filter={filterDropdownData.yearFilter} defaultValue={yearFilter || null} />
            </BaseClassEvenSpread>
            <BaseClassEvenSpread>
                <FilterSelectDropdown filter={filterDropdownData.countFilter} defaultValue={countFilter || null}/>
                <FilterSelectDropdown filter={filterDropdownData.saleFilter} defaultValue={saleFilter || null} />
            </BaseClassEvenSpread>
        </FilterContainer>
    )
});