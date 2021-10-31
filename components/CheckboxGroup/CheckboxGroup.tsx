import { cleanChildren } from '@dwarvesf/react-utils'
import { useId } from 'hooks/useId'
import React, { useState, useRef, cloneElement } from 'react'
import { CheckboxProps } from '../Checkbox'

export interface CheckboxGroupProps {
  id?: string
  name?: string
  defaultValue?: Array<CheckboxProps['value']>
  value?: Array<CheckboxProps['value']>
  onChange?: (value: Array<CheckboxProps['value']>) => void
  children: React.ReactNode
  className?: string
  invalid?: boolean
}

export const CheckboxGroup = ({
  onChange,
  name,
  defaultValue,
  value: valueProp,
  children,
  invalid,
  ...rest
}: CheckboxGroupProps) => {
  const [values, setValues] = useState(defaultValue || [])
  const { current: isControlled } = useRef(valueProp != null)
  const internalValues = (isControlled ? valueProp : values) || []

  const internalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target
    let newValues
    if (checked) {
      newValues = [...internalValues, value]
    } else {
      newValues = internalValues.filter((val) => val !== value)
    }
    if (!isControlled) {
      setValues(newValues)
    }
    if (onChange) {
      onChange(newValues)
    }
  }

  // If no name is passed, we'll generate a random, unique name
  const fallbackName = `checkbox-${useId()}`
  const internalName = name || fallbackName
  const validChildren = cleanChildren(children)

  const clones = validChildren.map((child, index) => {
    return cloneElement(child, {
      name: `${internalName}-${index}`,
      onChange: internalChange,
      checked: internalValues.includes(child.props.value),
    })
  })

  return (
    <div {...rest} role="group">
      {clones}
    </div>
  )
}
