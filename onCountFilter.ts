import {singleBlockheads, duplicateBlockheads} from '../constants/blockheadData';

export const onCountFilterChange = (selectedType: string, data, selectedCount, countFilter, setCountFilter) => {
    if (selectedType === 'count' && countFilter !== selectedCount)
        setCountFilter(selectedCount || '')
    switch (selectedCount) {
        case 'duplicate':
            return filterDataByCount(data, duplicateBlockheads);
        case 'unique':
            return filterDataByCount(data, singleBlockheads);
        default:
            return data
    }
}

export const filterDataByCount = (data, countSpecificList) =>
    data.filter(head => countSpecificList.includes(head.nameDomain));