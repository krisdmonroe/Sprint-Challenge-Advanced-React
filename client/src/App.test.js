import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerList from '../src/components/PlayerList'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Does player show on screen", ()=> {
  const { getAllByText }  = render(<App />);

  getAllByText(/player/i);
})

test("Does list show on screen", ()=> {
  const { getAllByText }  = render(<App/>);
  
  getAllByText(/list/i);
})