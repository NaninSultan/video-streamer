import { Button, Typography, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { showStreams } from '../Actions';
import logo from '../images/logo.png';

const StreamList = ({ showStreams, streams, currentUserId, isSignedIn }) => {
    console.log(currentUserId)

    useEffect(() => {
        showStreams()
        // eslint-disable-next-line
    }, [])

    const renderAdmin = (stream) => {
        if (stream.userId === currentUserId) {
            return (
                <div className="right floated content">
                <Link
                    style={{textDecoration: "none"}}
                    to={`/streams/edit/${stream.id}`}
                    className="ui button primary"
                >
                    <Button variant="contained" color="primary">Edit</Button>
                </Link>
                <Link
                    style={{textDecoration: "none"}}
                    to={`/streams/delete/${stream.id}`}
                    className="ui button negative"
                >
                    <Button style={{marginLeft: "10px"}} variant="contained" color="secondary">Delete</Button>
                </Link>
                </div>
            )
        }
    }

    const renderList = () => {
        return streams.map((stream) => {
            return (
                <Grid style={{width: "90%", margin: "auto", color: "black", backgroundColor: "#F5FFFA", border: "solid 1px lightgrey", borderRadius: "5px"}} container spacing={1} key={stream.id}>
                    <Grid style={{marginTop: "15px", marginLeft: "15px"}} item >
                        <img src={logo} alt='Logo' width="50px" height="50px" />
                    </Grid>
                    <Grid style={{marginLeft: "20px", marginTop: "5px"}} item >
                        <Link  to={`/streams/${stream.id}`}>
                            <Typography variant="h4">{stream.title}</Typography>
                        </Link>
                        <Typography variant="h5">{stream.description}</Typography>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid style={{marginRight: "50px", marginTop: "20px"}} item>
                        {renderAdmin(stream)}
                    </Grid>

                </Grid>
            )
        })
    }

    const renderCreate = () => {
        if (isSignedIn) {
            return (
            <Button color="primary"
                variant="contained"
                style={{marginLeft: "150px", marginTop: "10px", marginBottom: "50px"}} >
                <Link style={{textDecoration: "none", color: "white"}} to={"/streams/new"}>
                    NEW STREAM
                </Link>
            </Button>
            )
        }
    }

    return (
        <>
            <Typography variant="h3" style={{marginTop: "100px", marginLeft: "20px"}}>
                Choose a Stream
            </Typography>
            <Grid style={{marginTop: "40px", marginBottom: "40px"}}>

              <Typography style={{marginLeft: "20px"}} variant="h4">{renderList()}</Typography>

            </Grid>
            {renderCreate()}
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { showStreams })(StreamList);