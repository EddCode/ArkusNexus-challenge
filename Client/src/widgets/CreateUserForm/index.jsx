import PropTypes from 'prop-types'
import { Select } from 'antd'
import Form, { InputGroup, Label, Input, ErrorText } from '@/widgets/Form/Form.styled'

function CreateUserForm ({ emailRef, nameRef, passwordRef, rolRef, error }) {
  const handleChange = (value) => {
    rolRef.current = value
  }

  return (
    <>
      <Form>
        <InputGroup>
          <Label>Email</Label>
          <Input type="email" name='email' placeholder="jhon@arkusnexus.com" ref={emailRef}/>
        </InputGroup>
        <InputGroup>
          <Label>Full name</Label>
          <Input type="text" name='name' placeholder="Jhon Doe " ref={nameRef}/>
        </InputGroup>
        <InputGroup>
          <Label>Role</Label>
          <Select defaultValue="user" style={{ width: 130 }} onChange={handleChange}>
            <Select.Option value="user">User</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="super admin">Super Admin</Select.Option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input type="password" name='password' placeholder="Type a password" ref={passwordRef} />
        </InputGroup>
      </Form>
      <ErrorText>
        {error}
      </ErrorText>
    </>
  )
}

CreateUserForm.propTypes = {
  emailRef: PropTypes.object.isRequired,
  nameRef: PropTypes.object.isRequired,
  passwordRef: PropTypes.object.isRequired,
  rolRef: PropTypes.object.isRequired,
  error: PropTypes.string
}

export default CreateUserForm
