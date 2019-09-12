import React from "react";
import { Link } from "react-router-dom";
import { registr } from "../../services/registr";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schemaUsernamePaswordandRepeat } from "../../utils/validator";
import { Redirect } from "react-router-dom";
import "./index.css";

class Registry extends React.Component {
  state = { loading: false };
  render() {
    if (this.state.loading) return <Redirect to="/login" />;
    return (
      <div>
        <Formik
          initialValues={{ username: "", password: "", passwordRepeat: "" }}
          validationSchema={schemaUsernamePaswordandRepeat}
          onSubmit={values =>
            registr(values).then(res => {
              if (res.status === 200) this.setState({ loading: true });
            })
          }
        >
          {({ isSubmitting }) => (
            <Form className="formRegistr">
              <div className="inputStyle">
                <label htmlFor="username">User name</label>
                <Field
                  type="text"
                  name="username"
                  component="input"
                  placeholder="Username"
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
              <div className="inputStyle">
                <label htmlFor="passwordRepeat">Repeat password</label>
                <Field
                  type="password"
                  name="passwordRepeat"
                  component="input"
                  placeholder="Repeat password"
                />
                <ErrorMessage
                  className="errorMessage"
                  name="passwordRepeat"
                  component="p"
                />
              </div>
              <Link to="/login" className="registration">
                Sign in
              </Link>
              <button
                className="registryButton"
                type="submit"
                disabled={isSubmitting}
              >
                Registry
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Registry;
