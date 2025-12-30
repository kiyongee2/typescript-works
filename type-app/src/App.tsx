import { useState } from 'react'
import './App.css'
import Store from './components/Store'
import type {Restaurant, Address}  from './model/Restaurant'
import BestMenu from './components/BestMenu'

let data: Restaurant = {
  name: '형님네 식당',
  category: 'western',
  address:{
    city: 'inchon',
    detail: 'somewhere',
    zipCode: 123456
  },
  menu: [
    {name: "rose pasta", price: 3000, category: "PASTA"},
    {name: "garlic steak", price: 4000, category: "PIZZA"},
  ]
}

function App() {
  const [restaurant, setRestaurant] = useState<Restaurant>(data)

  const changeAddress = (address: Address) => {
    setRestaurant({...restaurant, address:address})
  }

  const showBestMenuName = (name: string) => {
    return name;
  }

  return (
    <>
      <div className='App'>
        <Store info={restaurant} changeAddress={changeAddress} />
        <BestMenu 
          name="불고기피자" 
          category="피자" 
          price={10000} 
          showBestMenuName = {showBestMenuName}
        />
      </div>
    </>
  )
}

export default App
