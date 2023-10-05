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
  Divider,
  FormControlLabel,
  FormControlLabelProps,
  RadioGroup,
  RadioGroupProps,
  Snackbar,
  TextField,
  TextFieldProps,
  Tooltip,
  Typography,
} from '@mui/material'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import './Contact.styl'
import { useNavigate } from 'react-router'
import HomeIcon from '@mui/icons-material/Home'

interface FormData {
  firstName: string
  lastName: string
  email: string
}

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
    reset()
  }
  const navigate = useNavigate()

  const handleNavigate = (): void => {
    navigate('/')
  }

  return (
    <div className="form-container">
      <Paper elevation={3} className="paper" sx={{ width: '300px' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" gutterBottom>
            <Tooltip title="Home">
              <HomeIcon
                style={{ float: 'left', fontSize: '40px', cursor: 'pointer' }}
                className="home"
                onClick={handleNavigate}
              />
            </Tooltip>

            <b className="iconh">Contact </b>
          </Typography>
          <Divider />
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
              label="Last Name"
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
          <div className="buttons">
            <Button
              sx={{ marginRight: '12px' }}
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
    </div>
  )
}

export const MobileView = reduxForm<FormData>({
  form: 'MaterialUiForm',
  validate: validateFields,
  onSubmit: Submit,
})(MaterialUiFormComponent)
