import 'normalize.css'
import './styles/style.scss'
import axios from 'axios'
let settings = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json',
      'Authorization': 'Bearer wchufrIMyAPbjYd4ntbiDSK+WWaP4/AYZfVksIvfQrI=',
      'Access-Control-Allow-Origin': '*',
    },
    
  }
window.onload = () => {
  console.log('loaded')

  axios
    .get('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/7', settings)
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result)
    })
    .catch(err => console.log(err))
}


