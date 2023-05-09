import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { OrderCoffee } from './pages/OrderCoffee'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderCoffee />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
