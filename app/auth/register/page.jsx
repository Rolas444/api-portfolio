'use client'
import { useForm } from "react-hook-form"

const RegisterPage=()=>{

    const {register, handleSubmit, formState : {errors}} = useForm()

    const onSubmit = handleSubmit( async (data)=>{
        // console.log(data)
        const res= await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res)
        const resJSON = await res.json()
        console.log(resJSON)
    })

    return (<>
            <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
                
                <form onSubmit={onSubmit}  className="w-1/4">
                    <h1 className="text-slate-200 font-bold text-4xl mb-4"> Registro</h1>
                    <label className="text-slate-500 mb-2 block text-xs">nombre de usuario: </label>
                    <input type="text" 
                    {...register("username",{required: {
                        value:true,
                        message: "Este campo es requerido"
                    }})}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                     />
                     {errors.username && (<span className="text-red-500 text-sm">{errors.username.message}</span>)}
                     <label className="text-slate-500 mb-2 block text-xs">email: </label>
                    <input type="email" 
                    {...register("email",{required: {
                        value:true,
                        message: "Este campo es requerido"
                    }})}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    />
                    {errors.email && (<span className="text-red-500 text-sm">{errors.email.message}</span>)}
                    <label className="text-slate-500 mb-2 block text-xs">contraseña: </label>
                    <input type="password"  
                    {...register("password",{required: {
                        value:true,
                        message: "Este campo es requerido"
                    }})}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    />
                    {errors.password && (<span className="text-red-500 text-sm">{errors.password.message}</span>)}
                    <label className="text-slate-500 mb-2 block text-xs">confirma contraseña: </label>
                    <input type="password" 
                    {...register("confirmPassword",{required: {
                        value:true,
                        message: "Este campo es requerido"
                    }})} 
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    />
                    {errors.confirmPassword && (<span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>)}
                    <button type="submit" className="w-full  bg-blue-500 text-white p-3 rounded-lg mt-2">
                        Registrar
                    </button>
                </form>
            </div>
        </>)

}

export default RegisterPage