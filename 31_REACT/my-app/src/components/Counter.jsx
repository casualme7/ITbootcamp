import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0,
        imageURL: 'https://picsum.photos/200',
        tags: ["tag1", "tag2", "tag3"]
    }

    constructor() {
        super();
        console.log("Constructor", this);
        this.formatCount = this.formatCount.bind(this);
    }

    handleIncrement = () => {
        console.log('handleIncrement');
        this.setState({ counter: this.state.counter + 1 })
    }

    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    styles = {
        fontSize: "10px",
        color: "#2a9d8f",
        fontWeight: "bold",
        fontSize: "30px"
    }

    // formatCount() {
    //     // destrocturing
    //     const { counter } = this.state;
    //     console.log(counter);
    // }

    formatCount = () => {
        const { counter } = this.state
        return counter == 0 ? "Zero" : counter
    }

    classPicker = () => {
        return this.state.counter <= 0 ? "warning" : "success";
    }

    render() {
        return (
            <div>
                <h2 style={this.styles}>Pozdrav iz Child komponente</h2>

                <p style={{ color: "blue" }}>Ja sam paragraf</p>

                <img src={this.state.imageURL} />
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>

                <p className={this.classPicker()} style={{ fontSize: 45 }}>Count:{this.formatCount()}</p>

                <button onClick={this.formatCount}>=</button>

                <h1>Tagovi:</h1>
                <p>{this.state.tags[0]}</p>
                <p>{this.state.tags[1]}</p>
                <p>{this.state.tags[2]}</p>

                {
                    this.state.tags.map((tag, index) => (
                        <p key={index}> #{tag}</p>
                    ))
                }
            </div >
        );
    }
}

export default Counter;