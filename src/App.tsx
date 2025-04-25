import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import Card from './components/Card'
import CreateContentModel from './components/CreateContentModel'
import PlusIcon from './icons/plusIcon'
import ShareIcon from './icons/ShareIcon'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className='p-4'>
      <CreateContentModel open={modalOpen} onClose={() => setModalOpen(false)} />

      <div className='flex justify-end gap-4 mb-4'>
        <Button
          variant="primary"
          text="Add Context"
          startIcon={<PlusIcon />}
          onClick={() => setModalOpen(true)}
        />
        <Button
          variant="secondary"
          text="Share Brain"
          startIcon={<ShareIcon />}
        />
      </div>

      <div className='flex gap-4'>
        <Card title='first tweet' type='twitter' link='https://x.com/normie_gautam/status/1914770895316619676'/>
        <Card title='first youtube' type='youtube' link='https://www.youtube.com/watch?v=1iJ34tTjwwo'/>
      </div>
    </div>
  )
}

export default App
