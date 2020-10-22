import React from 'react'
import Card from './Card'
import './Board.css';

class Board extends React.Component{

    constructor(props){
        super(props)
        
        const emojis=[
            '😍',
            '👧',
            '🤔',
            '😉',
            '🎀',
            '🍕',
            '🍔',
            '💘',
            '🍱',
            '🧇',
            '🥞',
            '👸'
        ]
    
        const deck=emojis.concat(emojis)
                .sort(()=>Math.random() - 0.5)
                .map(f=>{
                    return{
                        content: f,
                        faceUp: false,
                    }
        })
        this.state={
            deck: deck,
            firstCard: null
        }
    }
    flipCardTo(cardIdx,faceUp){
        this.setState({
            deck: this.state.deck.map((f,i)=>{
                if(i===cardIdx){
                    return{
                        content: f.content,
                        faceUp: !f.faceUp
                    }
                }else{
                    return f;
                }
            })
        })
    }
    flip(cardIdx){

        if(this.state.firstCard===null){
            this.setState({firstCard: cardIdx});
        }else{
            const firstCardContent=this.state.deck[this.state.firstCard].content;
            const secondCardContent=this.state.deck[cardIdx].content;
            if(firstCardContent===secondCardContent){
                this.setState({firstCard: null});
            }else{
                setTimeout(()=>{
                    this.flipCardTo(this.state.firstCard,false);
                    this.flipCardTo(cardIdx,false);
                    this.setState({firstCard: null});
                },3000);
            }
        }

        this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp);

        
        // this.state.deck[i].faceUp=!this.state.deck[i].faceUp;
        // console.log(`flippng from ${this.state.faceUp}`);
        // this.setState({faceUp: !this.state.faceUp})
        // console.log(`flipped to ${this.state.faceUp}`);
    }
    
    render (){

        return (
            this.state.deck.map((f,i)=>{
                return(
                    <div className="board">
                        <Card flip={()=>{this.flip(i)}} content={f.content} faceUp={f.faceUp}/>
                        {/* <Card content={f}/> */}
                    </div>
                )
            })
        )
    }

}

export default Board
