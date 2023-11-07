import { useState } from "react";

import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes";
import {Box} from '@mui/material'
import { NoteObject } from "./models/Note";

function App() {

  const [notes, setNotes] = useState<NoteObject[]>([])

  const addNotes = (note: NoteObject) => {
  setNotes([ note,...notes ])
  }
  return (
    <>
    <Header />
    <Box style={{ padding: 20}}>
    <CreateNote addNotes={addNotes}/>
    <Notes notes={notes}/>
    </Box>

    </>
  );
}

export default App;
