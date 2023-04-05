import { useFormik } from 'formik'
import React from 'react'
import { json } from 'react-router-dom';

const validate = (values) => {

  const errors = {}
  if(values.firstname == '') {
    errors.firstname = "Please enter first name";
  }

  if(values.lastname == '') {
    errors.lastname = "Please enter lastname name";
  }
  if(values.email == '') {
    errors.email = "Please enter email";
  }
  return errors;
}

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    validate,
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
        <input  type="text" name='firstname' id='firstname' 
        onChange={formik.handleChange}
        value={formik.values.firstname}
        />
        </div>
        {formik.touched.firstname && formik.errors.firstname ? <div>{formik.errors.firstname}</div>:null}
        <div className='m-2 p-2 flex flex-wrap'>

        <label>Last Name</label>
        <input type="text" name='lastname' id='lastname'
        onChange={formik.handleChange}
        value={formik.values.lastname}
        />
        </div>
        {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div>:null}
        <div className='m-2 p-2 flex flex-wrap'>

        <label>Email</label>
        <input type="text" name='email' id='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        />
        </div>
        {formik.touched.email &&  formik.errors.email ? <div>{formik.errors.email}</div>:null}
        <input type="submit" name='submit' value="submit" />
      </form>
    </div>
  )
}

export default Contact
