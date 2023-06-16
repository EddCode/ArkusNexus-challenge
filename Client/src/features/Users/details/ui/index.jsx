import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import UpdateForm from '../../update/ui'
import useGetOneUser from '../lib/hooks'
import DetailsWrapper, { UserInfo, UserInfoTextWrapper, UserTitle, UserUpdateWrapper } from './Details.styles'

function UserDetails ({ id }) {
  const { submit } = useGetOneUser()
  const { data } = useQuery(['user'], getUserData)
  const { current: emptyField } = useRef('-----')

  const [userData, setUser] = useState({ })

  useEffect(() => {
    data && setUser(data)
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
      <UserInfo>
        <UserTitle>{ userData?.name }</UserTitle>
        <UserInfoTextWrapper>
          <label>Email:</label>
          <span>{ userData.email }</span>
        </UserInfoTextWrapper>
        <UserInfoTextWrapper>
          <label>English Level:</label>
          <span>{ userData.englishLevel || emptyField }</span>
        </UserInfoTextWrapper>
        <UserInfoTextWrapper>
          <label>Skills:</label>
          <span>{ userData.skills || emptyField }</span>
        </UserInfoTextWrapper>
        <UserInfoTextWrapper>
          <label>Resume:</label>
          <span>{ userData.resume || emptyField }</span>
        </UserInfoTextWrapper>
        <UserInfoTextWrapper>
          <label>Role:</label>
          <span>{ userData.role }</span>
        </UserInfoTextWrapper>
      </UserInfo>
      <UserUpdateWrapper>
        <UpdateForm user={userData} updateUser={setUser} />
      </UserUpdateWrapper>
    </DetailsWrapper>
  )
}

UserDetails.propTypes = {
  id: PropTypes.string
}

export default UserDetails
