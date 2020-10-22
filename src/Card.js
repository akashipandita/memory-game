import React from 'react'
import './Card.css';

// function flip(card){
//     console.log("flipped");
//     console.log(card);
// }

class Card extends React.Component{

    render(){
        let content;
        if(this.props.faceUp){
            content = this.props.content;
        }else{
            content = ''
        }
        return (
            <div onClick={this.props.flip} className={`card ${this.props.faceUp ? 'face-up' : ''}`} >
                {content}
            </div>
        )
    }
}

export default Card
