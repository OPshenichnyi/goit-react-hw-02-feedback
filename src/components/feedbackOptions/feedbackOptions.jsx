export const FeedbackOptions = ({ onLeaveFeedback, options}) => {
   
    return (
        <div>
           
            <button type="button"
                onClick={onLeaveFeedback}
                value={options.good}
            >Good</button>

            <button type="button"
                onClick={onLeaveFeedback}
                value={options.neutral}
            >Neutral</button>

            <button type="button"
                onClick={onLeaveFeedback}
                value={options.bad}
            >Bad</button>
        </div>
    )
}