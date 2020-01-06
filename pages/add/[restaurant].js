import { useRouter } from 'next/router'
import Button from '../../components/Button'
import LayoutWrapper from '../../components/LayoutWrapper'
import DishForm from '../../components/DishForm'
import restaurants from '../../mock/restaurants_menus.json'
import { normalizePathname } from '../../helpers/index'

function RestaurantForm() {
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
      <DishForm />
    </LayoutWrapper>
  )
}

export default RestaurantForm