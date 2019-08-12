import React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field, ErrorMessage } from 'formik';
import { FormCarousel_Form, Form_Details } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';

const DetailsForm: React.FC<FormCarousel_Form & FormikProps<Form_Details>> = (props) => {

  return (
    <Stage transition={props.transition}>
      <div className='wrap'>
        <Form>
          <h3>Please provide your email address</h3>
          <Field
            className='textbox'
            component='input'
            name="email"
            placeholder="Email"
          />
          <p className="error">
            <ErrorMessage name="email" />
          </p>

          <input
            className='textbox submit'
            type="submit"
            value="Continue"
          />
        </Form>
      </div>
    </Stage>
  );
}

const Details = withFormik<FormCarousel_Form, Form_Details>({
  mapPropsToValues: props => {
    return {
      email: '',
    };
  },
  validate: (values: Form_Details) => {
    let errors: FormikErrors<any> = {};
    if (values.email === '') {
      errors['email'] = 'Please provide an email';
    }

    return errors;
  },

  handleSubmit: (values, formikBag) => {
    formikBag.props.setCompleted(formikBag.props.index, true);
    formikBag.props.toggleStage(formikBag.props.index + 1);
  },
})(DetailsForm);

export default Details;