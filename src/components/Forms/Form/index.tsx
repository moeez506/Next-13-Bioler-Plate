import { Formik } from "formik";
import * as React from "react";

const Form = ({
  children,
  initialValues,
  validationSchema,
  enableReinitialize,
  onSubmit,
}: Form) => {
  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema || null}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;
