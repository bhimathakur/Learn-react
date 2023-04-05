import { useFormik } from 'formik'
import React from 'react'
import { json } from 'react-router-dom';
import * as Yup from 'yup';
 
const Contact = () => {

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    validationSchema: Yup.object({

      firstname: Yup.string()
      .required("Please enter first name")
      .max(15, 'Must be 15 or less character')
      .min(5, "Must be at least 5 charachter"),
      lastname: Yup.string()
      .required("Please enter last name")
      .max(15, 'Must be 15 or less character')
      .min(5, "Must be at least 5 charachter"),

      email: Yup.string()
      .required("Please enter email")
      .email('Please enter valid email address'),


    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

  });
  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='m-2 p-2 flex flex-wrap'>
        <label>First Name</label>
        <input  type="text"  id='firstname' 
        {...formik.getFieldProps('firstname')}        />
        </div>
        {formik.touched.firstname && formik.errors.firstname ? <div>{formik.errors.firstname}</div>:null}
        <div className='m-2 p-2 flex flex-wrap'>

        <label>Last Name</label>
        <input type="text" name='lastname' id='lastname'
        {...formik.getFieldProps('lastname')}        
        />
        {console.log(formik.getFieldProps('lastname2'))}
        </div>
        {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div>:null}
        <div className='m-2 p-2 flex flex-wrap'>

        <label>Email</label>
        <input type="text" name='email' id='email'
        {...formik.getFieldProps('email')}
        />
        </div>
        {formik.touched.email &&  formik.errors.email ? <div>{formik.errors.email}</div>:null}
        <input type="submit" name='submit' value="submit" />
      </form>
    </div>
  )
}

export default Contact
