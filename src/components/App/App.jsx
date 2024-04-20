
import { useState, useEffect } from "react";
import Description from "../Description/Description"
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App () {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const savedFeedback = localStorage.getItem("feedbackCount")
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback)
    }
    return {
  good: 0,
	neutral: 0,
	bad: 0
    }
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes(prevFeedback => ({ ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1 }));
  };
  const resetFeedback = () => {
    setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
  }
  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes))
  }, [feedbackTypes]);

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedbackTypes.good / totalFeedback) * 100) : 0;
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback ==0 && (<Notification />)}
      {totalFeedback > 0 ? (
        <Feedback positiveFeedback={positiveFeedback} feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} />) : null}
    </>
  )
}
