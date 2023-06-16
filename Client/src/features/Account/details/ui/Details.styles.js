import styled from 'styled-components'

export const Info = styled.div`
`

export const UpdateWrapper = styled.div`
`

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 4rem;
  width: inherit;

  ${Info}, ${UpdateWrapper} {
    box-shadow: var(--shadow);
    padding: 2rem 3em;
    border-radius: var(--border-radius);
  }
`

export const Title = styled.h3`
  margin-bottom: 1.3rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  text-transform: capitalize;
`

export const InfoTextWrapper = styled.div`
  margin: 1rem;
  display: flex;
  gap: 1rem;
  
  & label {
    color: var(--dark-gray);
    font-weight: 600;
  }

  & span {
    color: var(--light-gray);
    font-weight: 300;
  }
`

export default DetailsWrapper
