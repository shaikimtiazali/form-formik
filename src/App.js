import { useFormik } from 'formik';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Name Required"
      } if (!values.email) {
        errors.email = "Email Required"
      } if (!values.password) {
        errors.password = "password Required"
      }
      return errors;
    }
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
