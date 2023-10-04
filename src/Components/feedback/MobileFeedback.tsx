import React, { useState } from 'react'
import {
  Field,
  reduxForm,
  InjectedFormProps,
  WrappedFieldProps,
} from 'redux-form'
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Paper,
  TextField,
  TextFieldProps,
  RadioGroupProps,
  MenuItem,
  Divider,
  Snackbar,
  Alert,
  Tooltip,
} from '@mui/material'
import { useNavigate } from 'react-router'
import HomeIcon from '@mui/icons-material/Home'
import './Feedback.styl'

interface FormData {
  accurate: string
  recommend: string
  experience: string
  satisfaction: string
  additional: string
  firstname: string
  lastname: string
  email: string
  feature: string
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
    {...input}
    {...custom}
  />
)

const renderRadioGroup: React.FC<WrappedFieldProps & RadioGroupProps> = ({
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

interface RenderDropDownProps {
  label: string
  input: any
}

const renderDropDown: React.FC<WrappedFieldProps & RenderDropDownProps> = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    {...input}
    error={touched && invalid}
    helperText={touched && error}
    {...custom}
    placeholder={label}
  >
    <MenuItem key={'Weather Report'} value={'Weather Report'}>
      Weather Report
    </MenuItem>
    <MenuItem key={'UI'} value={'UI'}>
      UI
    </MenuItem>
    <MenuItem key={'Search Option'} value={'Search Option'}>
      Search Option
    </MenuItem>
  </TextField>
)

const validateFields = (values: FormData) => {
  const errors: Partial<FormData> = {}
  const requiredFields: Array<keyof FormData> = [
    'accurate',
    'recommend',
    'experience',
    'satisfaction',
    'additional',
    'firstname',
    'lastname',
    'email',
    'feature',
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
  if (values.firstname && /^[A-Z][a-z]?$/.test(values.firstname)) {
    errors.firstname = 'Invalid First Name'
  }
  if (values.lastname && /^[A-Z][a-zA-Z]?$/.test(values.lastname)) {
    errors.lastname = 'Invalid Last Name'
  }
  return errors
}

interface FeedbackProps extends InjectedFormProps<FormData> {}

const MobileFeedback: React.FC<FeedbackProps> = (props) => {
  const { pristine, submitting, valid, reset } = props
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
      {/* <Container className="mobilefeed"> */}
      <Paper elevation={3} className="paper">
        <form onSubmit={handleSubmit} className="form">
          <Typography variant="h4" align="center" gutterBottom>
            <Tooltip title="Home">
              <HomeIcon
                style={{ float: 'left', fontSize: '40px', cursor: 'pointer' }}
                // className="home"
                onClick={handleNavigate}
              />
            </Tooltip>
            <b>Feedback</b>
          </Typography>
          <Divider />

          <div className="leftpad">
            <center>
              <Field
                sx={{
                  paddingRight: '20px',
                  textAlign: 'center',
                }}
                name="firstname"
                component={renderTextField}
                label="First Name"
                maxLength="10"
                // required
              />
              <Field
                sx={{
                  paddingRight: '20px',
                  textAlign: 'center',
                }}
                name="lastname"
                component={renderTextField}
                label="Last Name"
                maxLength={10}
                // required
              />
              <Field
                sx={{ paddingRight: '20px', textAlign: 'center' }}
                name="email"
                component={renderTextField}
                label="E-mail"
                // required
              />
            </center>
          </div>

          <div>
            <Typography gutterBottom align="center">
              Did you find the results are accurate?
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Field name="accurate" component={renderRadioGroup} required>
                <FormControlLabel
                  value="Yes"
                  control={<Radio color="primary" />}
                  label="Yes"
                />
              </Field>
              <Field name="accurate" component={renderRadioGroup} required>
                <FormControlLabel
                  value="No"
                  control={<Radio color="primary" />}
                  label="No"
                />
              </Field>
            </div>
          </div>

          <div>
            <Typography gutterBottom align="center">
              Did our app meet your exceptations?
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Field name="expectation" component={renderRadioGroup}>
                <FormControlLabel
                  value="Yes"
                  control={<Radio color="primary" />}
                  label="Yes"
                />
              </Field>
              <Field name="expectation" component={renderRadioGroup}>
                <FormControlLabel
                  value="No"
                  control={<Radio color="primary" />}
                  label="No"
                />
              </Field>
            </div>
          </div>

          <div>
            <Typography gutterBottom align="center">
              Would you like to recommend it to others?
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Field name="recommend" component={renderRadioGroup}>
                <FormControlLabel
                  value="Yes"
                  control={<Radio color="primary" />}
                  label="Yes"
                />
              </Field>
              <Field name="recommend" component={renderRadioGroup}>
                <FormControlLabel
                  value="No"
                  control={<Radio color="primary" />}
                  label="No"
                />
              </Field>
            </div>
          </div>

          <div>
            <Typography gutterBottom align="center">
              How is your experience using this app?
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Field name="experience" component={renderRadioGroup}>
                <FormControlLabel
                  value="Bad"
                  control={<Radio color="primary" />}
                  label="Bad"
                />
              </Field>

              <Field name="experience" component={renderRadioGroup}>
                <FormControlLabel
                  value="Average"
                  control={<Radio color="primary" />}
                  label="Average"
                />
              </Field>
              <Field name="experience" component={renderRadioGroup}>
                <FormControlLabel
                  value="Good"
                  control={<Radio color="primary" />}
                  label="Good"
                />
              </Field>
              <Field name="experience" component={renderRadioGroup}>
                <FormControlLabel
                  value="Excellent"
                  control={<Radio color="primary" />}
                  label="Excellent"
                />
              </Field>
            </div>
          </div>

          <div>
            <Typography gutterBottom align="center">
              Rate your satisfaction using this app?
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Field name="satisfaction" component={renderRadioGroup}>
                <FormControlLabel
                  value="1"
                  control={<Radio color="primary" />}
                  label="1"
                />
              </Field>
              <Field name="satisfaction" component={renderRadioGroup}>
                <FormControlLabel
                  value="2"
                  control={<Radio color="primary" />}
                  label="2"
                />
              </Field>

              <Field name="satisfaction" component={renderRadioGroup}>
                <FormControlLabel
                  value="3"
                  control={<Radio color="primary" />}
                  label="3"
                />
              </Field>
              <Field name="satisfaction" component={renderRadioGroup}>
                <FormControlLabel
                  value="4"
                  control={<Radio color="primary" />}
                  label="4"
                />
              </Field>
              <Field name="satisfaction" component={renderRadioGroup}>
                <FormControlLabel
                  value="5"
                  control={<Radio color="primary" />}
                  label="5"
                />
              </Field>
            </div>
          </div>

          <div>
            <Typography gutterBottom align="center">
              Which feature do you like the most?
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Field
                name="feature"
                component={renderDropDown}
                label="--Select Feature--"
                select
                //style={{ alignItems: 'center' }}
                sx={{ width: '220px' }}
              />
            </div>
          </div>

          <div>
            <Typography
              gutterBottom
              align="center"
              style={{ paddingTop: '15px' }}
            >
              Additional Comments
            </Typography>
            <Field
              name="additional"
              component={renderTextField}
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
          </div>

          <div
            // style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}
            className="button"
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={pristine || submitting || !valid}
            >
              {submitting ? 'Submitting' : 'Submit'}
            </Button>
            &nbsp;&nbsp;
            <Button
              type="button"
              variant="contained"
              color="error"
              disabled={pristine || submitting || !valid}
              onClick={reset}
            >
              Reset
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
          // sx={{ width: '100%', marginBottom: 4 }}
          className="alert"
        >
          Feedback Form Submitted Successfully!!!
        </Alert>
      </Snackbar>
      {/* </Container> */}
    </div>
  )
}

export default reduxForm<FormData>({
  form: 'feedbackform',
  validate: validateFields,
})(MobileFeedback)
