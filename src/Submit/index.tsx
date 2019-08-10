import React from 'react';
import { withFormik, FormikProps, FormikErrors, Form } from 'formik';
import { FormCarousel_Form, Form_Submit, FormProps } from '../FormCarousel/types';
import { Checkbox } from '../FormCarousel/utils';
import Stage from '../FormCarousel/Stage';

const SubmitForm: React.FC<FormCarousel_Form & FormikProps<Form_Submit>> = (props) => {

  return (
    <Stage transition={props.transition}>
      <div className='wrap'>
        <Form>
          <h3>Please agree to terms of service</h3>
          <div>
            <Checkbox
              name="agree"
              value="Agree to terms"
            />
          </div>
          <input
            className='textbox submit'
            type="submit"
            value="Submit"
          />
        </Form>
      </div>
    </Stage>
  );
}

const Submit = withFormik<FormCarousel_Form & FormProps, Form_Submit>({
  mapPropsToValues: props => {
    return {
      agree: true
    };
  },

  validate: (values: Form_Submit) => {
    let errors: FormikErrors<any> = {};
    if (values.agree !== true) {
      errors['agree'] = 'Please accept the terms of service';
    }
    return errors;
  },

  handleSubmit: (values, formikBag) => {
    formikBag.props.setCompleted(formikBag.props.index, true);
  },
})(SubmitForm);

export default Submit;