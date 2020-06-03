import Cards, { Card } from 'react-swipe-card'
import React from 'react';

const data = ['Alexandre', 'Thomas', 'Lucien']

function testcards() {
    return (
        <Cards onEnd={() => console.log("hey")} >
            {data.map(item =>
                <Card
                    onSwipeLeft={() => console.log("left")}
                    onSwipeRight={() => console.log("right")}>
                    <h2>{item}</h2>
                </Card>
            )}
        </Cards>
    );
}
export default testcards;