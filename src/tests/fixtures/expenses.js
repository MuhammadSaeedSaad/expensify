import moment from "moment";

// note: we here made the expenses' values as overall evaluated values as they will be compared with the overall values of the tested component

const expenses = [
    {
        id: "1",
        description: "Rent",
        amount: 100,
        createdAt: moment(0).add(3, "days").valueOf(),
        note: "some note 1"
    }, {
        id: "2",
        description: "german books",
        amount: 200,
        createdAt: moment(0).valueOf(),
        note: "some note 2"
    }, {
        id: "3",
        description: "T books",
        amount: 300,
        createdAt: moment(0).subtract(3, "days").valueOf(),
        note: "some note 3"
    }
];

export default expenses;