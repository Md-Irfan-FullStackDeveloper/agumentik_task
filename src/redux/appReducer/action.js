import { CHANGE_HEADING } from "./actionTypes"


export const changeHeading = ({value}) => (dispatch) => {
    dispatch({type: CHANGE_HEADING, payload: value})
}