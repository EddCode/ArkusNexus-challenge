<<<<<<< HEAD
import Form, { InputGroup, Label, Input } from './Login.styles'
import Button from '../Button'
import useLogin from '../../features/Login'

const Login = () => {
  const { handleLogin } = useLogin()
=======
import Form, { InputGroup, Label, Input, ErrorText } from './Login.styles'
import Button from '../Button'
import useLogin from '@/features/Login'
import { useRef } from 'react'

const Login = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { setLoginValues, isLoading, isError, error } = useLogin()

  const handleClick = () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    setLoginValues({ email, password })
  }
>>>>>>> 7c3aff0 (features)

  return (
    <div>
      <Form>
        <InputGroup>
          <Label>Email</Label>
<<<<<<< HEAD
          <Input type="email" placeholder="Use your arkusnexus email" />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input type="email" placeholder="Type your password" />
        </InputGroup>
      </Form>
      <Button onClick={handleLogin}>Log in</Button>
=======
          <Input type="email" name='email' placeholder="Use your arkusnexus email" ref={emailRef} />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input type="password" name='password' placeholder="Type your password" ref={passwordRef}/>
        </InputGroup>
      </Form>
      { isError && <ErrorText>{error}</ErrorText> }
      <Button onClick={handleClick}>
        { isLoading ? 'loading...' : 'Log in'}
      </Button>
>>>>>>> 7c3aff0 (features)
    </div>
  )
}

export default Login
