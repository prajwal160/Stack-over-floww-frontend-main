import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./HomemainBar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import QuestionList from "./QuestionList";

const Homemainbar = () => {
  console.log("Redux State:", user);
  const location = useLocation();
  var user = useSelector((state) => state.fetch_current_userReducer);
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionReducer);
  const permit = user?.result?.permi;
  const askedq = user?.result?.noOfQuestionperday;

  // const redirect = () => {
  //   if (user === null) {
  //     toast.error("Please login to  ask question", { position: "top-center" });
  //     <ToastContainer />;
  //   } else {
  //     if (permit > askedq) {
  //       navigate("/AskQuestions");
  //     } else {
  //       toast.error("Daily Limit Exceeded !", { position: "top-center" });
  //       <ToastContainer />;
  //     }
  //   }
  // };
  const redirect = () => {
    const lastAskTime = localStorage.getItem('lastAskTime');
    const currentTime = new Date().getTime();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  
    if (user === null) {
      toast.error("Please login to ask a question", { position: "top-center" });
    } else {
      if (!lastAskTime || currentTime - lastAskTime > oneDayInMilliseconds) {
        // Allow the user to ask a question
        localStorage.setItem('lastAskTime', currentTime);
        navigate("/AskQuestions");
      } else {
        toast.error("Daily Limit Exceeded!", { position: "top-center" });
      }
    }
  };
  
  
  console.log('User:', user);
console.log('Permit:', permit);
console.log('Asked Questions:', askedq);

  return (
    <div className="home-main-bar">
      <div className="intro-container">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button className="ask-btn" onClick={redirect}>
          Ask Question
        </button>

        {/* <Link to='/AskQuestions' className='ask-btn' onClick={authenticate}>Ask  Question</Link> */}
      </div>

      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p id="noOfQuestions">{questionsList.data.length} Questions </p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default Homemainbar;
