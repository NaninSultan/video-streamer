import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import GoogleAuth from './GoogleAuth';

const AppHeader = () => {
    return (
        <header>
            <Link to={'/'} style={{textDecoration: "none"}}>
            <div className='leftTop'>
                <img src={logo} alt='Logo' width="50px" height="50px" />
            </div>
            <div className='leftTop'>
                <Typography variant="h4" style={{marginTop: "5px", color: "black"}}>Video Browser</Typography>
            </div>
            </Link>
            <div className='rightTop'>
                <Grid container>
                    <Grid item>
                        <Link to={'/'} style={{marginRight: "10px", textDecoration: "none"}}>
                            <Button variant="contained" >
                                ALL STREAMS
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <GoogleAuth />
                    </Grid>
                </Grid>
            </div>
        </header>
    )

}

export default AppHeader;