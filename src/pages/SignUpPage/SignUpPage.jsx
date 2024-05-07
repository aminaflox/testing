import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./SignUpPage.module.scss";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div>
      <Formik>
        <Form className={styles.form}>
          <h3>Sign Up</h3>
          <Field
            type="text"
            classname={styles.signup__field}
            placeholder="Username"
          />

          <Field
            type="email"
            classname={styles.signup__field}
            placeholder="Email"
          />
          <Field
            type="password"
            classname={styles.signup__field}
            placeholder="Password"
          />
          <p>Already a member?</p>
          <Link to="/login">Log In</Link>

          <button>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpPage;
