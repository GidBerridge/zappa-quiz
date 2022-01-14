import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which of these does Frank Zappa have named after him?',
			answerOptions: [
				{ answerText: 'A comet - Zappa 421a', isCorrect: false },
				{ answerText: 'A dinosaur - Zappasaurus', isCorrect: false },
				{ answerText: 'A type of bacteria that causes acne - P. Acnes type Zappae', isCorrect: true },
				{ answerText: 'An element of the periodic table - Zapponium (Za)', isCorrect: false },
			],
		},
		{
			questionText: 'Which famous guest bass player played on the title track of Apostrophe?',
			answerOptions: [
				{ answerText: 'Greg Lake', isCorrect: false },
				{ answerText: 'Jack Bruce', isCorrect: true },
				{ answerText: 'Lemmy', isCorrect: false },
				{ answerText: 'Bill Wyman', isCorrect: false },
			],
		},
		{
			questionText: 'In January 1990, which country appointed Zappa as "Special Ambassador to the West on Trade, Culture and Tourism”?',
			answerOptions: [
				{ answerText: 'Czech Republic', isCorrect: true },
				{ answerText: 'Poland', isCorrect: false },
				{ answerText: 'Belarus', isCorrect: false },
				{ answerText: 'Hungary', isCorrect: false },
			],
		},
		{
			questionText: 'What was Franks middle name?',
			answerOptions: [
				{ answerText: 'Harold', isCorrect: false },
				{ answerText: 'Bob', isCorrect: false },
				{ answerText: 'David', isCorrect: false },
				{ answerText: 'Vincent', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const scoreText = useState(["The man from Utopia!", "Wild love", "Tryin’ To Grow A Chin",
			"Cosmik Debris", "Dancing fool", "Shut up and play your guitar", "Dumb all over"])

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const scoreComment = (score) => {
		if (score === 10) {
			return scoreText[0];
		}
		if (score > 7 && score < 10) {
			return scoreText[1];
		}
		if (score > 5 && score < 8) {
			return scoreText[2];
		}
		if (score > 3 && score < 6) {
			return scoreText[3];
		}
		if (score > 1 && score < 4) {
			return scoreText[4];
		}
		if (score === 1) {
			return scoreText[5];
		}
		if (score === 0) {
			return  scoreText[6];
		}
	};


	return (
		
		<div className='app'>
			{showScore ? (
				<div>
					<div className='score-section'>					
							You scored {score} out of {questions.length}					
					</div>
					<div className='score-section'>	
						{scoreComment(score)}
					</div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
				
			)}
		</div>
	);
}
