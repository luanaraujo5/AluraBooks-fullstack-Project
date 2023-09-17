import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader'
import styled from  'styled-components'

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  box-shadow: 0 0 1em black;
  justify-content: center;
`
function header(){
  return(
      <HeaderContainer>
      <Logo/>
      <OpcoesHeader/>
      <IconesHeader/>
      </HeaderContainer>
  )
}
export default header