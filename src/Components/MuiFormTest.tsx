import {
  Field,
  reduxForm,
  InjectedFormProps,
  WrappedFieldProps,
} from 'redux-form'
import { TextField, TextFieldProps } from '@mui/material'

type ComponentProps = InjectedFormProps<{}, {}>

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const Submit = async (values: object) => {
  await sleep(500) // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}

const renderTextField: React.FC<WrappedFieldProps & TextFieldProps> = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && error}
    helperText={error}
    margin="normal"
    variant="outlined"
    fullWidth
    {...input}
    {...custom}
  />
)

// interface RenderDropDownProps {
//   label: string
//   // input: any
//   // meta: {
//   //   touched: boolean
//   //   invalid: boolean
//   //   error: string
//   // }
// }

// const renderDropDown: React.FC<WrappedFieldProps & RenderDropDownProps> = (
//   props
// ) => {
//   let {
//     label,
//     input,
//     // meta: { touched, invalid, error },
//     ...custom
//   } = props
//   return (
//     <TextField
//       label={label}
//       // error={touched && invalid}
//       // helperText={touched && error}
//       {...input}
//       {...custom}
//     >
//       <MenuItem key={'Weather Report'} value={'Weather Report'}>
//         Weather Report
//       </MenuItem>
//       <MenuItem key={'UI'} value={'UI'}>
//         UI
//       </MenuItem>
//       <MenuItem key={'Search Option'} value={'Search Option'}>
//         Search Option
//       </MenuItem>
//     </TextField>
//   )
// }

const MaterialUiFormComponent: React.FC<ComponentProps> = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" component={renderTextField} label="First Name" />
    </form>
  )
}

export const MuiFormTest = reduxForm<{}>({
  form: 'MaterialUiForm', // a unique identifier for this form
  onSubmit: Submit,
})(MaterialUiFormComponent)
