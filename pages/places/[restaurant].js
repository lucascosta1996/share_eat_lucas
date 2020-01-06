import { useRouter } from 'next/router'
import DishCard from '../../components/DishCard'
import LayoutWrapper from '../../components/LayoutWrapper'
import Button from '../../components/Button'
import restaurants from '../../mock/restaurants_menus.json'
import { normalizePathname } from '../../helpers/index'

function RestaurantMenu() {
  const router = useRouter()
  const restaurant = router.query.restaurant
  const restaurantDishesList = restaurants.find( item => normalizePathname( item.name ) === restaurant )
  const dishesQuantity = restaurantDishesList.menuItems.length

  return (
    <LayoutWrapper>
      <header className="page--header">
        <h2>{restaurantDishesList.name}</h2>
        <span>{ `${dishesQuantity} pratos` }</span>
      </header>
      <ul>
      {
        restaurantDishesList && restaurantDishesList.menuItems.map( item => (
          <li key={ item.name }>
            <DishCard
              description={ item.description }
              name={ item.name }
              price={ item.price }
            />
          </li>
        ) )
      }
      </ul>
      <Button
        add
        cornerPosition
        plus
        route={ restaurantDishesList.name }      
      />
    </LayoutWrapper>
  )
}

export default RestaurantMenu