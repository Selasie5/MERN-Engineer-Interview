import React from 'react'
import { Bird } from '../types/BirdTypes'

interface Props{
     bird: Bird;
     onClose:()=>void;
}
const BirdModal:React.FC<Props> = ({bird, onClose}) => {
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-40 flex justify-center items-center'>
       <div className='bg-white p-6 rounded shadow-lg max-w-lg'>
        <h2>
    {bird.commonName}
        </h2>
        <p>
            <strong>Scientific Name :</strong> 
            {
                bird.scientificName
            }
        </p>
        <p>
            <strong>Description :</strong> 
            {
                bird.description
            }
        </p>
        <p>
            <strong>Habitat:</strong> 
            {
                bird.habitat.join(',')
            }
        </p>
        <p>
            <strong>Appearance :</strong> 
           Size - {bird.appearance.size}
           Colors - {bird.appearance.color.join(',')}
        </p>
        <button className='bg-gray-500 text-white px-4 py-2 rounded mt-4'
        onClick={onClose}
        >
          Close
          </button>
       </div>
    </div>
  )
}

export default BirdModal
