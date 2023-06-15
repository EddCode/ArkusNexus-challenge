import { useRef, useState } from 'react'
import { Modal } from 'antd'

import Button from '@/widgets/Button'
import CreateUserForm from '@/widgets/CreateUserForm'
import useCreate from '../lib/hooks/useCreate'

function CreateUserModal () {
  const [isOpen, setIsOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [error, setError] = useState(null)

  const { submit } = useCreate()

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const rolRef = useRef('user')

  const validateUser = () => {
    const { value: name } = nameRef.current
    const { value: email } = emailRef.current
    const { value: password } = passwordRef.current
    const rol = rolRef.current

    if (name === '' || email === '' || password === '' || rol === '') {
      return false
    }

    return { name, email, password, role: rol }
  }

  const handleOk = async () => {
    setConfirmLoading(true)

    const user = validateUser()
    if (!user) {
      setError('All fields are required')
      setConfirmLoading(false)
      throw new Error('Invalid data')
    }

    submit(user)
      .then(() => {
        setConfirmLoading(false)
        setIsOpen(false)
      })
      .catch((err) => {
        setError(err)
        setConfirmLoading(false)
      })
  }

  const openModal = () => setIsOpen(true)

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <>
     <Button onClick={openModal} > Create User </Button>
      <Modal
        title='User Create'
        open={isOpen}
        onOk={handleOk}
        okText='Create'
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
          <CreateUserForm
            nameRef={nameRef}
            emailRef={emailRef}
            passwordRef={passwordRef}
            rolRef={rolRef}
            error={error}
          />
      </Modal>
    </>
  )
}

export default CreateUserModal
