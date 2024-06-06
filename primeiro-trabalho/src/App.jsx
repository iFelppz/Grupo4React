import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import Header from './components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
