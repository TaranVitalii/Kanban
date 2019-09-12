import React from "react";
import { Link } from "react-router-dom";
import { signIn } from "../../services/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schemaUsernamePasword } from "../../utils/validator";
import { saveState } from "../../utils/localStorage";
import { Redirect } from "react-router-dom";

import "./index.css";

class Auth extends React.Component {
  state = { loading: false };

  render() {
    if (this.state.loading) return <Redirect to="/table" />;
    return (
      <div>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={schemaUsernamePasword}
          onSubmit={values => {
            signIn(values)
              .then(token => {
                this.setState({ loading: true });
                saveState(token.data.token);
              })
              .catch(err => console.log(err.response.data));
          }}
        >
          {({ isSubmitting }) => (
            <Form className="formAuth">
              <div className="inputStyle">
                <label htmlFor="username">User name</label>
                <Field
                  type={"text"}
                  name={"username"}
                  component={"input"}
                  placeholder={"Username"}
                />
                <ErrorMessage
                  className="errorMessage"
                  name="username"
                  component="p"
                />
              </div>
              <div className="inputStyle">
                <label htmlFor="password">Password</label>
                <Field
                  type={"password"}
                  name={"password"}
                  component={"input"}
                  placeholder={"Password"}
                />
                <ErrorMessage
                  className="errorMessage"
                  name="password"
                  component="p"
                />
              </div>
              <p className="message">
                Not registered?
                <Link to="/registry" className="registration">
                  Registration
                </Link>
              </p>
              <button
                className="authButton"
                type="submit"
                disabled={isSubmitting}
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Auth;
