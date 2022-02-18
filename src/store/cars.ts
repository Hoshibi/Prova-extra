import { createSlice } from '@reduxjs/toolkit';

interface infoDetail {
    id: number,
    logo: number,
    brand: string,
    model: string,
    price: number,
    sideImage: string,
    types: [{}]
}

interface initialGameStateProps {
    infoCars: any;
}

const initialCarsState: initialGameStateProps = {
    infoCars: []
};

const carsSlice = createSlice({
    name: 'infoCars',
    initialState: initialCarsState,
    reducers: {
        getInfo(state, action) { 
            state.infoCars = action.payload;
        }
    }
});

export const carsActions = carsSlice.actions;

export default carsSlice.reducer;