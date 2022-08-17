import createFormElement from '../form/createFormElement'
import { CheckboxGroup, CheckboxGroupProps } from '../CheckboxGroup'

export const FormCheckboxGroup = createFormElement<
  CheckboxGroupProps,
  React.ChangeEvent<HTMLInputElement>
>(CheckboxGroup, (setValue, field) => (value) => {
  setValue(field, value)
})
