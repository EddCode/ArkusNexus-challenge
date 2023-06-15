import Form, { InputGroup, Label, Input, ErrorText } from '@/widgets/Form/Form.styled'
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

  return (
    <div>
      <Form>
        <InputGroup>
          <Label>Email</Label>
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
    </div>
  )
}

export default Login
