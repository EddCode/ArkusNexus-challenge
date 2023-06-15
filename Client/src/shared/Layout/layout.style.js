import styled, { css } from 'styled-components'

const background = {
  primary: 'var(--primary-color)',
  bodyBackground: 'var(--body-background)'
}

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;
  min-height: 100vh;
  background: ${props => background[props.background] || 'var(--white)'};

  ${props => props.dashboard === 'true' && css`
    display: grid;
    grid-template-columns: 6.25rem 1fr;
    grid-template-rows: 4.6rem 1fr  2rem;
    align-items: stretch;
    grid-gap: 0;

    & > nav {
      grid-row: 1 / span 3;
    }

    ${Container} {
      margin: 0 auto;
      width: 90%;
      min-width: 900px;
      overflow: auto;
    }
  `}
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;
  max-height: calc(100vh - 8.6rem);
  align-self: start;
  position: relative;
`

export default Root
