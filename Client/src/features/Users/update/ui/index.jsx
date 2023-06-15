import PropTypes from 'prop-types'
import Form, { Input, InputGroup, Label } from '@/widgets/Form/Form.styled'

function UpdateForm ({ isAdmin }) {
  return (
    <Form>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" placeholder="Name" />
          </InputGroup>
          { isAdmin && (
            <>
              <InputGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" placeholder="Email" />
              </InputGroup>
          <InputGroup>
            <Label htmlFor="Passwod">Passwod</Label>
            <Input type="password" id="password" name="password" placeholder="Password" />
          </InputGroup>
            </>
          )}
          { !isAdmin && (
            <>
              <InputGroup>
                <Label htmlFor="role">English level</Label>
                <Input type="text" id="englishLevel" name="englishLevel" placeholder="English level" />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="role">Skills</Label>
                <Input type="text" id="skills" name="skills" placeholder="Skills" />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="role">Resume</Label>
                <Input type="text" id="resume" name="resume" placeholder="Resume" />
              </InputGroup>
            </>
          )}
        </Form>
  )
}

UpdateForm.propTypes = {
  isAdmin: PropTypes.bool
}

export default UpdateForm
