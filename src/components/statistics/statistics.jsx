
export const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {

    return (

            <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total:{countTotalFeedback()}</p>
            <p>Positive feedback: {countPositiveFeedbackPercentage()} %</p>
            </div>
  )
}