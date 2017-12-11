import React from 'react';
import './main.css'

class Wordsanimator extends React.Component {
  constructor() {
    super()

  }

  componentDidMount() {
    if(this.props.words.length > 6){
      alert('Only 6 words are allowed!')
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <section className="rw-wrapper">
        	<span className="rw-sentence">
            <span>{this.props.partialSentence}</span>
        		<div className={!this.props.style ? 'rw-words rw-words-1' : `rw-words ${this.props.style}`}>
              {this.props.words.map((word,i) => <span key={i}>{word}</span>)}
        		</div>
        	</span>
        </section>
      </div>
    );
  }
}

export default Wordsanimator;
