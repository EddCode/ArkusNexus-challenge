import PropTypes from 'prop-types'
import { useRef } from 'react'
import UpdateForm from '../../update/ui'
import DetailsWrapper, { UserInfo, UserInfoTextWrapper, UserTitle, UserUpdateWrapper } from './Details.styles'

function UserDetails ({ user }) {
  const { current: emptyField } = useRef('-----')
  return (
    <DetailsWrapper>
      <UserInfo>
        <UserTitle>{ user.name }</UserTitle>
        <UserInfoTextWrapper>
          <label>Email:</label>
          <span>{ user.email }</span>
        </UserInfoTextWrapper>
        <UserInfoTextWrapper>
          <label>Role:</label>
          <span>{ user.role }</span>
        </UserInfoTextWrapper>
        <UserInfoTextWrapper>
          <label>English Level:</label>
          <span>{ user.englishLevel || emptyField }</span>
        </UserInfoTextWrapper>
        <UserInfoTextWrapper>
          <label>Skills:</label>
          <span>{ user.skills || emptyField }</span>
        </UserInfoTextWrapper>
        <UserInfoTextWrapper>
          <label>Resume:</label>
          <span>{ user.resume || emptyField }</span>
        </UserInfoTextWrapper>
      </UserInfo>
      <UserUpdateWrapper>
        <UpdateForm idAdmin={user.role}/>
      </UserUpdateWrapper>
    </DetailsWrapper>
  )
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    englishLevel: PropTypes.string,
    skills: PropTypes.string,
    resume: PropTypes.string
  })
}

export default UserDetails
