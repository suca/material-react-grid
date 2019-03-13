export const REQUEST_MOCK_DATA = 'REQUEST_MOCK_DATA';
export const requestMockData = (length) => {
    return {
        type: 'REQUEST_MOCK_DATA',
        length,
    };
};

export const RECEIVE_MOCK_DATA = 'RECEIVE_MOCK_DATA';
export const receiveMockData = (mockData) => {
    return {
        type: RECEIVE_MOCK_DATA,
        rows: mockData,
    };
};
