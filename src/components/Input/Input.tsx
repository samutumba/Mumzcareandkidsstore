import { UseFormRegister, FieldError, FieldValues, UseFormRegisterReturn } from "react-hook-form"
import Select, { ActionMeta, SingleValue } from "react-select"
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
//import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export const BasicInput = ({ name, value, callback, error, type, onBlur }: {
  type?: 'password' | 'text' | 'number'| 'email',
  name: string,
  value: string,
  onBlur?: React.FocusEventHandler<HTMLInputElement>,
  callback: (arg0: string) => void
  error?: FieldError | undefined | string,
}) => {
  return (<>
    <label>{name}</label>
    <input type={type ? type : "text"}
      onBlur={onBlur}
      className={error ? 'input-error rounded-xl' : 'input-okay rounded-xl'}
      value={value}
      onChange={(e) => callback(e.currentTarget.value || "")}
    />
    <ErrorMessage data={error} />
  </>)
}

export const TextAreaInput = ({ name, value, callback, error, defaultValue, onBlur }: {
  name: string,
  value?: string,
  defaultValue?: string,
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>,
  callback: (arg0: string) => void
  error?: FieldError | undefined | string,
}) => {
  return (<>
    <label>{name}</label>
    <textarea
      rows={4}
      className={error ? 'input-error rounded-xl' : 'input-okay rounded-xl'}
      value={value}
      onBlur={onBlur}
      defaultValue={defaultValue}
      onChange={(e) => callback(e.currentTarget.value || "")}
    />
    <ErrorMessage data={error} />
  </>)
}

export const MobileInput = ({ name, value, error, callback }: {
  name: string,
  value: string,
  error?: FieldError | undefined | string,
  callback: (arg0: string) => void
}) => {
  return(<>
    <label>{name}</label>
    <PhoneInput
      international
      containerClass={error ? 'input-error' : 'input-okay'}
      defaultCountry="UG"
      value={value}
      inputStyle={{
        border: '0px',
        ring: 'none'
      }}
      onChange={(p) => p && callback(p.toString())}
    />
    <ErrorMessage data={error} />
  </>)
}
interface opt {
 label: string,
 value: string
}

export const SelectInput = ({ name, options, defaultValue, error, callback }: {
 name: string,
 defaultValue?: opt,
 options: opt[],
 error?: FieldError | undefined | string,
 callback: (arg0: string) => void
}) => {
 return (<>
  <label>{name}</label>
  <Select
     options={[{ label: `Select a ${name}`, value: '' },...options]}
    defaultValue={defaultValue || { label: `Select a ${name}`, value: '' }}
   onChange={(newValue: SingleValue<opt>, actionMeta: ActionMeta<opt>) => {
    newValue?.value &&
    callback(newValue?.value)
   }}
   theme={(theme) => ({
    ...theme,
    borderRadius: 10,
    colors: {
     ...theme.colors,
      primary25: '#c6e6e6',
      primary: '#d80945',
    },
   })}
     styles={{
       control: base => ({
         ...base,
         fontFamily: "Quicksand"
         
       }),
       menu: base => ({
         ...base,
         fontFamily: "Quicksand"
         
       })
     }}
  />
  <ErrorMessage data={error} />
 </>)
}


export const DateInput = ({ name, value, error, callback }: {
 name: string,
 value: string | Date,
 error?: FieldError | undefined | string,
 callback: (arg0: Date) => void
}) => {
 return (<>
  <label>{name}</label>
  <LocalizationProvider dateAdapter={AdapterMoment}>
   <DatePicker
    label={name}
    value={value}
    onChange={(newValue) => {
     newValue &&
      typeof newValue !== 'string' &&
     callback(newValue);
    }}
    renderInput={({ inputRef, inputProps, InputProps }) =>
     <>
      <input className={error ? 'input-error' : 'input-okay'} ref={inputRef} {...inputProps} />
      {InputProps?.endAdornment}
     </>
     }
   />
  </LocalizationProvider>
  <ErrorMessage data={error} />
  </>)
}


export const ErrorMessage = ({ data }: { data?: FieldError | undefined | string }) => {
 if (data) {
  if (typeof data !== "string") {
   return <span className="error capitalize">{data.message}</span>
  } else {
   return <span className="error">{data}</span>
  }
  
 }
 return <></>
}



