import './App.css'
import { Button } from './components/Button'
import PlusIcon from './icons/plusIcon'
import ShareIcon from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button variant={"primary"} text={'Add Context'} startIcon={<PlusIcon/>}/>
      <Button variant={"secondary"} text={'Share Brain'} startIcon={<ShareIcon/>}/>
      
    </>
  )
}

export default App
