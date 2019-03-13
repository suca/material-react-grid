/**
 * Generator of data
 *
 */
import randomSeed from './random';
import format from 'date-fns/format';

const randomNumbers = (size) => {
    const elements = [];
    for(let i =0; i<size; i+=1) {
        elements.push(parseInt(Math.random()*123456789));
    }
    return elements;
};
const randomDates = (
        size,
        start, end
) => {
    const elements = [];

    for(let i =0; i<size; i+=1) {
        const newDate = format(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())), 'yyyy-MM-dd');
        elements.push(newDate);
    }
    return elements;
};

const orderIds = randomNumbers(9);
const companyNames = ['COCA COLA', 'APPLE', 'MICROSOFT', 'RED HAT', 'UBER', 'TRIDENT', 'TESLA', 'PEPSI', 'MY COMPANY'];
const orderDates = randomDates(9, new Date(1998, 0, 1), new Date());
const lastModifieds = randomDates(9, new Date(2019, 0, 1), new Date());
const totals = randomNumbers(9);
const statuses = ['Pending', 'Finished', 'Delivered', 'Pre-release', 'Blocked', 'Done', 'In Progress', 'Review', 'Planning'];
const plans = ['Basic', 'Advanced', 'Middle', 'Super', 'Beginners', 'Expert', 'Starters', 'Extreme'];
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};
export const defaultColumnValues = {
    orderId: orderIds,
    companyName: companyNames,
    orderDate: orderDates,
    lastModified: lastModifieds,
    total: totals,
    status: statuses,
    plan: plans
};


export const generateRows = async ({
        columnValues = defaultColumnValues,
        length,
        random = randomSeed(329972281),
    }) => {
    const data = [];
    const columns = Object.keys(columnValues);

    for (let i = 0; i < length; i += 1) {
        const record = {};

        columns.forEach((column) => {
            let values = columnValues[column];

            if (typeof values === 'function') {
                record[column] = values({ random, index: i, record });
                return;
            }

            while (values.length === 2 && typeof values[1] === 'object') {
                values = values[1][record[values[0]]];
            }

            const value = values[Math.floor(random() * values.length)];
            if (typeof value === 'object') {
                record[column] = Object.assign({}, value);
            } else {
                record[column] = value;
            }
        });

        data.push(record);
    }
    /*
    * Mock remote request
    * */
    await sleep(2000);
    return data;
};
