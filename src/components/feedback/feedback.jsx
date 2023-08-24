import { Component } from "react";

export class FedbackComponent extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    handlerButtonFeedback = ({ target:{ value }}) => {
        this.setState(prevState => ({ [value]: prevState[value] + 1 }))
        
    }
    
    countTotalFeedback = () => {        
        const { good , neutral, bad } = this.state
        return good + neutral + bad;
    }

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button type="button"
                    onClick={this.handlerButtonFeedback}
                    value="good"
                >Good</button>
                <button type="button"
                    onClick={this.handlerButtonFeedback}
                    value="neutral"
                >Neutral</button>
                <button type="button"
                    onClick={this.handlerButtonFeedback}
                    value="bad"
                >Bad</button>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total:{this.countTotalFeedback()}</p>
            </div>
        )
    }
}