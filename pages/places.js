import restaurants from '../mock/restaurants_menus.json'
import RestaurantCard from '../components/RestaurantCard'
import LayoutWrapper from '../components/LayoutWrapper'
import Button from '../components/Button'

function Places() {
  const registeredRestaurants = restaurants.length

  return (  
    <LayoutWrapper>
      <section>
        <header className="page--header">
          <h2>Lugares</h2>
          <span>{`${registeredRestaurants} lugares cadastrados`}</span>
        </header>
        <ul className="restaurants--list">
          {
            restaurants.map( item => (
              <li key={ `${item.name} places` }>
                <RestaurantCard
                  name={ item.name }
                  itemsQuantity={ item.menuItems.length }
                />
                <Button
                  plus
                  marginLeft="20px"
                  restaurants
                  route={ item.name }
                />
              </li>
            ) )
          }
        </ul>
      </section>
    </LayoutWrapper>
  )
}     

export default Places