import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const maps = [
	['kh', 'x'],
	['c(?!h)', 'k'],
	['q', 'k'],
	['tr', 'c'],
	['ch', 'c'],
	['d', 'z'],
	['gi', 'z'],
	['r', 'z'],
	['đ', 'd'],
	['ph', 'f'],
	['ngh?', 'q'],
	['gh', 'g'],
	['th', 'w'],
	['nh', 'n\'']
];
const capitalize = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
const convert = (input, map) => {
	return input
		.replace(new RegExp(map[0], 'g'), map[1])
		.replace(new RegExp(capitalize(map[0]), 'g'), capitalize(map[1]));
};
const reConvert = (input, map) => {
	return input
		.replace(new RegExp(map[1], 'g'), map[0])
		.replace(new RegExp(capitalize(map[1]), 'g'), capitalize(map[0]));
};
const fullConvert = (input,convert) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}
	maps.forEach(map => {
		input = convert(input, map);
	});
	return input;
};
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      old:`
      Tối... hôm nay anh có gì bận tâm
      mà sao hỏi anh vẫn cứ chối
      Không muốn nói cứ ngồi lặng câm
      Thấy... hôm qua em có nhiều điều sai
      Người cứ gọi, em chẳng bắt máy 
      Em vô tư không cần ngày mai 
      Oh no... cả hôm nay em đã suy nghĩ  
      Rằng nếu... cứ giận hờn sẽ không có ích chi 
      Người hỡi... những điều anh đã nói rất đúng  
      Em sai rồi, em sai rồi, em sai rồi   
      Hãy xin lỗi em đi!   
      Có những lúc em vô tâm hơn là bận tâm, em đã sai
      Có những lúc em vô tư chẳng cần sầu tư, em đã sai
      Dù em biết em biết, em có em có những sai lầm, chẳng như ai
      Hãy xin lỗi em đi từ nay em sẽ không thế nữa
      Hãy xin lỗi em đi!
      `,
      new:""
    }
    this.handleOldChange = this.handleOldChange.bind(this);
    this.handleNewChange = this.handleNewChange.bind(this);
    }
  componentDidMount(){
    this.setState({
      new:fullConvert(this.state.old,convert),
    })
  }
  handleOldChange(event){
    this.setState({old: event.target.value});
    this.setState({
      new:fullConvert(this.state.old,convert),
    })
    }
    handleNewChange(event){
      this.setState({new: event.target.value});
      //this.setState({
      //  old:fullConvert(this.state.new,reConvert),
      //})
      }
  render() {
    return (
      <div className="container" style={{paddingTop:30}}>
      <h2>Chuyển đổi tiếng việt</h2>
        <textarea  className="form-control" style={{width: 1000,height:200}} type="text" value={this.state.old} onChange={this.handleOldChange}/>
        <textarea className="form-control" style={{width: 1000,height:200}} type="text" value={this.state.new} />
      </div>
    );
  }
}

export default App;
