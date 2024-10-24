import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './global'
import Footer from './components/Footer'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <div className="container"></div>
          <Rotas />
          <Footer />
          <Cart />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
