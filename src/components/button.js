
import styled, { css } from 'styled-components'
import '../css/main.css'


const Button = styled.Button = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #020024;
  color: #020024;
  margin: 1em 1em;
  padding: 0.25em 1em;
  text-decoration:none;
  text-transform: uppercase;
  &:hover {
    text-decoration:none;
    color: orange;
  }

  ${props => props.primary && css`
    background: #1e9600; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1e9600, #fff200, #ff0000); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1e9600, #fff200, #ff0000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #000;
    padding: 0.5em 3em;
    font-weight: 800px;
    &:hover {
      text-decoration:none;
      color: #575F73;
      background:#FFF
      font-weight: 800px;

  `}

  ${props => props.secondary && css`
    background:#000;
    color: orange;
    border: 2px solid #000;
    display: inline-block;
  `}
  ${props => props.nav && css`
    background:#ffc529;
    color: #FFF;
    padding: 0.5em 3em;
    &:hover {
      text-decoration:none;
      color: black;
      font-weight: 900;
    }
  `}
`

const Container = styled.div`
  text-align: center;
`

export default Button