import {SortOption} from "../types/filterOptions.type";

export const onSortChange = (selectedType, data, sortingValue, sortBy, setSortBy) => {
        if(selectedType === 'sort' && sortBy !== sortingValue)
            setSortBy(sortingValue || '');
        switch(sortingValue){
            case SortOption.NAME:
                return data.sort((a,b) => {
                    if (a.nameDomain < b.nameDomain) return -1;
                    else if (a.nameDomain > b.nameDomain) return 1;
                    return 0;
                });
            case SortOption.ORIGIN_DATE:
                return data.sort((a,b) => {
                    if (a.timestamp < b.timestamp) return -1;
                    else if (a.timestamp > b.timestamp) return 1;
                    return 0;
                });
            case SortOption.PRICE_LOW_TO_HIGH:
                return data.sort((a,b) => {
                    const aIsListed = a?.attributes?.sell_orders?.[0]?.base_price;
                    const bIsListed = b?.attributes?.sell_orders?.[0]?.base_price;
                    if (aIsListed && !bIsListed) return -1;
                    else if (!aIsListed && bIsListed) return 1;
                    else if (aIsListed && bIsListed && (aIsListed - bIsListed) < 0) return -1;
                    else if (aIsListed && bIsListed && (aIsListed - bIsListed) > 0) return 1;
                    return 0;
                });
            case SortOption.PRICE_HIGH_TO_LOW:
                return data.sort((a,b) => {
                    const aIsListed = a?.attributes?.sell_orders?.[0]?.base_price;
                    const bIsListed = b?.attributes?.sell_orders?.[0]?.base_price;
                    if (aIsListed && !bIsListed) return -1;
                    else if (!aIsListed && bIsListed) return 1;
                    else if (aIsListed && bIsListed && (aIsListed - bIsListed > 0)) return -1;
                    else if (aIsListed && bIsListed && (aIsListed - bIsListed) < 0) return 1;
                    return 0;
                });
            default:
                return data.sort((a,b) => {
                    if (a.nameDomain < b.nameDomain) return -1;
                    else if (a.nameDomain > b.nameDomain) return 1;
                    return 0;
                });
        }
    };