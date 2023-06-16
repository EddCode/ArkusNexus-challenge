import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Spin, message } from 'antd'
import { useAuth } from '@/app/context/auth'

import Form, { Input, InputGroup, Label } from '@/widgets/Form/Form.styled'

import Button from '@/widgets/Button'
import useUpdate from '../lib/useUpdate'

function UpdateForm ({ user, updateUser }) {
  const [messageApi, contextHolder] = message.useMessage()
  const { submit } = useUpdate()
  const { user: loggedUser } = useAuth()

  const [isLoading, setIsLoading] = useState(false)

  const { current: isAdmin } = useRef(['super admin', 'admin'].includes(loggedUser.role))
  const { current: dataToUpdate } = useRef({})

  const handleChange = event => {
    const key = event.target.name

    const userUpdated = {
      ...user,
      [key]: event.target.value
    }

    dataToUpdate[key] = event.target.value

    updateUser(userUpdated)
  }

  const handleClick = async event => {
    try {
      event.preventDefault()
      setIsLoading(true)
      await submit(dataToUpdate, user.id)
      messageApi.success('User updated')
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      messageApi.error(error.message || error)
    }
  }

  return (
    <Form>
      { contextHolder }
      <InputGroup>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Jhone Doe" onChange={handleChange} />
      </InputGroup>
      { isAdmin && (
        <>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" placeholder="jone-doe@arkusnexus.com" onChange={handleChange} />
          </InputGroup>
      <InputGroup>
        <Label htmlFor="Passwod">Passwod</Label>
        <Input type="password" id="password" name="password" placeholder="type a passowrd" onChange={handleChange} />
      </InputGroup>
        </>
      )}
      { !isAdmin && (
        <>
          <InputGroup>
            <Label htmlFor="role">English level</Label>
            <Input type="text" id="englishLevel" name="englishLevel" placeholder="B2" onChange={handleChange}/>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="role">Skills</Label>
            <Input type="text" id="skills" name="skills" placeholder="I'm good for ...." onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="role">Resume link</Label>
            <Input type="text" id="resume" name="resume" placeholder="google.com/resume" onChange={handleChange} />
          </InputGroup>
        </>
      )}
      <Button type='button' onClick={handleClick}>
        {isLoading && <Spin indicator={AiOutlineLoading3Quarters} />}
        Update
      </Button>
    </Form>
  )
}

UpdateForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    englishLevel: PropTypes.string,
    skills: PropTypes.string,
    resume: PropTypes.string
  }),
  updateUser: PropTypes.func
}

export default UpdateForm
