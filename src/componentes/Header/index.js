import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader'
import styled from  'styled-components'

const HeaderContainer = styled.header`
  background-color: #ebf2f2;
  display: flex;
  justify-content: center;
  box-shadow: linear-gradient(white, #f0f0f0);
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