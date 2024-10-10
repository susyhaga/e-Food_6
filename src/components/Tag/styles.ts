/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { cores } from '../../global'
import { Props } from '.' //passar a tipagem para o componente estilizado

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '12px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? ' 6px 4px' : '6px 4px')};
  display: inline-block;
  margin-right: 8px;
`

//exportar TagContainer para: Banner(styles)
