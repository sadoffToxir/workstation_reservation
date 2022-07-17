import * as actionCreators from '../actionCreators/workstationActionCreators';

const mockData = [
    {
        id: '1',
        availabilityStatus: false,
        availability: {
            Sun: false,
            Mon: true,
            Tues: true,
            Wednes: false,
            Thurs: false,
            Fri: true,
            Sat: false,
        },
    },
    {
        id: '2',
        availabilityStatus: true,
        availability: {
            Sun: true,
            Mon: false,
            Tues: true,
            Wednes: true,
            Thurs: false,
            Fri: true,
            Sat: false,
        },
    },
    {
        id: '3',
        availabilityStatus: false,
        availability: {
            Sun: false,
            Mon: false,
            Tues: true,
            Wednes: true,
            Thurs: false,
            Fri: false,
            Sat: true,
        },
    },
];

export const getStatusSchedule = (id) => (dispatch) => {
    try {
        dispatch(actionCreators.getStatusScheduleRequest());
        //REQUEST TO SERVER IF WE HAD ONE
        const res = mockData.filter((el) => el.id === id)[0];
        dispatch(actionCreators.getStatusScheduleSuccess(res));
    } catch (error) {
        if (error instanceof Error) {
            alert(error);
        }
    }
};
