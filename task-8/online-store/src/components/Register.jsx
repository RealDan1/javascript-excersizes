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
    // add validation for if password is empty:
    if (!values.password) {
      passwordErrorMessage += 'Password is required.\n';
    }

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

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'password must match confirm password';
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
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
      <div className="register-container">
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
      </div>
      {/* // Tweaked error message display logic */}
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>
          <i>{formik.errors.firstName}</i>
        </div>
      ) : null}
      {/* input for lastName */}
      <div className="register-container">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
      </div>
      {/* // Tweaked error message display logic */}
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>
          <i>{formik.errors.lastName}</i>
        </div>
      ) : null}
      {/* input for email */}
      <div className="register-container">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      {/* // Tweaked error message display logic */}
      {formik.touched.email && formik.errors.email ? (
        <div>
          <i>{formik.errors.email}</i>
        </div>
      ) : null}
      {/* // Submit handler */}
      <div className="register-container">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div>
          <i>{formik.errors.password}</i>
        </div>
      ) : null}
      <div className="register-container">
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
      </div>

      {/* // Tweaked error message display logic */}
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div>
          <i>{formik.errors.confirmPassword}</i>
        </div>
      ) : null}
      <button type="submit">Login</button>
    </form>
  );
}
