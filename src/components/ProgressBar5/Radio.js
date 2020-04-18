import React from "react";
import { Input, InputGroup } from "reactstrap";

const RadioButton = ({
  value,
  name,
  backgroundColor,
  backgroundColorChecked,
  borderColor,
  checked,
  height,
  onChange,
  width,
  meta,
  ...otherProps
}) => (
  <InputGroup className="Test__questions-group">
    <Input
      name={name}
      value={value}
      onChange={onChange}
      checked={!!checked}
      style={{
        backgroundColor: checked
          ? `${backgroundColorChecked}`
          : `${backgroundColor}`,
        borderColor: `${borderColor}`,
        height: `${height}`,
        width: `${width}`
      }}
      className={
        checked
          ? "Test__questions-radio Test__questions-radio:checked::before"
          : "Test__questions-radio"
      }
      {...otherProps}
    />
  </InputGroup>
);

export default RadioButton;
