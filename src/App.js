import "./index.scss";
import React, { useState } from "react";
import Result from "./Result";

const questions = [
  {
    title: "JavaScript- это ... ?",
    variants: ["Язык верстки", "Мультипарадигменный язык программирования, который поддерживает объектно-ориентированный, императивный и функциональный стили.", "Что-то со стилями связано"],
    correct: 1,
  },
  {
    title: "Компонент в React - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Game({ step, question, onClickVariant }) {
  const persentage = Math.round((step / questions.length) * 100);

  // принимаем параметром масссив объектов
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${persentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      {/* достаем из объекта в массиве атрибут заголовка */}
      <ul>
        {/* рендерим варианты ответа с помощью обращения к соответствующим атрибутам объекта */}
        {/* И итерируясь по массиву отрисовываем текст атрибутов */}
        {question.variants.map((text, index) => (
          <li
            onClick={() => {
              onClickVariant(index);
            }}
            key={text}
          >
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const question = questions[step]; //записываем массив объектов в переменную вместе с состоянием

  const onClickVariant = (index) => {
    console.log(step, index); // выводим текущий вопрос (шаг) и индекс варианта ответа
    setStep(step + 1); // переключаем шаг после выбора варианта ответа

    if (index === question.correct) { // если индекс выбранного варианта ответа совпадает с значением правильного ответа на вопрос
      setCorrectAnswer(correctAnswer + 1); // то изменяем состояние с количеством правильных ответов на +1
    }
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correctAnswer={correctAnswer}/>
      )}

      {/* передаем переменную с массивом объеквто через пропс в компонент GAME*/}
    </div>
  );
}

export default App;
