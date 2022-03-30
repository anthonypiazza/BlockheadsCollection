import styled from 'styled-components'

export const BaseClassCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const FilterContainer = styled.div`
    width: '100%'
`;

export const BaseClass = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const BaseClassEvenSpread = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Zen Kurenaido', sans-serif;
  font-size: calc(10px + 2vmin);
  text-align: center;
  width: 100%;
  min-height: 100vh;
  background-color: #282c34 !important;
  color: white;
`;

export const AppTitle = styled.h1`
  display: inline-block;
  padding: 25px 25px 0 25px;
  font-size: 55px !important;
`;

export const BodyContainer = styled(BaseClassCenter)`
  margin-top: 20px;
`;