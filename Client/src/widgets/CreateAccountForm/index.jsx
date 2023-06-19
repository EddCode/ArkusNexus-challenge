import PropTypes from 'prop-types'
import Form, { InputGroup, Label, Input, ErrorText } from '@/widgets/Form/Form.styled'

function CreateAccountForm ({ accountName, clientName, responsable, error }) {
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
  error: PropTypes.string
}

export default CreateAccountForm
