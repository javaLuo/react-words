import React from 'react';
import './index.scss';

class Words extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _init(str='', type = 0, speed = 300) {
        const t = String(str);
        if (!t){return null;}
        const arr = Array.from(t);

        return arr.map((item, index) => {
            let style = {opacity:0, transition: `all ${speed}ms` };
            if (item === ' ') {
                style.width = '.5em';
            }
            if(type === 1) {
                style.transform = 'scale(2, 2)';
                style.filter = 'blur(3px)';
            } else if(type === 2){
                style.transform = 'scale(0, 0)';
            } else if(type === 3){
                style.transform = 'translateX(20px)';
            } else if(type === 4){
                style.transform = 'translateY(-10px)';
            } else if(type === 5){
                style.transform = 'rotateX(90deg)';
            }
            style.transitionDelay = `${index * (speed ? speed/arr.length : 300/arr.length)}ms`;
            return <i key={index} style={style}>{item}</i>
        });
    }

    render() {
        return (
            <span ref={(e) => this.span = e} className={this.props.show ? `react-words ${this.props.className || ''} show` : `react-words ${this.props.className || ''}`}>
                { this._init(this.props.children, this.props.type, this.props.speed) }
            </span>
        );
    }
}

export default Words;

/**
    children: 文字
    show: bool, 显示或隐藏
    speed: number, 动画速度
    type: number, 动画方式 0渐隐渐显、1由大到小模糊、2由小变大、3 右侧缩进、4由上即下、5X轴3d旋转90deg
    style: obj,
*/