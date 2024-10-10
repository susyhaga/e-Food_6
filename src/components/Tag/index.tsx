import { TagContainer } from './styles'

//exportar para o estilo pq ele nao reconhece size
export type Props = {
  size?: 'small' | 'big'
  children: string //texto da tag
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)
export default Tag //exportar TagContainer para: Banner
