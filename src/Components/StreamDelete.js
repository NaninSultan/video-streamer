import { useEffect } from 'react';
import history  from '../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showStream, deleteStream } from '../Actions';
import { useParams } from 'react-router-dom';
import Modal from './Modal';
import { Button } from '@material-ui/core';

const StreamDelete = ({ showStream, deleteStream, stream }) => {

    const { id } = useParams()

    useEffect(() => {
        showStream(id)
        // eslint-disable-next-line
    }, [])

    const onDissmiss = () => history.push('/')

    const renderContent = !stream
        ? 'Delete Stream'
        : `Are you sure you want to delete this stream with title : ${stream.title} ?`

    const renderActionButtons = (
        <>
        <Button
            style={{marginTop: "40px"}}
            variant="contained"
            color="secondary"
            onClick={() => deleteStream(id)}
        >
            Delete
        </Button>
        <Link to={'/'} onClick={() => onDissmiss()} className="ui button">
            <Button style={{marginLeft: "20px", marginTop: "40px"}} variant="contained" color="primary">Cancel</Button>
        </Link>
    </>
    )

    return (
        <Modal
        title="Delete Stream"
        content={renderContent}
        actionButtons={renderActionButtons}
        onDissmiss={onDissmiss}
    />
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { showStream, deleteStream })(StreamDelete)