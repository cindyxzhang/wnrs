import React from 'react';
import styles from './styles.css';
import Cards, { Card } from 'react-swipe-card';

class GameCards extends React.PureComponent {
    constructor(props) { super(props) }
    render() {
        return (<div className="card1">{this.props.label}</div>);
    }
}

export default GameCards; 