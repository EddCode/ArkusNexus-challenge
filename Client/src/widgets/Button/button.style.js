import style from 'styled-components'

const Button = style.button`
  width: ${props => props.width || '100%'};
  padding: .75rem;
  background: var(--second-color);
  color: var(--white);
  border-radius: var(--border-radius);
  border: none;
  outline: none;
  cursor: pointer;
  transition: .3s background;

  &:hover {
    background: var(--second-color-hover);
  }
`

export default Button
