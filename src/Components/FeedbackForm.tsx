import React from 'react'
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
  Container,
  Paper,
  TextField,
  TextFieldProps,
  RadioGroupProps,
  MenuItem,
  Divider,
} from '@mui/material'

interface FormData {
  name: string
  email: string
  accurate: string
  expectation: string
  recommend: string
  experience: string
  satisfaction: string
  feature: string
  additional: string
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
    'expectation',
    'satisfaction',
    'additional',
    'name',
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
  return errors
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const Submit = async (values: FormData) => {
  await sleep(500) // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}

interface FeedbackProps extends InjectedFormProps<FormData> {}

const Feedback: React.FC<FeedbackProps> = (props) => {
  const { handleSubmit, pristine, submitting, valid } = props

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, margin: '20px auto' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" gutterBottom>
            FeedbackForm
          </Typography>
          <Divider />
          <div style={{ paddingLeft: '20px' }}>
            <Field
              style={{
                paddingRight: '20px',
                textAlign: 'center',
              }}
              name="name"
              component={renderTextField}
              label="Name"
              //   required
            />
            <Field
              style={{ paddingRight: '20px', justifyContent: 'center' }}
              name="email"
              component={renderTextField}
              label="E-mail"
              //   required
            />
          </div>
          <div>
            <Typography gutterBottom align="center">
              Did you find the results are accurate? *
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Field name="accurate" component={renderRadioGroup}>
                <FormControlLabel
                  value="Yes"
                  control={<Radio color="primary" />}
                  label="Yes"
                />
              </Field>
              <Field name="accurate" component={renderRadioGroup}>
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
              Did our app meet your exceptations? *
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
              Would you like to recommend it to others? *
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
              How is your experience using this app? *
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
              Rate your satisfaction using this app? *
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
              Which feature do you like the most? *
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Field
                name="feature"
                component={renderDropDown}
                select
                //style={{ alignItems: 'center' }}
                sx={{ width: '220px' }}
                required
              />
            </div>
          </div>

          {/* <div>
            <Typography
              gutterBottom
              align="center"
              style={{ paddingTop: '15px' }}
            >
              Additional Comments *
            </Typography>
            <Field
              name="additional"
              component={TextField}
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
            />
          </div> */}

          <div
            style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}
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
          </div>
        </form>
      </Paper>
    </Container>
  )
}

export default reduxForm<FormData>({
  form: 'feedbackform',
  validate: validateFields,
  onSubmit: Submit,
})(Feedback)
