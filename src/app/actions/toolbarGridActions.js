export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const clearFilters = () => {
    return {
        type: CLEAR_FILTERS,
        filters: {},
    };
};

export const REDUCE_DATA_BY_FILTERS = 'REDUCE_DATA_BY_FILTERS';
export const reduceDataByFilters = (filters) => {
    return {
        type: REDUCE_DATA_BY_FILTERS,
        filters,
    }
};
