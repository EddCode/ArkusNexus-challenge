<<<<<<< HEAD
import styled from 'styled-components'
=======
import styled, { css } from 'styled-components'
>>>>>>> 7c3aff0 (features)

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
<<<<<<< HEAD
=======

  ${props => props.dashboard === 'true' && css`
    display: grid;
    grid-template-columns: 6.25rem 1fr;
    grid-template-rows: 4.6rem 1fr 100px;
    align-items: stretch;
    grid-gap: 0;

    & > nav {
      grid-row: 1 / span 3;
    }
  `}
>>>>>>> 7c3aff0 (features)
`

export const Container = styled.div`
  display: flex;
  gap: .8rem;
`

export default Root
