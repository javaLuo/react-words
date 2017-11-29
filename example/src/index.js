import React from 'react';
import Words from '../../dist/index.js';
import '../../dist/index.css';
import ReactDom from 'react-dom';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      show: false,
    };
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <select onChange={(e) => this.onChange(e)} value={this.state.value}>
          <option value='0'>0.淡入淡出 默认</option>
          <option value='1'>1.模糊大小淡入淡出</option>
          <option value='2'>2.由小即大</option>
          <option value='3'>3.聚拢消散</option>
          <option value='4'>4.上下淡入淡出</option>
          <option value='5'>5.绕X轴3d旋转</option>
        </select>
        <div>
          <button onClick={() => this.setState({show: !this.state.show})}>{this.state.show ? '隐藏' : '显示'}</button>
        </div>
        <div>
          <Words
            show={this.state.show}

          >Hello World!</Words>
        </div>
      </div>
    );
  }
}

ReactDom.render(
	<Test />,
	document.getElementById('root')
);
