import { Card } from '../../components/Card'
import { coffee } from '../../components/Card/coffee'
import { ProductContainer, ProductContent } from './styles'

export function Products() {
  return (
    <ProductContainer>
      <h2>Nossos cafés</h2>
      <ProductContent>
        {coffee.map((coffees) => (
          <Card key={coffees.id} coffee={coffees} />
        ))}
      </ProductContent>
    </ProductContainer>
  )
}
