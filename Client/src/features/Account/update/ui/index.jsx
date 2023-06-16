import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Spin, message } from 'antd'

import Form, { Input, InputGroup, Label } from '@/widgets/Form/Form.styled'

import Button from '@/widgets/Button'
import useUpdate from '../lib/hooks/useUpdate'

function UpdateForm ({ account, updateUser }) {
  const [messageApi, contextHolder] = message.useMessage()
  const { submit } = useUpdate()

  const [isLoading, setIsLoading] = useState(false)

  const { current: dataToUpdate } = useRef({})

  const handleChange = event => {
    const key = event.target.name

    const accountUpdated = {
      ...account,
      [key]: event.target.value
    }

    dataToUpdate[key] = event.target.value

    updateUser(accountUpdated)
  }

  const handleClick = async event => {
    try {
      event.preventDefault()
      setIsLoading(true)
      await submit(dataToUpdate, account.id)
      messageApi.success('User updated')
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      messageApi.error(error.message || error)
    }
  }

  return (
    <Form>
        {contextHolder}
        <InputGroup>
            <Label htmlFor="name">Account</Label>
            <Input type="text" id="name" name="name" placeholder="Cotu tv" onChange={handleChange} />
        </InputGroup>
        <InputGroup>
            <Label htmlFor="clientName">Client</Label>
            <Input type="text" id="email" name="client" placeholder="Richard Spin" onChange={handleChange} />
        </InputGroup>
        <InputGroup>
            <Label htmlFor="Responsable">Responsable</Label>
            <Input type="text" id="responsable" name="responsale" placeholder="Jhone Doe" onChange={handleChange} />
        </InputGroup>
        <Button type='button' onClick={handleClick}>
            {isLoading && <Spin indicator={AiOutlineLoading3Quarters} />}
            Update
        </Button>
    </Form>
  )
}

UpdateForm.propTypes = {
  account: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    client: PropTypes.string,
    responsable: PropTypes.string
  }),
  updateUser: PropTypes.func
}

export default UpdateForm
