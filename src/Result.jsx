import React from "react";

const Result = ({ correctAnswer }) => {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="img-result"
      />
      <h2>Вы отгадали {correctAnswer} ответа из 10</h2>
      <button onClick={() => window.location.href='/'}>Попробовать снова</button>
    </div>
  );
};

export default Result;
