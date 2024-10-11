import styled from 'styled-components'
import { cores } from '../../global'

export const Container = styled.footer`
  display: block;
  background-color: ${cores.rosaclaro};
  text-decoration: none;
  color: ${cores.rosa};
  margin-top: 120px;
  padding: 36px 0;
  font-size: 14px;
  width: 100%;
  height: auto;

  .container {
    width: 100%;
    max-width: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 10px;
    width: 100%;
    max-width: 480px;
    height: 24px;
    display: flex;
    text-align: center;
    color: ${cores.rosa};
  }
`

export const FooterSection = styled.div`
  text-align: center;
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 33px;
  margin-bottom: 40px;
`

export const SocialMediaIcon = styled.div`
  img {
    width: 24px;
    height: 24px;
  }
`
