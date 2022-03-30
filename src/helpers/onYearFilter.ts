export const onYearFilterChange = (selectedType, data, selectedYear, yearFilter, setYearFilter) => {
    if(selectedType === 'year' && yearFilter !== selectedYear)
        setYearFilter(selectedYear || '');
    switch(selectedYear){
        case '2014':
            return filterDataByTimeStamp(data,1388534400,1420027199);
        case '2015':
            return filterDataByTimeStamp(data, 1420070401,1451563199);
        default:
            return data
    }
};

export const filterDataByTimeStamp = (data, startTime, endTime) =>
    data.filter(head => head.timestamp > startTime && head.timestamp < endTime);