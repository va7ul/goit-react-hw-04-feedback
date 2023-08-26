import { nanoid } from 'nanoid';

export const Statistics = ({ options, clicks, total, positivePercentage }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={nanoid()}>
          {option}:{clicks[option]}
        </li>
      ))}
      <li key={nanoid()}>Total:{total}</li>
      <li key={nanoid()}>Positive feedback:{positivePercentage}%</li>
    </ul>
  );
};
