import React from "react";
import { render } from "react-dom";
import routers from "./router";
import './index.css';

render(
  routers,
  document.getElementById('root')
);
