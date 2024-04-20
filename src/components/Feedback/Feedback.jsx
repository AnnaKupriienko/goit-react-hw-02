import css from './Feedback.module.css';
export default function Feedback({ feedbackTypes, totalFeedback, positiveFeedback }) {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.item}>Good: {feedbackTypes.good}</li>
        <li className={css.item}>Neutral: {feedbackTypes.neutral}</li>
        <li className={css.item}>Bad: {feedbackTypes.bad}</li>
        <li className={css.item}>Total: {totalFeedback}</li>
        <li className={css.item}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}