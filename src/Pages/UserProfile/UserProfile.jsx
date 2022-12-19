import { Button, Center } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

const UserProfile = () => {


  const [tag, setTag] = useState('')
  const navigate = useNavigate()
  const { authState, logout, setShowAdminPage } = useContext(AuthContext)
  useEffect(() => {
    axios.get(`/users`)
      .then(res => {
        res.data.map(item => {
          if (item.userId == authState.token) {
            setTag(item.tag)
          }
        })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Center>
        <Button onClick={logout}> Log out </Button>
        {tag == "admin" && <Button onClick={() => {
          localStorage.setItem('show admin page', true)
          setShowAdminPage(true)
          navigate("/admin/dashboard")

        }}> Admin Panel </Button>}
      </Center>
    </>
  )
}

export default UserProfile