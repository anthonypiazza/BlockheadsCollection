import {Select} from "@chakra-ui/react";
import React from "react";
import {DropdownContainer, TitleText, SelectContainer} from "../styles";
import {masterControl} from "../helpers";

export const FilterSelectDropdown = ({filter, defaultValue}) => (
    <DropdownContainer>
        <TitleText>
            <span>{filter.Label}</span>
        </TitleText>
        <SelectContainer>
            <Select
                name={filter.name}
                defaultValue={defaultValue || null}
                size="lg"
                placeholder="Select..."
                onChange={(e) => masterControl(e, filter.eventHandler)}
            >
                {filter.options.map(option => <option key={option.value} value={option.value}>{option.title}</option>)}
            </Select>
        </SelectContainer>
    </DropdownContainer>
);