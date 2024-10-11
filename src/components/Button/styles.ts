import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../global'

export const ButtonContainer = styled.button`
  color: ${cores.branca};
  background-color: ${cores.rosa};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  margin-left: 8px;
`
export const ButtonLink = styled(Link)`
  color: ${cores.branca};
  background-color: ${cores.rosa};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  margin-left: 8px;
`
