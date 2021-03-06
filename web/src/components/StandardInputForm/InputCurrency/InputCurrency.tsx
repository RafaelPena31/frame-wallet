import React, { InputHTMLAttributes } from 'react'
import './InputCurrency.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type: string
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputCurrency: React.FC<Props> = ({ name, label, type, required, onchange }: Props) => {
  return (
    <div className='input-currency'>
      <label htmlFor={name}>{label}</label>
      <input type={type} onChange={onchange} id={name} name={name} step='0.01' required={required} />
    </div>
  )
}

export default InputCurrency
