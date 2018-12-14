import {connect} from "react-redux";
import Intro from "./Intro";
import { setLatitude, setLongitude, getObserved, getForecasted, setDate }  from "../../thunks/intro";

const mapDispatchToProps = dispatch => ({
    setLatitude: (latitude) => dispatch(setLatitude(latitude)),
    setLongitude: (longitude) => dispatch(setLongitude(longitude)),
    setDate: (date) => dispatch(setDate(date)),
    getForecasted: (lon, lat, date) => dispatch(getForecasted(lon, lat, date)),
    getObserved: (lon, lat, date) => dispatch(getObserved(lon, lat, date)),

});

const mapStateToProps = state => ({
    longitude : state.intro.longitude,
    latitude : state.intro.latitude,
    date : state.intro.date,
    weather : state.intro.weather,
    loading : state.intro.loading,
    error : state.intro.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);

