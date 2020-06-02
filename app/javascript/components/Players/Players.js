import React from 'react';
import './Players.css';
import GenericButton from '../components/GenericButton/index.js';

function Players() {
    return (
        <div className="Players">
            <h1 className='heading'>Choose how many cards per level you want to play.</h1>
            <div className='buttons'>
                <GenericButton label='5'></GenericButton>
            </div>
            <div className='buttons'>
                <GenericButton label='10'></GenericButton>
            </div>
            <div className='buttons'>
                <GenericButton label='15'></GenericButton>
            </div>
        </div >
    );
}

export default Players;