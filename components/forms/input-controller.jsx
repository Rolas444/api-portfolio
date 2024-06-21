import { Controller } from "react-hook-form"

const InputControlled = ({ control, errors, name, label, css }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                return (
                    <div className={css}>
                        <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={name}>
                            {label}
                        </label>
                        <input {...field} className={`${errors?.[name] && 'border-red-500 '} appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane`}/>
                            <p className="text-red-500 text-xs italic">{errors?.[name]?.message}</p>
                    </div>
                )
            }}
        />
    )
}

export default InputControlled