import style from 'styled-components'

const Form = style.form``

export const InputGroup = style.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5em;

`

export const Label = style.label`
  font-style: normal;
  font-size: .85rem;
  line-height: 1.25rem;
  color: var(--light-gray);
  padding-left: .5em;
`

export const Input = style.input`
  box-sizing: border-box;
  height: 2.5rem;
  width: 100%;
  pading-left: .75em;
  border-radius: var(--border-radius);
  border: 2px solid var(--lighter-gray);
  outline: none;
  color: var(--gray);
  font-weight: 400;
  line-height: 1.25rem;
`

export const ErrorText = style.span`
  display: inline-block;
  margin: .5em 0;
  text-align: left;
  color: var(--error-color);
`

export default Form
