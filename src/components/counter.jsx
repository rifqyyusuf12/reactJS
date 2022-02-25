import React, { Component } from 'react';
import Like from './like';

class Counter extends Component {
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("preveProps", prevProps)
    //     console.log("preveState", prevState)
    //     if (prevProps.counter.value !== this.props.counter.value) {
    //         //ajax call and get neww data from the server
    //     }
    // }


    render() { 
        // console.log("Counter - Rendered");

        return (
            <div className='row'>
                <div className="col-md-3">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button 
                        onClick={() => this.props.onIncrement(this.props.counter)} 
                        className="btn btn-secondary btn-sm">
                        +
                    </button>
                    <button 
                        onClick={() => this.props.onMinus(this.props.counter)} 
                        className="btn btn-secondary btn-sm mx-2"
                        disabled={this.props.counter.value === 0 ? "disabled" : ""}
                        >
                        -
                    </button>
                    <button 
                    onClick={() => this.props.onDelete (this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">
                        Delete
                    </button>
                    <Like />
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "btn m-2 btn-";
        classes += this.props.counter.value  === 0 ? "warning" : "primary";
        return classes;
    }


    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;