import React, { Component } from 'react';
import Display from './Display';
import Card from './Card';
import Hoc from './Hoc';
import './App.css';

export default class App extends Component {
	state = {
		cards: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
		],
		start: false,
		userClickedPattern: [],
		displayText: 'Memory Card Game',
		eventTarget: [],
		time: 300,
	};

	shuffleCards = () => {
		let cardDeck = [...this.state.cards];
		for (let i = cardDeck.length - 1; i > 0; i--) {
			let randomIndex = Math.floor(Math.random() * (i + 1));
			let temp = cardDeck[i];
			cardDeck[i] = cardDeck[randomIndex];
			cardDeck[randomIndex] = temp;
		}
		this.setState({
			cards: cardDeck,
			start: true,
			displayText: `You have ${this.state.time} seconds left`,
		});
	};

	turnCards = (event) => {
		let clickedCard = event.target;
		let objectPattern = this.state.eventTarget;
		objectPattern.push(clickedCard);
		let pattern = this.state.userClickedPattern;
		let cardIndex = clickedCard.getAttribute('index');
		let cardNum = this.state.cards[cardIndex];
		pattern.push(cardNum);
		clickedCard.style.transform = 'rotateY(0)';
		clickedCard.style.fontSize = '5rem';
		if (pattern.length === 2) {
			if (pattern[pattern.length - 1] !== pattern[pattern.length - 2]) {
				console.log(pattern[pattern.length - 1]);
				console.log(pattern[pattern.length - 2]);
				setTimeout(() => {
					objectPattern[objectPattern.length - 1].style.fontSize = '0';
					objectPattern[objectPattern.length - 1].style.transform =
						'rotateY(180deg)';
					objectPattern[objectPattern.length - 2].style.fontSize = '0';
					objectPattern[objectPattern.length - 2].style.transform =
						'rotateY(180deg)';
				}, 2000);
			}
		} else if (pattern.length > 2) {
			pattern.splice(0, 2);
		}
		console.log(pattern.length);
	};

	render() {
		const cardsList = this.state.cards.map((num, index) => {
			return (
				<Card
					key={index}
					content={num}
					turnCards={this.turnCards}
					index={index}
				/>
			);
		});
		return (
			<div className='App'>
				<Display
					text={this.state.displayText}
					shuffle={this.shuffleCards}
					start={this.state.start}
					timer={this.playTime}
					currentTime={this.state.time}
				/>
				<Hoc>{cardsList}</Hoc>
			</div>
		);
	}
}
