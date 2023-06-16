import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;

  & > div {
    width: 10em;
  }
`

export const CoulumnAccions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--error-color);

  & a {
    text-decoration: none;
    color: var(--second-color);
    cursor: pointer;
  }

  & svg {
    cursor: pointer;
  }
`
