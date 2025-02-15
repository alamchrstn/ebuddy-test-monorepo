import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type FormTextFieldProps = {
  label: string;
} & Pick<
  TextFieldProps,
  | "id"
  | "name"
  | "type"
  | "placeholder"
  | "autoComplete"
  | "required"
  | "fullWidth"
  | "variant"
  | "autoFocus"
>;

export default function FormTextField({
  label,
  autoFocus = true,
  variant = "outlined",
  ...props
}: FormTextFieldProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{label}</FormLabel>
      <TextField autoFocus={autoFocus} variant={variant} {...props} />
    </FormControl>
  );
}
