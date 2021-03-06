import React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps
} from '@material-ui/core/TextField';
import { FieldProps, getIn } from 'formik';

import MaskedTextInput from '../MaskedTextInput';

export interface TextFieldProps
  extends FieldProps,
    Omit<MuiTextFieldProps, 'name' | 'value' | 'error'> {}

function fieldToTextField({
  disabled,
  field: { onBlur: fieldOnBlur, ...field },
  form: { isSubmitting, touched, errors },
  onBlur,
  helperText,
  mask,
  ...props
}: TextFieldProps & { mask?: string }): MuiTextFieldProps {
  const fieldError = getIn(errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;

  return {
    variant: props.variant,
    error: showError,
    helperText: showError ? fieldError : helperText,
    disabled: disabled ?? isSubmitting,
    InputProps: mask
      ? {
          inputComponent: MaskedTextInput as any
        }
      : undefined,
    inputProps: {
      mask
    },
    onBlur:
      onBlur ??
      function (e) {
        fieldOnBlur(e ?? field.name);
      },
    ...field,
    ...props
  };
}

export default function TextField({ children, ...props }: TextFieldProps) {
  return <MuiTextField {...fieldToTextField(props)}>{children}</MuiTextField>;
}
