import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ContactFormDataType, submitContactForm } from "../../api/fns";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

type FormDataType = ContactFormDataType

const FormSection: React.FC = () => {
    const [formData, setFormData] = useState<FormDataType>({ firstName: "", lastName: "", email: "", message: "" })

    const { mutate, isPending } = useMutation({
        mutationFn: () => submitContactForm(formData),
        onSuccess: () => {
            toast.success("Message sent")
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            })
        },
        onError: err => {
            toast.error(err.message || "Something went wrong. Please try again")
        }
    })

    const handleFormChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleFormSubmit: React.FormEventHandler = e => {
        e.preventDefault()

        mutate()
    }

    return (
        <>
            <section className="bg-base-100 px-4 md:px-25 lg:px-50 xl:px-75 2xl:px-99 py-5 md:py-18">
                <form onSubmit={handleFormSubmit} className="w-full flex flex-col gap-6 md:gap-11">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="w-full flex flex-col gap-1.5">
                            <label className="fieldset-label text-sm md:text-lg text-secondary font-medium">First name</label>
                            <input
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleFormChange}
                                className="input w-full h-12 bg-neutral rounded-lg"
                                placeholder="First name"
                                maxLength={50}
                                required
                            />
                        </div>

                        <div className="w-full flex flex-col gap-1.5">
                            <label className="fieldset-label text-sm md:text-lg text-secondary font-medium">Last name</label>
                            <input
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleFormChange}
                                className="input w-full h-12 bg-neutral rounded-lg"
                                placeholder="Last name"
                                maxLength={50}
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-1.5">
                        <label className="fieldset-label text-sm md:text-lg text-secondary font-medium">Email</label>
                        <input
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleFormChange}
                            className="input w-full h-12 bg-neutral rounded-lg"
                            placeholder="you@company.com"
                            maxLength={50}
                            required
                        />
                    </div>

                    <div className="w-full flex flex-col gap-1.5">
                        <label className="fieldset-label text-sm md:text-lg text-secondary font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            className="textarea w-full h-43 bg-neutral rounded-lg"
                            placeholder="Type in a message"
                            maxLength={300}
                            required
                        />
                    </div>

                    <div className="flex flex-row justify-center">
                        <button
                            className={`btn btn-submit bg-primary text-secondary border border-primary w-38 sm:w-47 md:w-60 2xl:w-65 rounded-full text-[0.65rem] sm:text-sm md:text-xl font-medium py-6.5 px-2 shadow-none hover:scale-105 transition-all ease-in-out duration-500 hover:[&>*]:translate-x-2`}
                            disabled={isPending}>
                            Leave a message
                            {
                                isPending
                                    ? <span className="loading loading-spinner text-primary"></span>
                                    : <IoIosArrowRoundForward className={`text-secondary size-8 transition-all ease-in-out duration-500`} />
                            }

                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default FormSection;