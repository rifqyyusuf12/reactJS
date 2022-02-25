import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() { 
        // console.log("Counters - Rendered");
        const { onReset, onDelete, counters, onIncrement, onMinus} = this.props;

        return (
        <div>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter => (
                <Counter 
                key={counter.id} 
                onDelete={onDelete} 
                onIncrement={onIncrement}
                counter={counter}
                onMinus={onMinus}
                 />
            ))}
        </div>);
    }
}
 
export default Counters;