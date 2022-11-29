import { useField } from "formik"

export default function Input({label, ...props}) {

    const [field] = useField(props)

    return(
        <label>
            <div>{label}</div>
            <input {...field} {...props}/>
        </label>
    )
} 