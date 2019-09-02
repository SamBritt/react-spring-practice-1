import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring'
import { Spring, config } from 'react-spring/renderprops'
import '../node_modules/d3-ease'
import { easeCubic, easePoly, easePolyIn, easeElasticIn, easeExp } from '../node_modules/d3-ease';
const App = () => {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1,

    }
  })
  const numbers = useSpring({
    config: { duration: 2500 },

    from: {
      number: 0
    },
    to: {
      number: 100,
      size: 20
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <animated.img style={fade} src={logo} className="App-logo" alt="logo" />

        {
          ///"Spring: 1. Moves Data from one state to another"
          //         2. Accumulative: Remembers all values passed
          //         3. Can animate attributes, innerText, generic react-component props
        }
        {
          //Animating innerText with Spring
        }
        <Spring
          config={{ easing: easeExp, duration: 3000 }}
          from={{ number: 0, color: 'white', size: '0%', background: 'black' }}
          to={{ number: 50, color: 'black', size: '100%', background: 'white' }}>
          {props => <div style={{ color: props.color, width: props.size, height: props.size, background: props.background }}>
            <p style = {{height: props.size}}>
              {props.number.toFixed(0)}
            </p>
          </div>}
        </Spring>
        <animated.span>{numbers.number}</animated.span>
      </header>
    </div>
  );
}

export default App;
