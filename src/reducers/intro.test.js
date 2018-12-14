import moment from "moment";
import {setLatitude, setLongitude, setDate, setWeather, loading, setError} from "../thunks/intro";
import {SET_LONGITUDE, SET_LATITUDE, SET_WEATHER_DATA, SET_DATE, LOADING, SET_ERROR} from '../thunks/intro';


describe('actions', () => {
  it('should create an action to set latitude', () => {
    const lat = 41;
    const expectedAction = {
      type: SET_LATITUDE,
      payload: lat
    };
    expect(setLatitude(lat)).toEqual(expectedAction)
  });

  it('should create an action to set longitude', () => {
    const lon = -41;
    const expectedAction = {
      type: SET_LONGITUDE,
      payload: lon
    };
    expect(setLongitude(lon)).toEqual(expectedAction)
  });

  it('should create an action to set date', () => {
    const lon = -41;
    const expectedAction = {
      type: SET_LONGITUDE,
      payload: lon
    };
    expect(setLongitude(lon)).toEqual(expectedAction)
  });

  it('should create an action to set longitude', () => {
    const date = moment().format('YYYY-MM-DD');
    const expectedAction = {
      type: SET_DATE,
      payload: date
    };
    expect(setDate(date)).toEqual(expectedAction)
  });

  it('should create an action to set weather data', () => {
    const data = [];
    const expectedAction = {
      type: SET_WEATHER_DATA,
      payload: data
    };
    expect(setWeather(data)).toEqual(expectedAction)
  });

  it('should create an action to set loading', () => {
    const loadingState = true;
    const expectedAction = {
      type: LOADING,
      payload: loadingState
    };
    expect(loading(loadingState)).toEqual(expectedAction)
  });

  it('should create an action to set error', () => {
    const error = true;
    const expectedAction = {
      type: SET_ERROR,
      payload: error
    };
    expect(setError(error)).toEqual(expectedAction)
  });

});
