import 'react-toastify/dist/ReactToastify.css'
import { CartProvider } from './contexts/cartContext'
import { UserProvider } from './contexts/userContext'
import { RoutesCentral } from './routes'

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <RoutesCentral/>
      </CartProvider>
    </UserProvider>
  )
}
export default App
