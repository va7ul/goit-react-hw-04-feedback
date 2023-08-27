import { nanoid } from 'nanoid';

export const Statistics = ({
  options,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li key={nanoid()}>Good:{good}</li>
      <li key={nanoid()}>Neutral:{neutral}</li>
      <li key={nanoid()}>Bad:{bad}</li>
      <li key={nanoid()}>Total:{total}</li>
      <li key={nanoid()}>Positive feedback:{positivePercentage}%</li>
    </ul>
  );
};
