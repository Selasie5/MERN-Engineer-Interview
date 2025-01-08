import React,{useState, useEffect} from 'react'
import BirdTable from '../components/BirdTable'
import { Bird } from '../types/BirdTypes'
import { fetchBirds } from '../services/birdService'
import BirdModal from '../components/BirdModal'

const Dashboard = () => {
    const [birds, setBirds] = useState<Bird[]>([]);
    const [selectedBird, setSelectedBird] = useState<Bird | null>(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
   

    useEffect(()=>
    {
      const loadBirds = async() =>
      {
        const data  = await fetchBirds();
        console.log(data);
        setBirds(data);
    };
    loadBirds();
    },[]
)
  return (
    <div className='p-4'>
      <h1>Interesting Bird Facts</h1>
     <BirdTable birds={birds}
      onSelectBird={
        (bird)=>{
          setSelectedBird(bird);
          setIsDetailModalOpen(true)
        }
      } 
     onUpdateBird={()=>{}}
      onDeleteBird={()=>{}}/>

      {isDetailModalOpen && selectedBird &&(
        <BirdModal
        bird={selectedBird}
        onClose={()=>setIsDetailModalOpen(false)}
        />

      )}
    </div>
  )
}

export default Dashboard
