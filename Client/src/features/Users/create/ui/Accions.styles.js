import styled from 'styled-components'

const Accions = styled.div`
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

export default Accions
