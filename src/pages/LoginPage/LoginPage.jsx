import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div>
      <Formik>
        <Form className={styles.form}>
          <h3>Log In</h3>
          <Field
            type="text"
            classname={styles.signup__field}
            placeholder="Username"
          />
          <Field
            type="password"
            classname={styles.signup__field}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
