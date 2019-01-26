import React, { Component } from 'react';

class Note extends Component {
		constructor(props) {
        super(props);
        this.removeNote = this.removeNote.bind(this);
    }
	removeNote(e){
		e.preventDefault();
		this.props.deleteNote(this.props.noteId);
	}
	getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
  render() {
    return (
      <div className = "noteList__noteItem-item" style = {{backgroundColor: this.getRandomColor()}}>
      	<h1>{this.props.noteName}</h1>
      	<p>{this.props.noteText}</p>
      <i onClick = {this.removeNote} className="far fa-times-circle"></i>
      </div>
    );
  }
}
export default Note;