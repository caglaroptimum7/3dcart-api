import 'normalize.css'
import './styles/style.scss'
import axios from 'axios'
// let settings = {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         "Accept": "application/json",
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer wchufrIMyAPbjYd4ntbiDSK+WWaP4/AYZfVksIvfQrI=',
//       'SecureURL': 'https://7206341744.3dcart.net/',
//       'Token': 'wchufrIMyAPbjYd4ntbiDSK+WWaP4/AYZfVksIvfQrI='
//     },
//     credentials: 'same-origin',
//     withCredentials : true
//   }
// window.onload = () => {
//   console.log('loaded')
//
//   axios
//     .get('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories?limit=10&offset=1', settings)
//     .then(response => {
//       return response.json()
//     })
//     .then(result => {
//       console.log(result)
//     })
//     .catch(err => console.log(err))
// }


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/7");
xhr.setRequestHeader("Authorization", "Bearer wchufrIMyAPbjYd4ntbiDSK+WWaP4/AYZfVksIvfQrI=");

xhr.send();
