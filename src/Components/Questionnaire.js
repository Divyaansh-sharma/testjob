import React, { useState } from 'react'
import Topbar from './Topbar';
import styles from './Mcq.module.css'
import ProgressBar from './ProgressBar';
import BottomBar from './BottomBar';

const Questionnaire = ({ data }) => {
    const [questions, setQuestions] = useState(0);
    const [star, setstar] = useState(0);
    const [green, setGreen] = useState(false);
    const [error, setError] = useState(false);
    const [countCorrect, setCountCorrect] = useState(0);
    const length = data.length;
    const wrongAnswers = (data[questions].incorrect_answers)
    console.log(wrongAnswers[0]);

    const categories = data[questions].category;
    const difficulty = data[questions].difficulty;

    const onClickNext = (e) => {
        setError(false)
        setstar(0)
        setGreen(false)
        const nextQuestion = questions + 1;
        if (nextQuestion < length) {
            setQuestions(nextQuestion)
        }
        console.log('wright answer');
    }


    const handleClick = () => {
        setCountCorrect(countCorrect + 1)
        check()
        setGreen(true)
        console.log('wright answer');
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
        setError(true)
        check()
    }


    console.log(data[0].question);
    const mapped = data.map((d) => {
        return d.question.replaceAll(('%20', ' ').replaceAll('%', ''))
    })
    const question = (mapped[questions].replaceAll('%20', ' ').replaceAll('%', ' '));

    return (
        <div>
            <>
                <ProgressBar question={questions} />
                <Topbar star={star}
                    question={questions}
                    difficulty={difficulty}
                    length={length}
                    categories={categories} />

                {/* Question */}

                <p className={styles.question}> {question.replaceAll('%20', ' ').replaceAll('%', ' ') + ' ?'}</p>
                <br />
                <div className={styles.option}>
                    {data[questions].incorrect_answers.map((n) => {
                        return (
                            <>
                                <button onClick={onWrongClick}>{n.replaceAll('%20', ' ').replaceAll('%', ' ')}</button>
                            </>
                        )
                    })}
                    <button onClick={handleClick}>{data[questions].correct_answer.replaceAll('%20', ' ')}</button>
                </div>

            </>
            <div>

                {green && <p className={styles.msg}>Correct</p>}
                {error && <p className={styles.msg}>Sorry</p>}
                <button className={styles.nextQuestion} onClick={onClickNext}>Next Question</button>
            </div>

            <BottomBar countCorrect={countCorrect} />
        </div>
    )
}
export default Questionnaire;
