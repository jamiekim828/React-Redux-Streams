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
  renderInput({ input, label }) {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
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

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
