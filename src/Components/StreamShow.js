import React, { useEffect } from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { showStream } from '../Actions'
import { Typography } from '@material-ui/core'


const StreamShow = (props) => {

    const videoRef = React.createRef();
    let player;

    useEffect(() => {
        const id = props.match.params.id;
        props.showStream(id);
        buildPlayer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const buildPlayer = () => {
        if (player || !props.stream) {
            return;
        }
        const id = props.match.params.id
        player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })
        player.attachMediaElement(videoRef.current)
        player.load();
    }
    if (!props.stream) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <video ref={videoRef} style={{ width: '100%' }} controls={true} />
            <Typography variant="h4">{props.stream.title}</Typography>
            <Typography variant="h5">{props.stream.description}</Typography>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}
export default connect(
    mapStateToProps, { showStream }
)(StreamShow)