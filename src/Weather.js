import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              autofocus="on"
              autocomplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-success">Location</button>
          </div>
        </div>
      </form>
      <h1>Melbourne VIC, Australia</h1>
      <ul>
        <li></li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy icon"
              class="weather-icon float-left"
            />
            <div className="float-left">
              <span className="temperature">19</span>
              <span className="units">
                <a href="#">°C</a> |<a href="#">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>77</span>%
            </li>
            <li>
              Wind: <span>8</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
