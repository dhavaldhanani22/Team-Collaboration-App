import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faCalendar, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CardsItem = ({id, title, imagePath, dates, price, duration, online}) => {
  return (
        <div className='h-96 w-96 border-2 border-gray-400 bg-white border-opacity-60 rounded-lg overflow-hidden m-4  hover:scale-110 hover:shadow-2xl hover:border-white transition duration-200 ease-linear hover:overflow-y-hidden'>
            <Link to={`/courses/${id}`}>
            <img src={imagePath ? `images${imagePath}` : `images/courses/notfound.png`} alt={title} className='w-fit object-cover object-center' />
            <div className='p-2'>
                <h1 className='text-xl font-semibold mb-3'>{title}</h1>
            </div>
            <div className='text-gray-700'>
                <div className='flex flex-row justify-between text-sm px-8 py-2'>
                    <div className='bg-indigo-600 text-white rounded-lg font-semibold p-2'><FontAwesomeIcon icon={faCoins} /> Early Bird Price {price.early_bird}€</div>
                    <div className='font-semibold p-2'><FontAwesomeIcon icon={faCoins} /> Early {price.normal}€</div>
                </div>
                <div className='flex flex-row justify-between text-sm px-8 py-4'>
                    <div><FontAwesomeIcon icon={faCalendar} /> {dates.start_date.split("-").reverse().join("/")}</div>
                    <div><FontAwesomeIcon icon={faCalendarCheck} /> {dates.end_date.split("-").reverse().join("/")}</div>
                </div>
                <div className='flex flex-row justify-between text-sm px-8 py-4'>
                    <div><b>Duration</b> {duration} </div>
                    <div className='font-bold'>{online ? 'Online' : 'Δια ζώσης'}</div>
                    </div>
            </div>
            </Link>
        </div>
  )
}

export default CardsItem