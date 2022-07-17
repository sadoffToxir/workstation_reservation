import * as actions from '../actionTypes/workstationActions';

const initialState = {
    statusesSchedules: {},
};

export const workstationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_STATUS_SCHEDULE_SUCCESS:
            return {
                ...state,
                statusesSchedules: {
                    ...state.statusesSchedules,
                    [action.payload.data.id]: {
                        status: action.payload.data.availabilityStatus,
                        schedule: action.payload.data.availability,
                    },
                },
            };
        default:
            return state;
    }
};
