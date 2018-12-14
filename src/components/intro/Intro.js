import React, {Component} from 'react';
import moment from 'moment';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import './intro.scss'
import WeatherList from '../WeatherList'

class Intro extends Component {

  onChange = ({target: {value, name}}) => {
    if (name === 'longitude') {
      return this.props.setLongitude(value);
    }
    if (name === 'date') {
      return this.props.setDate(value);
    }
    this.props.setLatitude(value);
  };

  getForecasted = () => {
    const date = moment(this.props.date).format('YYYY-MM-DDTHH:MM:SSZ');
    this.props.getForecasted(this.props.longitude, this.props.latitude, date)
  };

  getObserved = () => {
    const lastThirtyDays = [...new Array(30)]
      .map((i, idx) => moment(this.props.date).startOf(this.props.date).subtract(idx, "days").format('YYYY-MM-DDTHH:MM:SSZ'));
    this.props.getObserved(this.props.longitude, this.props.latitude, lastThirtyDays)
  };

  render() {
    const {getForecasted, getObserved, onChange} = this;
    const {weather, loading, error} = this.props;
    return (
      <section className="App">
        {error ? <mark className="error">Please enter longitude and longitude</mark> : null}
        {loading ? <div className="loader-box"><CircularProgress/></div> : null}
        <div>
          <TextField
            style={{padding: 24}}
            placeholder="Enter longitude"
            margin="normal"
            name="longitude"
            type="number"
            onChange={onChange}
          />
          <TextField
            style={{padding: 24}}
            placeholder="Enter latitude"
            margin="normal"
            name="latitude"
            type="number"
            onChange={onChange}
          />
          <TextField
            id="date"
            label="Pick date"
            type="date"
            defaultValue={this.props.date}
            InputLabelProps={{
              shrink: true,
            }}
            name="date"
            onChange={onChange}
          />
        </div>
        <Button onClick={getForecasted}>Forecasted daily weather</Button>
        <Button onClick={getObserved}>Observed daily weather</Button>
        {weather.length ? <WeatherList data={this.props.weather}/> : null}
      </section>
    );
  }
}

export default Intro;
