import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  // move StreamCreate to StreamForm to reuse in StreamEdit
  // renderInput(formProps) {
  //   return (
  //     <input
  //       {...formProps.input}
  //       // onChange={formProps.input.onChange}
  //       // value={formProps.input.value}
  //     />
  //   );
  // }

  // use meta.touched for error handling
  // renderError({ error, touched }) {
  //   if (touched && error) {
  //     return (
  //       <div className='ui error message'>
  //         <div className='header'>{error}</div>
  //       </div>
  //     );
  //   }
  // }

  // can be destructured like this
  // renderInput = ({ input, label, meta }) => {
  //   console.log('meta', meta);
  //   const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  //   return (
  //     <div className={className}>
  //       <label>{label}</label>
  //       <input {...input} autoComplete='off' />
  //       {this.renderError(meta)}
  //     </div>
  //   );
  // };

  onSubmit = (formValues) => {
    // event.preventDefault(); -> redux form will automatically do this
    console.log('formValue', formValues);
    // call action creator
    this.props.createStream(formValues);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// meta.error
// we also can use meta.touched
// const validate = (formValues) => {
//   const errors = {};

//   if (!formValues.title) {
//     // only ran if the user did not enter the title
//     errors.title = 'You must enter a title';
//   }
//   if (!formValues.description) {
//     errors.description = 'You must enter a description';
//   }

//   return errors;
// };

export default connect(null, { createStream })(StreamCreate);
