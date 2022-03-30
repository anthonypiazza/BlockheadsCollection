import {SaleOption} from "../types/filterOptions.type";

export const onSaleFilterChange = (selectedType, data, selectedSale, saleFilter, setSaleFilter) => {
        if(selectedType === 'sale' && saleFilter !== selectedSale)
            setSaleFilter(selectedSale || '');
        switch(selectedSale){
            case SaleOption.BUY_NOW:
                return data.filter(head => !!head?.attributes?.sell_orders?.[0]?.base_price)
            case SaleOption.UNLISTED:
                return data.filter(head => !(head?.attributes?.sell_orders?.[0]?.base_price))
            default:
                return data
        }
    };