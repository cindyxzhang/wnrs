import React from 'react';
import styles from './styles.css';


class GameCards extends React.PureComponent {
    constructor(props) { super(props) }
    render() {
        return (<div className="card1">{this.props.label}</div>);
    }

}


export default GameCards; 