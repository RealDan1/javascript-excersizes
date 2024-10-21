import { useFormik } from 'formik';

export default function Login() {
  // Pass the initial form value and a submit function to the
  // useFormik() hook, which returns an object of form state and
  // helper methods
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      // Submit handling code goes here
    },
  });
  // Rendering of the form
  return (
    // Note the use of the formik object below
    <form onSubmit={formik.handleSubmit}>
      {' '}
      {/* // Submit handler */}
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
      <button type="submit">Submit</button>
    </form>
  );
}
