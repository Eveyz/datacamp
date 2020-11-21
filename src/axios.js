import axios from 'axios'

let token = sessionStorage.getItem("jwtToekn")
const ax = axios.create({
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})

export default ax