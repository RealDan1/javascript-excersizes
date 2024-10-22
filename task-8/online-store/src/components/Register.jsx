import React from 'react';
import { useFormik } from 'formik';

export default function Register() {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'first Name Required.';
    } else if (values.firstName.length > 15) {
      errors.firstName =
        'First name may not be longer than 15 Characters long.';
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name Required.';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Last name may not be longer than 20 Characters long.';
    }

    let passwordErrorMessage = '';

    // Check password length
    if (values.password.length < 8) {
      passwordErrorMessage += 'Password must contain at least 8 characters.\n';
    }

    // Check for uppercase letter
    if (!/[A-Z]/.test(values.password)) {
      passwordErrorMessage +=
        'Password must contain at least one uppercase letter.\n';
    }

    // Check for lowercase letter
    if (!/[a-z]/.test(values.password)) {
      passwordErrorMessage +=
        'Password must contain at least one lowercase letter.\n';
    }

    // Check for number
    if (!/\d/.test(values.password)) {
      passwordErrorMessage += 'Password must contain at least one number.\n';
    }

    // Check for special character
    if (!/[@$!%*?&]/.test(values.password)) {
      passwordErrorMessage +=
        'Password must contain at least one special character.\n';
    }

    if (passwordErrorMessage) {
      errors.password = passwordErrorMessage;
    }

    if (!values.email) {
      errors.email = 'Required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address.';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(
        'Login successful \nEmail:' +
          values.email +
          '\nPassword:' +
          values.password +
          '\nFirst Name:' +
          values.firstName +
          '\nLast Name:' +
          values.lastName
      );
    },
  });

  return (
    // Note the use of the formik object below
    <form className="register-form" onSubmit={formik.handleSubmit}>
      {/* input for firstName */}
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {/* // Tweaked error message display logic */}
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      {/* input for lastName */}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {/* // Tweaked error message display logic */}
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      {/* input for email */}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {/* // Tweaked error message display logic */}
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      {/* // Submit handler */}
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {/* // Tweaked error message display logic */}
      {formik.touched.password && formik.errors.password ? (
        <div>
          <i>{formik.errors.password}</i>
        </div>
      ) : null}
      <button type="submit">Login</button>
    </form>
  );
}
