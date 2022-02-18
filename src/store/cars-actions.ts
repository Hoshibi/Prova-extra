import axios from 'axios';
import { Dispatch } from 'redux';
import { carsActions } from './cars';

export const getInfoCars = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`./cars.json`);
        dispatch(carsActions.getInfo(response.data.cars));
    } catch (err) {
        alert(err);
    }
};
