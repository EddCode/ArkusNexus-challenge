import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import UpdateForm from '../../update/ui'
import useGetOneUser from '../lib/hooks/useGetOne'
import DetailsWrapper, { Info, InfoTextWrapper, Title, UpdateWrapper } from './Details.styles'

function UserDetails ({ id }) {
  const { submit } = useGetOneUser()
  const { data } = useQuery(['user'], getUserData)

  const [userData, setAccount] = useState({ })

  useEffect(() => {
    data && setAccount(data)
  }, [data])

  async function getUserData () {
    try {
      const data = await submit(id)
      return data
    } catch (error) {
      return Promise.reject(error.message)
    }
  }

  return (
    <DetailsWrapper>
      <Info>
        <Title>{ userData?.name }</Title>
        <InfoTextWrapper>
          <label>Client:</label>
          <span>{ userData.client }</span>
        </InfoTextWrapper>
        <InfoTextWrapper>
          <label>Responsable:</label>
          <span>{ userData.responsable }</span>
        </InfoTextWrapper>
      </Info>
      <UpdateWrapper>
        <UpdateForm user={userData} account={setAccount} />
      </UpdateWrapper>
    </DetailsWrapper>
  )
}

UserDetails.propTypes = {
  id: PropTypes.string
}

export default UserDetails
