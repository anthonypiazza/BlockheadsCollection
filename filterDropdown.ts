export const filterDropdownData = {
    sortFilter: {
        label: "Sort by:",
        name: "sort",
        eventHandler: 'onSort',
        options: [
            { value: "name", title: "Name"},
            { value: "originDate", title: "Origin Date"},
            { value: "priceLtoH", title: "Price Low to High"},
            { value: "priceHtoL", title: "Price High to Low"},
        ]
    },
    yearFilter: {
        label: "Year Filter:",
        name: "year",
        eventHandler: 'onYear',
        options: [
            { value: "2014", title: "2014"},
            { value: "2015", title: "2015"},
        ]
    },
    countFilter: {
        label: "Count Filter:",
        name: "count",
        eventHandler: 'onCount',
        options: [
            { value: "unique", title: "Unique"},
            { value: "duplicate", title: "Duplicate"},
        ]
    },
    saleFilter: {
        label: "Available:",
        name: "sale",
        eventHandler: 'onSale',
        options: [
            { value: "buyNow", title: "Buy Now"},
            { value: "unlisted", title: "Unlisted"},
        ]
    }
};