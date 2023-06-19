import PropTypes from 'prop-types'
import Form, { InputGroup, Label, Input, ErrorText } from '@/widgets/Form/Form.styled'
import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { useListUsers } from '../../features/Account/create/lib/hooks/useCreate'

function CreateAccountForm ({ accountName, clientName, responsable, error, teamMembers }) {
  const list = useListUsers()
  const [options, setOptions] = useState([])

  useEffect(_ => {
    listUsers()
  }, [])

  const listUsers = async _ => {
    const data = await list()
    const parsedOptions = data.map(user => ({
      label: user.name,
      value: user.name,
      key: user.id
    }))

    setOptions(parsedOptions)
  }

  const handleChange = value => {
    const getIds = options.filter(option => value.includes(option.value)).map(option => ({ id: option.key, name: option.value }))
    teamMembers.current = getIds
  }

  return (
    <>
      <Form>
        <InputGroup>
          <Label>Account</Label>
          <Input type="text" name='accountName' placeholder="arkus nexus" ref={accountName}/>
        </InputGroup>
        <InputGroup>
          <Label>Client</Label>
          <Input type="text" name='clientName' placeholder="Jhon Doe" ref={clientName}/>
        </InputGroup>
        <InputGroup>
          <Label>Responsable</Label>
          <Input type="text" name='responsable' placeholder="William smith" ref={responsable} />
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
            onChange={handleChange}
          />
        </InputGroup>
      </Form>
      <ErrorText>
        {error}
      </ErrorText>
    </>
  )
}

CreateAccountForm.propTypes = {
  accountName: PropTypes.object.isRequired,
  clientName: PropTypes.object.isRequired,
  responsable: PropTypes.object.isRequired,
  teamMembers: PropTypes.object.isRequired,
  error: PropTypes.string
}

export default CreateAccountForm
