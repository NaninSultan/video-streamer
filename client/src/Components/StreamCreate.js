import StreamForm from './StreamForm';
import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../Actions';

const StreamCreate = ({createStream}) => {

    const onSubmit = (formValues) => {
        createStream(formValues)
    }

    return (
        <StreamForm onSubmitCallback={onSubmit} />
    )

}

export default connect(null, { createStream })(StreamCreate)