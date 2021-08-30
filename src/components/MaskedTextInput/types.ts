export interface IMaskedTextInput {
  onChange: (event: { target: { name: string; value: string } }) => void;
  inputRef: (ref: HTMLInputElement | null) => void;
  mask: string;
  name: string;
}
