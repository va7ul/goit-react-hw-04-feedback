import { nanoid } from 'nanoid';
import { List } from './FeedbackOptions.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <li key={nanoid()}>
          <button onClick={() => onLeaveFeedback({ option })}>{option}</button>
        </li>
      ))}
    </List>
  );
};
