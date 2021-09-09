import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";


let StreamForm = ({handleSubmit, onSubmitCallback}) => {

  const onSubmit = (formValues) => {
    onSubmitCallback(formValues)
  }



const streamName = ({ label, input, meta: { error, touched }}) => (
    <div className="stream-name">
        <label>{label}</label>
        <TextField style={{marginLeft: "20px", marginTop: "20px"}} label="Stream Name" {...input} variant="outlined" />
      {touched && error &&
       <span className="error">{error}</span>}
    </div>
  )

const streamDescription = ({ label, input, meta: { error, touched }}) => (
    <div className="stream-description">
    <label>{label}</label>
    <TextField style={{marginLeft: "20px", marginTop: "10px"}} label="Stream Description" {...input} variant="outlined" />
  {touched && error &&
   <span className="error">{error}</span>}
    </div>
)




    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography style={{marginTop: "200px", marginLeft: "20px"}} variant="h3">Create a stream</Typography>
          <Field name="title" component={streamName} type="text" />
          <Field name="description" component={streamDescription} type="text" />
        <Button style={{marginLeft: "20px", marginTop: "20px"}} variant="contained" color="primary" type="submit" >
          Create Stream
        </Button>
      </form>
    )
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
      errors.title = <Typography style={{marginLeft: "20px", color: "red", marginTop: "10px"}}>You must enter a title</Typography>
  }
  if (!formValues.description) {
      errors.description = <Typography style={{marginLeft: "20px", color: "red", marginTop: "10px"}}>You must enter a description</Typography>
  }
  return errors;
}


StreamForm = reduxForm ({
    form: "contact",
    validate: validate
})(StreamForm)


export default StreamForm;