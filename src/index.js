import 'normalize.css'
import './styles/style.scss'
import axios from 'axios'
let settings = {
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer wchufrIMyAPbjYd4ntbiDSK+WWaP4/AYZfVksIvfQrI=',
    SecureURL: 'https://7206341744.3dcart.net/',
    Token: 'wchufrIMyAPbjYd4ntbiDSK+WWaP4/AYZfVksIvfQrI='
  }
}
window.onload = () => {
  console.log('loaded')

  axios
    .get(
      'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers?email=caglarergulcom%40gmail.com',
      settings
    )
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result)
    })
    .catch(err => console.log(err))
}
