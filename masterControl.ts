import { blockheadData } from '../constants/blockheadData';
import { onCountFilterChange, onYearFilterChange, onSaleFilterChange, onSortChange } from './index'

export const masterControl = (e, handler, sortType, yearType, countType, saleType, blockheads, setBlockheads) => {
    let heads = blockheadData;
    const selectedChange = e.target.value;
    const selectedType = e.target.name;
    switch(handler){
        case 'onSort':
            heads = onCountFilterChange(selectedType, heads, countType);
            heads = onYearFilterChange(selectedType, heads, yearType);
            heads = onSaleFilterChange(selectedType, heads, saleType);
            heads = onSortChange(selectedType, heads, selectedChange);
            setBlockheads(heads);
            return;
        case 'onYear':
            heads = onSortChange(selectedType, heads, sortType);
            heads = onCountFilterChange(selectedType, heads, countType);
            heads = onSaleFilterChange(selectedType, heads, saleType);
            heads = onYearFilterChange(selectedType, heads, selectedChange);
            setBlockheads(heads);
            return;
        case 'onCount':
            heads = onSortChange(selectedType, heads, sortType);
            heads = onYearFilterChange(selectedType, heads, yearType);
            heads = onSaleFilterChange(selectedType, heads, saleType);
            heads = onCountFilterChange(selectedType, heads, selectedChange);
            setBlockheads(heads);
            return;
        case 'onSale':
            heads = onSortChange(selectedType, heads, sortType);
            heads = onYearFilterChange(selectedType, heads, yearType);
            heads = onCountFilterChange(selectedType, heads, countType);
            heads = onSaleFilterChange(selectedType, heads, selectedChange);
            setBlockheads(heads);
            return;
        default:
            return
    }
}