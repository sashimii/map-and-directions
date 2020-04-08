import { actionTypes } from './actionTypes';

export const updateCurrentDate = (newIndex: string) => {
    return {
        type: actionTypes.UPDATE_CURRENT_DATE,
        index: newIndex,
    };
};