import React, { useState } from 'react'
import QuestionCategory from './QuestionSection';
import styles from './Mcq.module.css'
import ProgressBar from './ProgressBar';
import BottomBar from './BottomBar';

const Questionnaire = ({ data }) => {
    console.log(data);
    const [questions, setQuestions] = useState(0);
    const [color, setColor] = useState(false);
    const [star, setstar] = useState(0);
    const [correctMessage, setcorrectMessage] = useState(false);
    const [incorrectMessage, setincorrectMessage] = useState(false);
    const [countCorrect, setCountCorrect] = useState(0);
    const [id, setId] = useState(0);
    const length = data.length;
    const categories = data[questions].category;
    const difficulty = data[questions].difficulty;

    data = data.map((item, i) => {
        item.incorrect_answers = [...new Set([...item.incorrect_answers, item.correct_answer])];
        return item;
    });
    console.log(data);

    const onClickNextbtn = (e) => {
        setColor(false)
        setincorrectMessage(false)
        setstar(0)
        setcorrectMessage(false)
        const nextQuestion = questions + 1;
        if (nextQuestion < length) {
            setQuestions(nextQuestion)
        }
    }


    const check = () => {
        if (difficulty === 'hard') {
            setstar(3)
        } else if (difficulty === 'medium') {
            setstar(2)
        } else {
            setstar(1)
        }
    }

    const onWrongClick = () => {
        setincorrectMessage(true)
        setcorrectMessage(false)
        check()
    }

    const Question = data.map((que) => {
        return que.question
    })

    const question = (Question[questions]
        .replaceAll('%20', ' ')
        .replaceAll('%', ' '))
        .replaceAll('%', ' ')
        .replaceAll('27', ' ')
        .replaceAll('3F', ' ')
        .replaceAll('22', ' ')
        .replaceAll('2C', ' ')
        + ' ?';
    console.log(question, 'p');

    console.log(id, 'key')

    return (
        <React.Fragment>

            <ProgressBar question={questions} />

            <QuestionCategory
                star={star}
                question={questions}
                difficulty={difficulty}
                length={length}
                categories={categories}
            />

            {/* Question */}

            <p
                className={styles.question}>
                {question}
            </p>
            {/* option btn */}
            <div className={styles.option}>
                {data[questions].incorrect_answers.map((ans, i) => {
                    return (
                        <button className={`button${i}`}
                            key={`button-${i}`}
                            onClick={(e) => {
                                setId(i)
                                console.log(i, 'key')
                                if (ans == data[questions].correct_answer) {
                                    setcorrectMessage(true)
                                    setincorrectMessage(false)
                                    setCountCorrect(countCorrect + 1)

                                }
                                else {
                                    console.log("Incorrect!");
                                    onWrongClick();
                                }
                            }}>
                            {ans.replaceAll('%20', ' ')
                                .replaceAll('%', ' ')}

                        </button>
                    )
                })}
            </div>


            {/* Message */}
            <div>
                {correctMessage && <p className={styles.msg}>Correct</p>}
                {incorrectMessage && <p className={styles.msg}>Sorry</p>}

                <button className={styles.nextQuestion}
                    onClick={onClickNextbtn}>Next Question
                </button>
            </div>
            {/* bottomBar */}

            <BottomBar countCorrect={countCorrect} />
        </React.Fragment>
    )
}
export default Questionnaire;
