import React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field, ErrorMessage } from 'formik';
import { FormCarousel_Form, Form_Bio } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';

const BioForm: React.FC<FormCarousel_Form & FormikProps<Form_Bio>> = (props) => {

  return (
    <Stage transition={props.transition}>
      <div className='wrap'>
        <Form>
          <h3>Please provide a short bio</h3>
          <Field
            className='textbox'
            component="textarea"
            name="bio"
            placeholder="Bio"
          />
          <p className="error">
            <ErrorMessage name="bio" />
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

const Bio = withFormik<FormCarousel_Form, Form_Bio>({
  mapPropsToValues: props => {
    return {
      bio: ''
    };
  },
  validate: (values: Form_Bio) => {

    let errors: FormikErrors<any> = {};
    if (values.bio === '') {
      errors['bio'] = 'Please provide a bio';
    }
    return errors;
  },

  handleSubmit: (values, formikBag) => {
    formikBag.props.setCompleted(formikBag.props.index, true);
    formikBag.props.toggleStage(formikBag.props.index + 1);
  },
})(BioForm);

export default Bio;