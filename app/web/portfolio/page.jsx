'use client'

import { useForm } from "react-hook-form"
import InputControlled from '../../../components/forms/input-controller'

const PortfolioPage = () => {
    const { handleSubmit,
        watch,
        control,
        formState: { errors } } = useForm()

    const onSubmit = () => {
        console.log('submit')
    }

    return (
        <div className="w-full flex  p-5">
            <form className="w-full flex" onSubmit={handleSubmit()}>
                <div className="w-full flex flex-wrap md:flex-nowrap gap-2 ">
                    {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> */}
                        <InputControlled css='w-full' name='name' label='Titulo del proyecto' control={control} />
                    {/* </div> */}

                    <InputControlled css='w-full' name='description' label='Descripción' control={control} />
                </div>
            </form>
        </div>
    )
}

export default PortfolioPage