import { ContainerFeedback } from "./feedbackOptions.styled"
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
   
    return (
        <ContainerFeedback>
           
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
        </ContainerFeedback>
    )
}