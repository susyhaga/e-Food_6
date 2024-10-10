import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

// import pizza from '../../assets/images/pizza.png'
import pasta from '../../assets/images/pastaMar.png'
import sushi from '../../assets/images/sushi.png'
// import zelda from '../../assets/images/pastaMar.png'
import Banner from '../../components/Banner'

//Game = models usado no ProductsList
const cardsIntro: Game[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    classification: ['4.9'],
    system: 'Windows',
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    star: ''
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    classification: ['4.8'],
    system: '',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: pasta,
    star: ''
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    classification: ['4.8'],
    system: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: pasta,
    star: ''
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    classification: ['4.8'],
    system: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: pasta,
    star: ''
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    classification: ['4.8'],
    system: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: pasta,
    star: ''
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    classification: ['4.8'],
    system: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: pasta,
    star: ''
  },
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={cardsIntro} background="branca" columns={2} title={''} />
  </>
)
export default Home
