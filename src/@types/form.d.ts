type YupSchema = any;

interface Form {
  children: any;
  initialValues: { [key: string]: any };
  validationSchema?: YupSchema;
  enableReinitialize?: boolean;
  onSubmit: (values: any, actions: any) => void;
}

interface FormField {
  type?: string;
  name: string;
  placeholder?: string;
  label?: string;
  className?: string;
}

interface TextArea extends Omit<FormField, "type"> {
  numberOfRow?: number;
}

interface SearchField {
  placeholder?: string;
  label?: string;
  className?: string;
  showIcon?: boolean;
}

interface FormError {
  visible: boolean;
  error: string;
}

interface Checkbox {
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  checked?: boolean;
  name?: string;
  inputClasses?: string;
  boxClasses?: string;
}

interface Option {
  children: any;
  onSelect: (x: any) => void;
  value: any;
}

interface FormSelect {
  options: { title: string; value: string | number | boolean }[];
  name: string;
}
