import React from "react";
import moment from "moment";

import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Skycons from 'react-skycons'

import './weatherList.scss'


const WeatherList = (props) => {
  console.log(props);
  return <List>
    {props.data.map((item, index) =>
      <ListItem key={item.time + index}>
        <div className="icon-box">
          <Skycons
            color='yellow'
            icon={item.icon.replace(/-/g,'_').toUpperCase()}
          />
        </div>
        {moment.unix(item.time).add(1, 'day').format('YYYY-MM-DD')} - {item.summary}
      </ListItem>)}
  </List>
};

export default WeatherList
