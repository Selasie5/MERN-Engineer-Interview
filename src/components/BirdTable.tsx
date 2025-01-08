import React from 'react'
import { Bird } from '../types/BirdTypes'
import { useId } from 'react'
interface Props{
    birds: Bird[];
    onSelectBird:(bird:Bird)=>void;
    onUpdateBird:(bird:Bird)=>void;
    onDeleteBird:(bird:Bird)=>void;
}

const BirdTable: React.FC<Props> = ({birds, onSelectBird,onDeleteBird,onUpdateBird}) => {
    
    const id = useId();
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th className='border-b border-gray-300 px-4 py-2'>Common Name</th>
                <th className='border-b border-gray-300 px-4 py-2'>Scientific Name</th>
                <th className='border-b border-gray-300 px-4 py-2'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                birds.map((bird:Bird)=>
                (
                    <tr key={id}>
                            <td className=' border-b border-gray-300 px-4 py-2'>{bird.commonName}</td>
                            <td className=' border-b border-gray-300 px-4 py-2'>{bird.scientificName}</td>
                            <td>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>onSelectBird(bird)}>
                                    View
                                </button>
                            </td>
                            <td>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>onUpdateBird(bird)}>
                                  Update
                                </button>
                            </td>
                            <td>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>onDeleteBird(bird)}>
                                    Delete
                                </button>
                            </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default BirdTable
