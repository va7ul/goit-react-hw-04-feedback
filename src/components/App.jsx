import { GlobalStyle } from 'GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const options = ['bad', 'good', 'neutral'];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    switch (event) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            options={options}
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>

      <GlobalStyle />
    </>
  );
};
