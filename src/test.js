<Formik
initialValues={{
  email: "",
  password: ""
}}
validationSchema={SignupSchema}
onSubmit={values => {
  console.log(values);
  OnSubmittingSignIn(values);
}}
>
{({ errors, touched }) => (
  <Form role="form">
    <FormGroup
      className={classnames({
        focused: emailFocus
      })}
    >
      <InputGroup className="input-group-alternative">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="ni ni-email-83" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          tag={Field}
          name="email"
          placeholder="Email"
          type="text"
          onFocus={emailFocus}
          onBlur={emailFocus}
        />
      </InputGroup>
    </FormGroup>

    {errors.email && touched.email ? (
      <small style={{ color: "red" }}> {errors.mail}</small>
    ) : null}
    <FormGroup
      className={classnames({
        focused: passwordFocus
      })}
    >
      <InputGroup className="input-group-alternative">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="ni ni-lock-circle-open" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          tag={Field}
          name="password"
          placeholder="Password"
          type="password"
          autoComplete="off"
          onFocus={passwordFocus}
          onBlur={passwordFocus}
        />
      </InputGroup>
    </FormGroup>

    {errors.password && touched.password ? (
      <small style={{ color: "red" }}> {errors.password}</small>
    ) : null}
    {SignInState === false ? (
      <small style={{ color: "red" }}>
        Email Or Password are not correct !!
      </small>
    ) : null}
    <div className="custom-control custom-control-alternative custom-checkbox">
      <input
        className="custom-control-input"
        id=" customCheckLogin"
        type="checkbox"
      />
      <label
        className="custom-control-label"
        htmlFor=" customCheckLogin"
      >
        <span className="text-muted">Remember me</span>
      </label>
    </div>

    <div className="text-center">
      <Button className="my-4" color="primary" type="submit">
        Sign in
      </Button>
    </div>
  </Form>
)}
</Formik>