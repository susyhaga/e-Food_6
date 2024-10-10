import ProductsList from '../../components/ProductsList'
import Card from '../../models/CardModel'

import pizza from '../../assets/images/pizza.png'
import Header from '../../components/Header'

const restaurante: Card[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    classification: ['4.8'],
    system: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
    infos: ['Italiana'],
    image: pizza,
    star: ''
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    classification: ['4.8'],
    system: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
    infos: ['Italiana'],
    image: pizza,
    star: ''
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    classification: ['4.8'],
    system: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
    infos: ['Italiana'],
    image: pizza,
    star: ''
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    classification: ['4.8'],
    system: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
    infos: ['Italiana'],
    image: pizza,
    star: ''
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    classification: ['4.8'],
    system: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
    infos: ['Italiana'],
    image: pizza,
    star: ''
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    classification: ['4.8'],
    system: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
    infos: ['Italiana'],
    image: pizza,
    star: ''
  }
]
const Restaurant = () => (
  <>
    <Header />
    <ProductsList card={restaurante} title="" background="rosa" columns={3} />
  </>
)
export default Restaurant
