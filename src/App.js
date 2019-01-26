import React, { Component } from 'react';
import './App.css';
import NoteList from  './components/NoteList/NoteList.js';

class App extends Component {
    state = {
    notes:{
      1: {
        id: 1,
        noteName: "Note 1",
        noteText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis est ipsum soluta ducimus enim, perferendis rem sint similique amet, aspernatur quod repellendus dolor quas eveniet. Nisi odio inventore at ipsa.",
        isDeleted: false
      },
      2: {
        id: 2,
        noteName: "Note 2",
        noteText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis est ipsum soluta ducimus enim, perferendis rem sint similique amet, aspernatur quod repellendus dolor quas eveniet. Nisi odio inventore at ipsa.",
        isDeleted: false
      },
      3: {
        id: 3,
        noteName: "Note 3",
        noteText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis est ipsum soluta ducimus enim, perferendis rem sint similique amet, aspernatur quod repellendus dolor quas eveniet. Nisi odio inventore at ipsa.",
        isDeleted: false
      }
    }
  }
  updateNotes(newNotes){
    this.setState((state, props) => {
      return {notes: newNotes};
    });
  }
  render() {
    return (
        <NoteList notes = {this.state.notes} updateNotes = {this.updateNotes.bind(this)}/>
    );
  }
}

export default App;
