import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

const AppContext = React.createContext([{}, () => {}])

const AppContextProvider = (props) => {
  const [state, setState] = useState({})

  useEffect(() => {
    var token, current_student, current_teacher
    token = sessionStorage.getItem('jwtToken') || null
    try {
      current_teacher = JSON.parse(sessionStorage.getItem('current_teacher'))
    } catch (e) {
      current_teacher = {}
    }
    try {
      current_student = JSON.parse(sessionStorage.getItem('current_student'))
    } catch(e) {
      current_student = {}
    }
    if(token) {
      var user = jwtDecode(token)
      let t = parseInt(new Date().getTime()/1000, 10)
      if(t - user.exp >= 0) {
        setState({ 
          auth: false,
        })
      } else {
        setState({
          auth: true,
        })
      }
    } else {
      setState({
        auth: false,
      })
    }
  }, [])

  return  <AppContext.Provider value={[state, setState]}>
            {props.children}
          </AppContext.Provider>
}

export { AppContext, AppContextProvider }