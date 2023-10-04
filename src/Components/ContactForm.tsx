// // import { SubmissionError } from 'redux-form'
// import {
//   Field,
//   reduxForm,
//   InjectedFormProps,
//   WrappedFieldProps,
// } from 'redux-form'
// import {
//   Alert,
//   Button,
//   Container,
//   FormControlLabel,
//   FormControlLabelProps,
//   Radio,
//   RadioGroup,
//   RadioGroupProps,
//   Snackbar,
//   TextField,
//   TextFieldProps,
// } from '@mui/material'
// import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
// import Paper from '@mui/material/Paper'
// import './Contact.styl'
// import iconlogo from './iconlogo.png'
// import { useState } from 'react'

// type ComponentProps = InjectedFormProps<{}, {}>

// const renderTextField: React.FC<WrappedFieldProps & TextFieldProps> = ({
//   input,
//   label,
//   meta: { touched, error },
//   ...custom
// }) => (
//   <TextField
//     label={label}
//     error={touched && error}
//     helperText={error}
//     margin="normal"
//     variant="outlined"
//     fullWidth
//     {...input}
//     {...custom}
//   />
// )
// const validateFields = (values: string) => {
//   const errors: string = {}

//   const requiredFields = ['firstName', 'lastName', 'email']

//   requiredFields.forEach((field) => {
//     if (!values[field]) {
//       errors[field] = 'Required'
//     }
//   })
//   if (
//     values.email &&
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address'
//   }

//   return errors
// }
// // if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
// //   // eslint-disable-next-line no-throw-literal
// //   throw { email: 'Email already Exists' }
// // }

// // const validateFields = (values: { [x: string]: unknown; email: string }) => {
// //   const errors = {}
// //   const requiredFields = ['firstName', 'lastName', 'email']
// //   requiredFields.forEach((field) => {
// //     if (!values[field]) {
// //       errors[field] = 'Required'
// //     }
// //   })
// //   if (
// //     values.email &&
// //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
// //   ) {
// //     errors.email = 'Invalid email address'
// //   }
// //   return errors
// // }
// const renderCheckbox: React.FC<
//   WrappedFieldProps & CheckboxProps & FormControlLabelProps
// > = ({ input, label }) => (
//   <FormControlLabel
//     control={
//       <Checkbox
//         checked={input.value ? true : false}
//         onChange={input.onChange}
//         color="primary"
//       />
//     }
//     label={label}
//   />
// )
// const renderRadioGroup: React.FC<WrappedFieldProps & RadioGroupProps> = ({
//   input,
//   ...rest
// }) => (
//   <RadioGroup
//     {...input}
//     {...rest}
//     value={input.value}
//     onChange={(event, value) => input.onChange(value)}
//   />
// )
// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// const Submit = async (values: object) => {
//   await sleep(500) // simulate server latency

//   window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
// }

// // eslint-disable-next-line react-hooks/rules-of-hooks
// // const [checked, setChecked] = React.useState(true)

// // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //   setChecked(event.target.checked)
// // }

// const MaterialUiFormComponent: React.FC<ComponentProps> = (props) => {
//   const { pristine, reset, valid, submitting } = props

//   const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false)
//   const handleSnackbarClose = (): void => {
//     setSnackbarOpen(false)
//   }
//   const handleSnackbarOpen = (): void => {
//     setSnackbarOpen(true)
//   }

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault()
//     handleSnackbarOpen()
//   }

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={1}>
//         <form onSubmit={handleSubmit}>
//           {/* <div className="logo"> */}
//           {/* <img
//               src={iconlogo}
//               alt="logo"
//               style={{ cursor: 'pointer', paddingRight: '3px' }}
//               // onClick={() => {
//               //   setSelectedIndex(1)
//               //   navigate('/postinput')
//               // }}
//               height={40}
//             /> */}
//           {/* </div> */}
//           <div className="header">
//             <h2>
//               <img
//                 src={iconlogo}
//                 alt="logo"
//                 style={{ cursor: 'pointer', paddingRight: '3px' }}
//                 // onClick={() => {
//                 //   setSelectedIndex(1)
//                 //   navigate('/postinput')
//                 // }}
//                 height={20}
//               />
//               Contact
//             </h2>
//           </div>

//           <div className="input">
//             <Field
//               name="firstName"
//               component={renderTextField}
//               label="First Name"
//             />
//           </div>
//           <div className="input">
//             <Field
//               name="lastName"
//               component={renderTextField}
//               label="last Name"
//             />
//           </div>
//           <div className="rediobutton">
//             <Field name="sex" component={renderRadioGroup}>
//               {/* <FormControlLabel
//                 value="male"
//                 control={<Radio color="primary" />}
//                 label="Male"
//               />
//               <FormControlLabel
//                 value="female"
//                 control={<Radio color="primary" />}
//                 label="Female"
//               /> */}
//               {/* <div> */}
//               Gender
//               <label>
//                 <Field name="sex" component="input" type="radio" value="male" />{' '}
//                 Male
//               </label>
//               <label>
//                 <Field
//                   name="sex"
//                   component="input"
//                   type="radio"
//                   value="female"
//                 />{' '}
//                 Female
//               </label>
//             </Field>
//           </div>

//           {/* <div className="radio">
//             <label>Gender</label>
//             <div>
//               <label>
//                 <Field name="sex" component="input" type="radio" value="male" />{' '}
//                 Male
//               </label>
//               <label>
//                 <Field
//                   name="sex"
//                   component="input"
//                   type="radio"
//                   value="female"
//                 />{' '}
//                 Female
//               </label>
//             </div>
//           </div> */}
//           <div className="input">
//             <Field name="email" component={renderTextField} label="Email" />
//           </div>
//           <div className="checkbox">
//             <Field
//               name="employed"
//               component={renderCheckbox}
//               label="Contact By Email"
//             />
//           </div>
//           <div className="button">
//             <Button
//               type="submit"
//               variant="outlined"
//               color="primary"
//               disabled={pristine || submitting || !valid}
//             >
//               Submit
//             </Button>
//             <Button
//               type="button"
//               variant="outlined"
//               color="primary"
//               disabled={pristine || submitting}
//               onClick={reset}
//             >
//               Clear Values
//             </Button>
//           </div>
//           {/* <Checkbox
//           checked={checked}
//           onChange={handleChange}
//           inputProps={{ 'aria-label': 'controlled' }}
//         /> */}
//         </form>
//       </Paper>
//       <Snackbar
//         autoHideDuration={3000}
//         open={snackbarOpen}
//         onClose={handleSnackbarClose}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity="success"
//           sx={{ width: '100%', marginBottom: 4 }}
//         >
//           Contact Form Submitted Successfully!!!
//         </Alert>
//       </Snackbar>
//     </Container>
//   )
// }

// export const ContactForm = reduxForm<{}>({
//   form: 'MaterialUiForm',
//   validate: validateFields, // a unique identifier for this form
//   onSubmit: Submit,
// })(MaterialUiFormComponent)

import React, { FC, useState } from 'react'
import {
  Field,
  reduxForm,
  InjectedFormProps,
  WrappedFieldProps,
} from 'redux-form'
import {
  Alert,
  Button,
  Container,
  FormControlLabel,
  FormControlLabelProps,
  RadioGroup,
  RadioGroupProps,
  Snackbar,
  TextField,
  TextFieldProps,
} from '@mui/material'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import './Contact.styl'
import iconlogo from './iconlogo.png'

interface FormData {
  firstName: string
  lastName: string
  //   sex: boolean
  email: string
  //   employed: boolean
}
// interface IObjectKeys {
//   [firstName: string]: string | number | undefined
// }

type ComponentProps = InjectedFormProps<FormData, {}>

const validateFields = (values: FormData) => {
  const errors: Partial<FormData> = {}

  const requiredFields: Array<keyof FormData> = [
    'firstName',
    'lastName',
    'email',
  ]

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }

  return errors
}
// interface ContactForm extends InjectedFormProps<FormData> {}
const renderTextField: FC<WrappedFieldProps & TextFieldProps> = ({
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

// const renderTextField = (props) => {
//   const {
//     label,
//     input,
//     meta: { touched, invalid, error },
//     custom,
//   } = props
//   console.log(props, 'TextfieldProps>>>>>>>>>')
//   return (
//     <TextField
//       label={label}
//       error={touched && invalid}
//       helperText={touched && error}
//       {...input}
//       {...custom}
//       placeholder={label}
//     />
//   )
// }

const renderCheckbox: FC<
  WrappedFieldProps & CheckboxProps & FormControlLabelProps
> = ({ input, label }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={input.value ? true : false}
        onChange={input.onChange}
        color="primary"
      />
    }
    label={label}
  />
)

const renderRadioGroup: FC<WrappedFieldProps & RadioGroupProps> = ({
  input,
  ...rest
}) => (
  <RadioGroup
    {...input}
    {...rest}
    value={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
)

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const Submit = async (values: FormData) => {
  await sleep(500) // simulate server latency

  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}

const MaterialUiFormComponent: FC<ComponentProps> = (props) => {
  const { pristine, reset, valid, submitting } = props

  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false)
  const handleSnackbarClose = (): void => {
    setSnackbarOpen(false)
  }
  const handleSnackbarOpen = (): void => {
    setSnackbarOpen(true)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    handleSnackbarOpen()
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={1}>
        <form onSubmit={handleSubmit}>
          <div className="header">
            <h2>
              <img
                src={iconlogo}
                alt="logo"
                style={{ cursor: 'pointer', paddingRight: '3px' }}
                height={20}
              />
              Contact
            </h2>
          </div>

          <div className="input">
            <Field
              name="firstName"
              component={renderTextField}
              label="First Name"
            />
          </div>
          <div className="input">
            <Field
              name="lastName"
              component={renderTextField}
              label="last Name"
            />
          </div>
          <div className="rediobutton">
            <Field name="sex" component={renderRadioGroup}>
              Gender
              <label>
                <Field name="sex" component="input" type="radio" value="male" />{' '}
                Male
              </label>
              <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="female"
                />{' '}
                Female
              </label>
            </Field>
          </div>

          <div className="input">
            <Field name="email" component={renderTextField} label="Email" />
          </div>
          <div className="checkbox">
            <Field
              name="employed"
              component={renderCheckbox}
              label="Contact By Email"
            />
          </div>
          <div className="button">
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              disabled={pristine || submitting || !valid}
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="primary"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </Button>
          </div>
        </form>
      </Paper>
      <Snackbar
        autoHideDuration={3000}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: '100%', marginBottom: 4 }}
        >
          Contact Form Submitted Successfully!!!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export const ContactForm = reduxForm<FormData>({
  form: 'MaterialUiForm',
  validate: validateFields,
  onSubmit: Submit,
})(MaterialUiFormComponent)
