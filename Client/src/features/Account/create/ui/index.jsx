import { useRef, useState } from 'react'
import { useAccountCtx } from '@/app/context/accounts'
import { Modal } from 'antd'
import CreateAccountForm from '@/widgets/CreateAccountForm'
import Button from '@/widgets/Button'
import useCreate from '../lib/hooks/useCreate'

function CreateAccountModal () {
  const [isOpen, setIsOpen] = useState(false)
  const { account, setAccount } = useAccountCtx()
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [error, setError] = useState(null)

  const accountName = useRef(null)
  const clientName = useRef(null)
  const responsable = useRef(null)
  const teamMembers = useRef(null)

  const { update } = useCreate()

  const validateAccount = () => {
    const { value: account } = accountName.current
    const { value: client } = clientName.current
    const { value: responsableValue } = responsable.current

    if (account === '' && client === '' && responsableValue === '') {
      return false
    }

    return { name: account, client, responsable: responsableValue }
  }

  const handleOk = () => {
    setConfirmLoading(true)

    const accountData = validateAccount()
    if (!accountData) {
      setConfirmLoading(false)
      return
    }

    accountData.teamMembers = teamMembers.current

    update(accountData).then(data => {
      setConfirmLoading(false)
      setAccount([...account, data])
      setIsOpen(false)
    }).catch(error => {
      setConfirmLoading(false)
      setError(error)
    })
  }

  const handleCancel = () => setIsOpen(false)

  const openMdal = () => setIsOpen(true)

  return (
    <>
      <Button onClick={openMdal}>Create Account</Button>
      <Modal
        title='Create Account'
        open={isOpen}
        onOk={handleOk}
        okText='Create'
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <CreateAccountForm
          accountName={accountName}
          clientName={clientName}
          responsable={responsable}
          error={error}
          teamMembers={teamMembers}
        />
      </Modal>
    </>
  )
}

export default CreateAccountModal
