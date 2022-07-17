import * as actions from '../actionTypes/workstationActions';

export function getStatusScheduleRequest() {
    return {
        type: actions.GET_STATUS_SCHEDULE_REQUEST,
    };
}

export function getStatusScheduleSuccess(data) {
    return {
        type: actions.GET_STATUS_SCHEDULE_SUCCESS,
        payload: { data },
    };
}
