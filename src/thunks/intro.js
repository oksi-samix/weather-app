const secretKey = "6a59cc387a0e6b638ae0d530a9b76b62";
const corsAnywhere = "https://cors-anywhere.herokuapp.com";
const darkApi = "https://api.darksky.net/forecast";
const exeptions = "?exclude=currently,minutely,hourly,flags";

export const SET_LONGITUDE = 'SET_LONGITUDE';
export const SET_LATITUDE = 'SET_LATITUDE';
export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
export const SET_DATE = 'SET_DATE';
export const SET_ERROR = 'SET_ERROR';
export const LOADING = 'LOADING';


export function setLongitude(lon) {
    return {
        type: SET_LONGITUDE,
        payload: lon
    };
}

export function setLatitude(lat) {
    return {
        type: SET_LATITUDE,
        payload: lat
    };
}

export function setDate(date) {
    return {
        type: SET_DATE,
        payload: date
    };
}

export function setError(state) {
    return {
        type: SET_ERROR,
        payload: state
    };
}

export function loading(state) {
    return {
        type: LOADING,
        payload: state
    };
}


export function setWeather(data) {
    return {
        type: SET_WEATHER_DATA,
        payload: data
    };
}

export const getForecasted = (lon, lat, date) => {
    if(!lon || !lat){
        return (dispatch) => dispatch(setError(true));
    }
    return (dispatch) => {
        dispatch(loading(true));
        fetch(`${corsAnywhere}/${darkApi}/${secretKey}/${lon},${lat},${date}${exeptions}`)
            .then(data => data.json())
            .then(data => {
                dispatch(loading(false));
                dispatch(setError(false));
                dispatch(setWeather(data.daily.data))
            });
    };
};

export const getObserved = (lon, lat, date) => {
    if(!lon || !lat){
        return (dispatch) => dispatch(setError(true));
    }
    const urls = date.reduce((arr, date) => {
        let url = `${corsAnywhere}/${darkApi}/${secretKey}/${lon},${lat},${date}${exeptions}`;
        arr.push(url);
        return arr;
    }, []);
    return (dispatch) => {
        dispatch(loading(true));
        Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        )).then(data => {
            dispatch(loading(false));
            dispatch(setError(false));
            const weatherArr = formData(data);
            dispatch(setWeather(weatherArr));
        })
    };
};

const formData = (data) => {
    const dataArr = data.reduce((arr, dataObj) => {
        arr.push(dataObj.daily.data[0]);
        return arr;
    }, []);
    return dataArr;
};
