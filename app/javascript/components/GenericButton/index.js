import React from 'react';
import styles from './styles.css';

class GenericButton extends React.PureComponent {
    constructor(props){super(props)}
    render(){
        return(<button className='g-button'>{this.props.label}</button>);
    }
}

export default GenericButton; 