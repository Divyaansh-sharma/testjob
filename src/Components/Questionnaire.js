import React, { useState } from 'react'
import QuestionCategory from './QuestionSection';
import styles from './Mcq.module.css'
import ProgressBar from './ProgressBar';
import BottomBar from './BottomBar';

const Questionnaire = ({ data }) => {
    const [questions, setQuestions] = useState(0);
    const [star, setstar] = useState(0);
    const [correctMessage, setcorrectMessage] = useState(false);
    const [incorrectMessage, setincorrectMessage] = useState(false);
    const [countCorrect, setCountCorrect] = useState(0);
    const length = data.length;
    const categories = data[questions].category;
    const difficulty = data[questions].difficulty;

    const onClickNextbtn = (e) => {
        setincorrectMessage(false)
        setstar(0)
        setcorrectMessage(false)
        const nextQuestion = questions + 1;
        if (nextQuestion < length) {
            setQuestions(nextQuestion)
        }
    }


    const onClickRightbtn = () => {
        setincorrectMessage(false)
        setCountCorrect(countCorrect + 1)
        check()
        setcorrectMessage(true)
    }

    const check = () => {
        if (difficulty == 'hard') {
            setstar(3)
        } else if (difficulty == 'medium') {
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

    const mapped = data.map((d) => {
        return d.question.replaceAll(('%20', ' ').replaceAll('%', ''))
    })

    const question = (mapped[questions]
        .replaceAll('%20', ' ')
        .replaceAll('%', ' '));

    return (
        <div>
            <>
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
                    {question.replaceAll('%20', ' ')
                        .replaceAll('%', ' ')
                        .replaceAll('27', ' ')
                        .replaceAll('3F', ' ')
                        .replaceAll('22', ' ')
                        .replaceAll('2C', ' ')
                        + ' ?'}
                </p>
                {/* option */}
                <div className={styles.option}>
                    {data[questions].incorrect_answers.map((n) => {
                        return (
                            <>
                                <button onClick={onWrongClick}>
                                    {n.replaceAll('%20', ' ')
                                        .replaceAll('%', ' ')}
                                </button>
                            </>
                        )
                    })}
                    <button onClick={onClickRightbtn}>
                        {data[questions].correct_answer.replaceAll('%20', ' ')}
                    </button>
                </div>

            </>
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
        </div>
    )
}
export default Questionnaire;
