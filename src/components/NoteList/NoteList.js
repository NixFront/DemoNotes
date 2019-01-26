import React, { Component } from 'react';
import Note from '../Note/note.js';

class NoteList extends Component {
	constructor(props) {
        super(props);
        this.removeNote = this.removeNote.bind(this);
        this.addNote = this.addNote.bind(this);
        this.notes = Object.values(this.props.notes);
        this.isDeleted = [];
        this.divs = document.getElementsByClassName('noteList__noteItem-item');
    }
    deleteNote(notes){
    	for (var i = 0; i < notes.length; i++) {
    		if (notes[i].isDeleted) {
    			this.notes.splice(i,1);
    		}
    	}
    }
	removeNote(id){
		let top = 0;
		let opacity = 1;
		let j;
		  for (var i = 0; i < this.notes.length; i++) {
	    	if (this.notes[i].id === id) {
	    		this.notes[i].isDeleted = true;
	    		console.log(this.notes);
				j = i;
				let noteDeleted = {
					id: id,
					animationDone: false
				};
				this.isDeleted.push(noteDeleted);
				let timerId =  setInterval(() => {
					top += 10;
					opacity -= 0.2;
					 this.divs[j].style.top = top + "px";
					this.divs[j].style.opacity = opacity;
				},100);
				setTimeout( () => {
					this.deleteNote(this.notes);
				   for (var i = 0; i < this.isDeleted.length; i++) {
				   	if (this.isDeleted[i].id === id) {
				   		this.isDeleted[i].animationDone = true;
				   	}
				   }
				   console.log(this.notes);
				   clearInterval(timerId);
				   let countDeleted = 0;
				   for (i = 0; i < this.isDeleted.length; i++) {
				   	if (this.isDeleted[i].animationDone) {
				   		countDeleted++;  		
				   	}
				   }
				   if (countDeleted === this.isDeleted.length) {
				   	this.props.updateNotes(this.notes);
				   	this.divs = document.getElementsByClassName('noteList__noteItem-item');
				   }
				}, 3000);

			}
		}
	}
	addNote(e){
		e.preventDefault();
		let noteName,noteText;
		noteName = document.getElementById("noteName");
		noteText = document.getElementById("noteText");
		if (noteName.value !== '' && noteText.value !== '') {
			noteName = noteName.value;
			noteText = noteText.value;
		}
		else{
			alert('Note Name or note Text empty');
			return;
		}
		let newNote = {
			id : this.notes.length + 1,
			noteName: noteName,
			noteText : noteText,
			isDeleted : false
		}
		this.notes.push(newNote);
		this.props.updateNotes(this.notes);
		document.getElementById("noteName").value = "";
		document.getElementById("noteText").value = "";
		this.divs = document.getElementsByClassName('noteList__noteItem-item');
	}
	 renderNotes(){
		const notes = Object.values(this.props.notes);
		return notes.map((note) => <Note key = {note.id} deleteNote = {this.removeNote} noteId = {note.id} noteName = {note.noteName} noteText = {note.noteText} />);
	}
  render() {
    return (
      <div className = 'noteList'>
      	<form className = 'noteList__form'>
      		<input 
	      		id = 'noteName' 
	      		type = "text" 
	      		placeholder = "Note Name" 
	      		required 
      		/>
      		<textarea id = 'noteText' 
	      		placeholder = "Note text"  
	      		required 
      		/>
      		<button type="reset" onClick = {this.addNote}>Add</button>
      	</form>
      	<div className = "noteList__noteItem">
      		{this.renderNotes()}
      	</div>
      </div>
    );
  }
}

export default NoteList;