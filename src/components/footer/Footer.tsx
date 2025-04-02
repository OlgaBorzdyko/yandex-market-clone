import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterInfoContainer>Footer</FooterInfoContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  border: 1px solid black;
`

const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-width: 1024px;
  margin: 0 auto;
  border: 1px solid black;
`
export default Footer
