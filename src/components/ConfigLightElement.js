import React from 'react';
import { Slider, Button, Menu, Dropdown, Icon, Input, Row, Col, InputNumber, Collapse } from 'antd';
import axios from 'axios';

let data = [
  {
    startTime: 0,
    endTime: 4,
    powerValue: 100
  },
  {
    startTime: 7,
    endTime: 8,
    powerValue: 120
  }
]

export default class ConfigLightElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data,
      isExtended: false
    };
  }

  componentDidMount() {
    // console.log(axios);
  }

  onChange = () => {
    console.log("xxx");
  }

  addNewSet = () => {
    let data = this.state.data
    data.push(data[data.length-1])
    this.setState({
      data: data
    })
    // const newSet = data[]
  }

  handleExtend = () => {
    this.setState({ isExtended: !this.state.isExtended })
  }

  render() {
    const { isExtended } = this.state;
    return (
      <Row>
        <Row className="testClass"> <Button onClick={this.handleExtend}>Extend</Button> </Row>
          {
            isExtended ?
            <Row style={{ marginLeft: '1%', padding: '1%'}}>
              { this.state.data.map((light, idx) => {
                return (
                  <Row key={idx}>
                    <Col span={12}>
                      <Slider  range
                      defaultValue={[20, 50]}/>
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>
                )
              })}
              <div style={{textAlign: 'center'}}>
                <Button onClick={this.addNewSet}><Icon type="plus-square-o" /></Button>
              </div>
            </Row> : null
          }
      </Row>
    )
  }
}
