import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './global'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container"></div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
