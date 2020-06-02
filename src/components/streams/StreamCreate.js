import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // renderInput(formProps) {
  //   return (
  //     <input
  //       {...formProps.input}
  //       // onChange={formProps.input.onChange}
  //       // value={formProps.input.value}
  //     />
  //   );
  // }

  // can be destructured like this
  renderInput({ input, label, meta }) {
    console.log('meta', meta);
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValue) {
    // event.preventDefault(); -> redux form will automatically do this
    console.log('formValue', formValue);
  }

  render() {
    console.log(this.props);
    return (
      <form
        // this.props.handleSubmit comes from Redux Form
        // check this from the console
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form '
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Ender Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

// meta.error
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // only ran if the user did not enter the title
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({ form: 'streamCreate', validate: validate })(
  StreamCreate
);
