

import { NoteObject } from "../models/Note";
import {Card, CardContent, Box, Typography, Button} from '@mui/material'
interface INotesProps {
    note: NoteObject
}

const Note: React.FC <INotesProps>= ({note}) => {
     
    return(
        <Card style={{backgroundColor: note.color}}>
          <CardContent>
            <Box>
                <Typography>{note.title}</Typography>
                <Typography>{note.details}</Typography>
                <Typography>{note.date}</Typography>
                <Button variant="outlined">Delete</Button>

            </Box>

          </CardContent>
        </Card>
    )
}

export default Note;