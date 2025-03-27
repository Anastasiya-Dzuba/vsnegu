import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainContent from './components/MainContent'

function App() {
  return (
    <BrowserRouter basename="/vsnegu">
      <MainContent />
    </BrowserRouter>
  )
}
export default App
