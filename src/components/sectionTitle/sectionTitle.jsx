import { Statistics } from "components/statistics/statistics";
import { FeedbackOptions } from "components/feedbackOptions/feedbackOptions";


export const SectionTitle = ({onLeaveFeedback,options,good,neutral,bad,countTotalFeedback,countPositiveFeedbackPercentage}) => {
    return (
        <section>
            <h2>Please leave feedback</h2>
            <FeedbackOptions
                onLeaveFeedback={onLeaveFeedback}
                options={options}
            ></FeedbackOptions>
            {good + bad + neutral > 0 ?
                (<Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    countTotalFeedback={countTotalFeedback}
                    countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
                ></Statistics>): (<p>There is no feedback</p>)}        
            
        </section>
    )
}