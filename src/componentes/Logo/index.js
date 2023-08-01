import logo from '../../imagens/logo.svg'
import style from 'styled-components'

const LogoContainer = style.div`
display: flex;
font-size: 30px;
`
const LogoImg = style.img`
margin-right: 10px;
`
function Logo(){
  return(
    <LogoContainer><LogoImg src={logo}alt='logo'></LogoImg>
      <p><strong>Alura</strong>Books</p>
    </LogoContainer>
  )
}

export default Logo;