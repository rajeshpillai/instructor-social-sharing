import React from 'react';

export default class Heart extends React.Component {
    constructor(props) {
        super(props);
        this.onHeartClick = this.onHeartClick.bind(this);
        this.style = {
            color: props.color
        }
        // Initialize state
        this.state = {
            active: true,
        }
    }

    onHeartClick() {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        let heartStyle = this.state.active ? this.style.color : "gray";
        const style = { color: heartStyle, cursor: "pointer" };
        return (
            <span onClick={this.onHeartClick}
                style={style}>&#10084;</span>
        );
    }
}

