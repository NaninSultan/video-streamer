import { useEffect } from "react";
import { connect } from "react-redux";
import _ from 'lodash';
import { showStream, editStream } from "../Actions";
import StreamForm from "./StreamForm";
import { useParams } from "react-router-dom";

const StreamEdit = ({ showStream, editStream, stream }) => {

    const { id } = useParams()


    useEffect(() => {
        showStream(id)
        // eslint-disable-next-line
    }, [])

    const onSubmit = (formValues) => {
        editStream(id, formValues)
    }

    return (
        <div>
        {!stream ? (
            <div>Loading...</div>
        ) : (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={_.pick(stream, 'title', 'description')}
                    onSubmitCallback={onSubmit}
                />
            </div>
        )}
    </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { showStream, editStream })(StreamEdit)