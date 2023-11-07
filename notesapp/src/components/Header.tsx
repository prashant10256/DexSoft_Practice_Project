
import {AppBar, Toolbar, Typography} from '@mui/material';
import { logo } from '../constants/Constant';

const Header:React.FunctionComponent = () => {

    return(
        <AppBar color='transparent' position='static'>
            <Toolbar>
             <img src={logo} alt="" style={{width:30, marginRight: 10}}/>
             <Typography>Evernote</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;