import { render, screen } from '@testing-library/react';
import MainApp from "./App";
import React from "react";
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  let div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});