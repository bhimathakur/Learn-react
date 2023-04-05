import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import React from 'react'
import { json } from 'react-router-dom';
import * as Yup from 'yup';
 
const Contact = () => {

  // const formik = useFormik({
  //   initialValues: {
  //     firstname: '',
  //     lastname: '',
  //     email: '',
  //   },
  //   validationSchema: Yup.object({

  //     firstname: Yup.string()
  //     .required("Please enter first name")
  //     .max(15, 'Must be 15 or less character')
  //     .min(5, "Must be at least 5 charachter"),
  //     lastname: Yup.string()
  //     .required("Please enter last name")
  //     .max(15, 'Must be 15 or less character')
  //     .min(5, "Must be at least 5 charachter"),

  //     email: Yup.string()
  //     .required("Please enter email")
  //     .email('Please enter valid email address'),


  //   }),
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },

  // });
  return (
    <Formik
    initialValues={{firstname: '', lastname: '', email: ''}}
    validationSchema = {Yup.object({
      firstname: Yup.string()
      .max(15, 'First name must be less than 15 characters')
      .min(3, 'First name must be greater than 3 characters')
      .required('Please enter first name'),
      lastname: Yup.string()
      .max(15, 'Last name must be less than 15 characters')
      .min(3, 'Last name must be greater than 3 characters')
      .required('Please enter last name'),
      email: Yup.string()
      .required('Please enter email address')
      .email('Please enter valid email address'),

    })}
    onSubmit={values => {
      alert(JSON.stringify(values, null, 2));
    }}
    >
      <Form className='m-32'>
        <div className='m-2 p-2'>
        <label forHtml="firstname" className='font-bold'>First Name</label>
        <Field name="firstname" type="text" className="bg-gray-50 border border-gray-300 ml-10" />
        <ErrorMessage name='firstname' />
        </div>
        <div className='m-2 p-2'>
        <label forHtml="lastname" className='font-bold w-60'>Last Name</label>
        <Field name="lastname" type="text" className="bg-gray-50 border border-gray-300 ml-10" />
        <ErrorMessage name='lastname' />
        </div>
        <div className='m-2 p-2'>
        <label forHtml="email" className='font-bold'>Email</label>
        <Field name="email" type="text" className="bg-gray-50 border border-gray-300 ml-10" />
        <ErrorMessage name='email' />
        </div>
        <div className='m- p-2 bg-green-800 rounded-lg w-20 text-center font-bold'>
        <button type='submit'>Submit </button>

        </div>
              </Form>
    </Formik>
  );
}

export default Contact
