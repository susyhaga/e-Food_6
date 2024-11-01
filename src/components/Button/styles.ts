import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../global'

export const ButtonContainer = styled.button<{
  bgColor?: string
  color?: string
}>`
  color: ${({ color }) => color || cores.rosa};
  background-color: ${({ bgColor }) => bgColor || cores.rosaclaro};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border: none;
  width: 100%;
`
export const ButtonLink = styled(Link)<{ bgColor?: string; color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || cores.rosa};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border: none;
  width: 100%;
`
