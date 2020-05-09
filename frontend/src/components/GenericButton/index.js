import React from 'react';

class GenericButton extends React.PureComponent {
    constructor(props){super(props)}
    render(){
        return(<button>{this.props.label}</button>);
    }
}

export default GenericButton; 