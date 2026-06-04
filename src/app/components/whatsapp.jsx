import React from 'react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

const whatsapp = () => {
    const phoneNumber = "918951639116";
    return (
        <div className='fixed right-5 bottom-5 flex flex-col gap-3 z-50'>
            <a
                href={`tel:+${phoneNumber}`}
                className='bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition'
            >
                <FaPhoneAlt size={24} />
            </a>

            <a
                href={`https://wa.me/${phoneNumber}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition'
            >
                <FaWhatsapp size={24} />
            </a>



        </div>
    )
}

export default whatsapp
