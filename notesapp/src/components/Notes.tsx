
import { Box,Typography } from "@mui/material";
import { NoteObject } from "../models/Note";
import Note from './Note';

interface INotesProps{
    notes:NoteObject[]
}

const Notes:React.FC<INotesProps>= ({notes}) => {

    return(
        <Box>
            <Typography variant="h5">Notes</Typography>
            <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    notes.map(note => (
                        <Note key={note.id} note={note}  />
                    ))
                }
            </Box>
        </Box>
    
    )
}

export default Notes;


