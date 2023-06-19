import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Spin, message, Select } from 'antd'

import Form, { Input, InputGroup, Label } from '@/widgets/Form/Form.styled'

import Button from '@/widgets/Button'
import useUpdate from '../lib/hooks/useUpdate'
import { useListUsers } from '../../create/lib/hooks/useCreate'

function UpdateForm ({ account, updateAccount }) {
  const list = useListUsers()
  const { id } = useParams()
  const [messageApi, contextHolder] = message.useMessage()
  const { submit } = useUpdate()

  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState()
  const [members, setMembers] = useState([])

  const { current: dataToUpdate } = useRef({})

  useEffect(_ => {
    users()
  }, [])

  const users = async () => {
    const data = await list()
    setOptions(data.map(user => ({ label: user.name, value: user.name, key: user.id })))
  }

  const handleChange = event => {
    const key = event.target.name

    const accountUpdated = {
      ...account,
      [key]: event.target.value
    }

    dataToUpdate[key] = event.target.value

    updateAccount(accountUpdated)
  }

  const handleSelectChange = value => {
    const getIds = options.filter(option => value.includes(option.value)).map(option => ({ id: option.key, name: option.value }))
    updateAccount({ ...account, accountMember: getIds })
    dataToUpdate.teamMembers = getIds
  }

  const handleClick = async event => {
    try {
      event.preventDefault()
      setIsLoading(true)
      await submit(dataToUpdate, id)
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
        <InputGroup>
          <Label>Select a person</Label>
          <Select
            style={{ width: '100%' }}
            mode="multiple"
            showSearch
            allowClear
            placeholder="Jhone, William"
            options={options}
            onChange={handleSelectChange}
          />
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
    responsable: PropTypes.string,
    accountMember: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }))
  }),
  updateAccount: PropTypes.func
}

export default UpdateForm
