import './App.css'
import { Button } from './components/ui/Button'
import PlusIcon from './icons/plusIcon'

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon/>} size='sm' variant="primary" text="share"></Button>
      <Button size='md' variant="secondary" text="Add context"></Button>
      <Button size='lg' variant="secondary" text="Add Context"></Button>
    </>
  )
}

export default App
