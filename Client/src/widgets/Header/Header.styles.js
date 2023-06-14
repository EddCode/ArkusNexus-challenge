import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: .8rem 2.6rem 1.25rem 2.6rem;
  box-shadow: rgba(151, 151, 151, 0.28) 0px 4px 8px 0px;
`

export const ArkusTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  row-gap: .3rem;
  column-gap: .3rem;
  color: var(--primary-color);
  font-weight: bolder;

  & > p {
    font-size: 2rem;
    font-weight: 700;
  }
`

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: .3rem;
  column-gap: .3rem;
  color: var(--primary-color);
  font-weight: 900;

  & > span {
    font-size: 1.2rem;
    color: var(--second-color);
  }
`
