import styled from 'styled-components'

const MainContentContainer = () => {
  return (
    <Wrapper>
      <RecommendContainer>
        <OfferTabs>
          <button>Для вас</button>
          <button>Ниже рынка</button>
        </OfferTabs>
        <RecommendProductsGrid>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </RecommendProductsGrid>
        <WhatToBuyWariants>
          <button>something</button>
          <button>something</button>
          <button>something</button>
        </WhatToBuyWariants>
      </RecommendContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-width: 1024px;
  margin: 0 auto;
  border: 1px solid black;
`

const OfferTabs = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
`
const RecommendProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
`

const ProductCard = styled.div`
  width: 100%;
  max-width: 400px;
  height: 400px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const WhatToBuyWariants = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;

  button {
    height: 32px;
    background-color: lightgray;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`
export default MainContentContainer
