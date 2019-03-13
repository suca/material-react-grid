/**
 * initialState
 *
 * It defaults the initial state
 */
const initialState = {
    rows: [],
    isLoading: false,
    isError: false,
    filters: {
        order: null,
        company: null,
        startLastModified: null,
        endLastModified: null,
    },
};

export default initialState;
