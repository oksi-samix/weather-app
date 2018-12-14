import moment from "moment";
import {SET_LONGITUDE, SET_LATITUDE, SET_WEATHER_DATA, SET_DATE, LOADING, SET_ERROR} from '../thunks/intro';

const initState = {
    longitude: '',
    latitude: '',
    weather: [],
    date: moment().format('YYYY-MM-DD'),
    loading: false,
    error: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case SET_LONGITUDE:
            return {
                ...state,
                longitude: action.payload
            };

        case SET_LATITUDE:
            return {
                ...state,
                latitude: action.payload
            };

        case SET_WEATHER_DATA:
            return {
                ...state,
                weather: [...action.payload]
            };

        case SET_DATE:
            return {
                ...state,
                date: action.payload
            };

        case LOADING:
            return {
                ...state,
                loading: action.payload
            };

        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};
