import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useSWRConfig } from 'swr'

import NavRoutesDash from '../layout/Navroutesdash'
import EditUserProfile from './EditUserProfile'
import EditPassword from './EditPassword'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const BoxProfileImage = styled.div`
  width: 442px;
  height: 360px;

  border-radius: 15px;
  background: white;
`

const BoxAvatar = styled.div`
  width: 300px;
  height: 80%;
  border-radius: 7px;
  display: flex;
  padding: 40px 55px;

  flex-direction: column;
`
const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 105px;
  background: #3030f4ce;

  border: 4px solid #1f1f8e;
`

const Label = styled.h2`
  padding: 9px;
  color: #a7a7a7;
`
const EditAvatar = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 50px;
`
const Remove = styled.h2`
  color: red;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: darkred;
  }
`
const Edit = styled.h2`
  color: #3232f7;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: darkred;
  }
`
const FlexContainer = styled.div`
  display: flex;

  gap: 20px;
  padding: 25px;
`

export default function Profile({
  id,
  fullName,
  user,
  email,
  password,
  address,
  number,
  ...props
}) {
  const [editPassword, setEditPassword] = useState(false)

  const { mutate } = useSWRConfig()

  const handleSaveEdit = () => {
    mutate(`http://localhost:3333/cleaner/editAbout`)
  }
  return (
    <Container {...props}>
      <NavRoutesDash profile type1 />
      <FlexContainer>
        <BoxProfileImage>
          <Label>Avatar</Label>
          <BoxAvatar>
            <Avatar src="/avatar.png" />
            <EditAvatar>
              <Edit>Edit</Edit>
              <Remove>Remove</Remove>
            </EditAvatar>
          </BoxAvatar>
        </BoxProfileImage>
        {editPassword ? (
          <EditPassword
            id={id}
            fullName={fullName}
            user={user}
            email={email}
            password={password}
            address={address}
            number={number}
            onButton={() => setEditPassword(!editPassword)}
            onSave={handleSaveEdit}
          />
        ) : (
          <EditUserProfile
            id={id}
            fullName={fullName}
            user={user}
            email={email}
            password={password}
            address={address}
            number={number}
            onHandleButton={() => setEditPassword(!editPassword)}
            onSave={handleSaveEdit}
          />
        )}
      </FlexContainer>
    </Container>
  )
}
