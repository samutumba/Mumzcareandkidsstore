export const TextInput: React.FC<{
    label: string,
    name?: string,
    value?: string | number,
    onChange?: any,
    defaultValue?: any,
    onBlur?: any,
    ref?: any,
    register?: { onChange: any, onBlur: any, name: any, ref: any },
    type: string,
    placeholder?: string,
    disabled?: boolean
}> = ({label, name, placeholder,register, defaultValue, value, onBlur, onChange, ref, type,disabled}) => {
   
    if (register) {
       
   }
    
    return (<>
    <label 
        htmlFor="input" 
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {label}
    </label>
    <input 
            type={type} 
        name={register ? register.name : name }
        onBlur={register ? register.onBlur : onBlur}
        onChange={register ? register.onChange : onChange}
        value={value && value}
        ref={register && register.ref}
        defaultValue={defaultValue && defaultValue}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose focus:border-rose block w-full p-2.5 " 
        placeholder={placeholder || ""}
            step="any"
            disabled={disabled}
    />
    </>)
    }

export const ErrorText: React.FC<{message?: string}> = ({message}) => {
    return (<div className="capitalize text-sm text-error">
        {message}
    </div>)
} 