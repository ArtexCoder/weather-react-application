import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="weather-app">
        <form class="search-form" id="search-form">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                autofocus="on"
                autocomplete="off"
                id="city-input"
                class="form-control shadow-sm"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="form-control btn btn-primary shadow-sm"
              />
            </div>
            <div class="col-3">
              <button class="btn btn-success" id="current-location-button">
                Location
              </button>
            </div>
          </div>
        </form>
        <h1 id="city">Melbourne VIC, Australia</h1>
        <ul>
          <li id="date"></li>
          <li id="description">Partly Cloudy</li>
        </ul>
        <div class="row">
          <div class="col-6">
            <div class="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Cloudy icon"
                class="weather-icon float-left"
              />
              <div class="float-left">
                <span class="temperature" id="temperature">
                  19
                </span>
                <span class="units">
                  <a href="#" id="celsius">
                    °C
                  </a>{" "}
                  |
                  <a href="#" id="fahrenheit">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">77</span>%
              </li>
              <li>
                Wind: <span id="wind">8</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
