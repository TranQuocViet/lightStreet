import React, { Component } from 'react'
import { Slider, Button, Menu, Dropdown, Icon } from 'antd'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ConfigLightElement from 'components/ConfigLightElement';

// import { store } from './store
class Root extends Component {
  render() {
    return (
      <div >
         <ConfigLightElement/>
      </div>
    )
  }
}
ReactDOM.render(<Root />, document.getElementById("target-render"))
