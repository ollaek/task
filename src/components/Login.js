import React, { useEffect, useContext } from "react";
import { Formik, Form, Field } from "formik";
import history from "../history";
import { SignInService } from "../services/SignInService";
import { LoginContext } from "../contexts/LogInContext";

const Login = () => {
  const { authState, setLoggedInState } = useContext(LoginContext);
  const { isLoggedIn } = authState;

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/Home");
    }
  }, [isLoggedIn]);

  const OnSubmittingSignIn = async values => {
    try {
      const response = await SignInService(values);

      if (response.status === 200) {
        setLoggedInState();
      } else {
        alert(response);
      }
    } catch (ex) {
      console.log("hi" + ex);
    }
  };
  const RenderLoginForm = () => {
    return (
      <div className="container ui">
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={values => {
            console.log(values);
            OnSubmittingSignIn(values);
          }}
        >
          {() => (
            <Form role="form" className="ui form">
              <div className="field">
                <label>Email</label>
                <Field
                  as="input"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="field">
                <label>password</label>
                <Field
                  tag="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <button className="ui button" type="submit">
                LogIn
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  return <div>{RenderLoginForm()}</div>;
};

export default Login;
