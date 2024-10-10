import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import pizza from '../../assets/images/pizza.png'
import Header from '../../components/Header'

const restaurante: Game[] = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    classification: ['4.8'],
    system: '',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
    infos: ['Italiana'],
    image: pizza,
    star: ''
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    classification: ['4.8'],
    system: '',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
    infos: ['Italiana'],
    image: pizza,
    star: ''
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
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
    title: 'La Dolce Vita Trattoria',
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
    title: 'La Dolce Vita Trattoria',
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
    title: 'La Dolce Vita Trattoria',
    classification: ['4.8'],
    system: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
    infos: ['Italiana'],
    image: pizza,
    star: ''
  },
]
const Restaurant = () => (
  <>
    <Header />
    <ProductsList games={restaurante} title="" background="rosa" columns={3} />
  </>
)
export default Restaurant
