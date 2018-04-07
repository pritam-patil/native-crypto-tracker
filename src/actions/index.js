import axios from 'axios';
import { apiBaseURL } from './../utils/constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
} from './../utils/actionTypes';


export function getData() {
    return (dispatch) => {

        dispatch({ type: FETCHING_COIN_DATA });

        return axios.get(`${apiBaseURL}/v1/ticker/?convert=INR&limit=20`)
            .then(res => {
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
            });

    }
}
