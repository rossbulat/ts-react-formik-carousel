import React from 'react';
import { Field, ErrorMessage } from 'formik';

export function Checkbox (props: any) {

  return (
    <Field name={props.name}>
      {({ field, form }: { field: any, form: any }) => {
        return (
          <React.Fragment>
            <label>
              <input
                type="checkbox"
                {...props}
                checked={field.value}
                onChange={() => {
                  form.setFieldValue(props.name, !field.value);
                }}
              />
              &nbsp; {props.value}
            </label>
            {form.errors &&
              <p className='error'>
                <ErrorMessage name="agree" />
              </p>
            }
          </React.Fragment>
        );
      }}
    </Field>
  );
}

export default Checkbox;