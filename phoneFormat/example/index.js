import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import phoneFormat from 'services/phoneFormat'

const PhoneFormatExample = () => {
  const [value, setValue] = useState('')
  const handleChange = event => {
    setValue(event.target.value)
  }

  const phoneConfig = {
    domCodes: ['02', '03', '07', '08'],
    intlCodes: ['612', '613', '617', '618'],
    falseNumbers: ['0400000000', '2000000000', '1234567891'],
    domPattern: ['2', '4', '4'],
    intlPattern: ['3', '4', '4'],
    mobilePattern: ['4', '3', '3'],
    mobileCode: ['04'],
    intlMobileCode: ['614'],
    intlMobilePattern: ['3', '2', '3', '3'],
  }

  return (
    <form>
      <TextField label="Phone" value={phoneFormat(value, phoneConfig)} onChange={handleChange} />
    </form>
  )
}

export default PhoneFormatExample
