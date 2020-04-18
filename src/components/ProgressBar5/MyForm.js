import React from "react";
import { Field as FinalField } from "react-final-form";
import RadioButton from "./Radio";
import { FormGroup } from "reactstrap";

const MyForm = () => (
  <div>
    <FinalField name="firstName" type="radio" value="-8">
      {({ input }) => (
        <FormGroup>
          <RadioButton
            type="radio"
            backgroundColorChecked="#94657e"
            backgroundColor="#fff9fc"
            borderColor="#94657e"
            height="2.375rem"
            width="2.375rem"
            {...input}
          />
        </FormGroup>
      )}
    </FinalField>
    <FinalField name="firstName" type="radio" value="-2">
      {({ input }) => (
        <FormGroup>
          <RadioButton
            type="radio"
            backgroundColorChecked="#94657e"
            backgroundColor="#fff9fc"
            borderColor="#94657e"
            height="2.0625rem"
            width="2.0625rem"
            {...input}
          />
        </FormGroup>
      )}
    </FinalField>
    <FinalField
      name="firstName"
      component="input"
      type="radio"
      placeholder="First Name"
      value="1"
    />
    <FinalField
      name="firstName"
      component="input"
      type="radio"
      placeholder="First Name"
      value="4"
    />
    <FinalField
      name="lastName"
      component="input"
      type="text"
      placeholder="Last Name"
    />
  </div>
);

export default MyForm;
