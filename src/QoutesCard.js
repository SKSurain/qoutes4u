import React, { Component } from 'react'
import './QoutesCard.css'


class QoutesCard extends Component {
    static defaultProps = {
        qoutes: [
            {
                id: 1,
                quote: 'The only limit to our realization of tomorrow will be our doubts of today',
                author: 'Vidal Sassoon'
            },
            {
                id: 2,
                quote: 'The only way to do great work is to love what you do.',
                author: 'Steve Jobs'
            },
            {
                id: 3,
                quote: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
                author: 'Albert Schweitzer'
            },
            {
                id: 4,
                quote: 'The best revenge is massive success.',
                author: 'Frank Sinatra'
            },
            {
                id: 5,
                quote: 'Don\'t watch the clock; do what it does. Keep going.',
                author: 'Sam Levenson'
            },
            {
                id: 6,
                quote: 'Believe you can and you\'re halfway there.',
                author: 'Theodore Roosevelt'
            },
            {
                id: 7,
                quote: 'In order to succeed, we must first believe that we can.',
                author: 'Nikos Kazantzakis'
            },
            {
                id: 8,
                quote: 'The only limit to our realization of tomorrow will be our doubts of today.',
                author: 'Franklin D. Roosevelt'
            },
            {
                id: 9,
                quote: 'The future belongs to those who believe in the beauty of their dreams.',
                author: 'Eleanor Roosevelt'
            },
            {
                id: 10,
                quote: 'Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
                author: 'Roy T. Bennett'
            },
            {
                id: 11,
                quote: 'Do not wait for the right moment to start, start and make each moment right.',
                author: 'Roy T. Bennett'
            },
            {
                id: 12,
                quote: 'You miss 100% of the shots you don\'t take.',
                author: 'Wayne Gretzky'
            },
            {
                id: 13,
                quote: 'The harder I work, the luckier I get.',
                author: 'Samuel Goldwyn'
            },
            {
                id: 14,
                quote: 'Success usually comes to those who are too busy to be looking for it.',
                author: 'Henry David Thoreau'
            },
            {
                id: 15,
                quote: 'The only place where success comes before work is in the dictionary.',
                author: 'Vidal Sassoon'
            },
            {
                id: 16,
                quote: 'Opportunities don\'t happen. You create them.',
                author: 'Chris Grosser'
            },
            {
                id: 17,
                quote: 'Success is walking from failure to failure with no loss of enthusiasm.',
                author: 'Winston Churchill'
            },
            {
                id: 18,
                quote: 'The secret of success is to know something nobody else knows.',
                author: 'Aristotle Onassis'
            },
            {
                id: 19,
                quote: 'Don\'t be afraid to give up the good to go for the great.',
                author: 'John D. Rockefeller'
            },
            {
                id: 20,
                quote: 'The successful warrior is the average man, with laser-like focus.',
                author: 'Bruce Lee'
            }],
        speak: [
            { text: 'hi' }, { text: 'hello' }]
    }

    render() {
        return (<div>
            <h1>BEST QOUTES</h1>
            <div className='QoutesCard'>{this.props.qoutes.map((qoute) => (
                <p className='Qoutes-section'>{qoute.quote} <i className='Qoutes-author'>{qoute.author}</i></p>))}
            </div>
        </div>)
    }
}

export default QoutesCard

