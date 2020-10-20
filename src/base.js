import Rebase from 're-base';   
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBHljY2scR7LgdUnquIGvg_mfJWagp4h6I",
        authDomain: "react-store-cd566.firebaseapp.com",
        databaseURL: "https://react-store-cd566.firebaseio.com",
        appId: "1:926341560610:web:ba47294c28d01133e34d7b",
        measurementId: "G-DM7F47HPKP"
      }
)

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }; 

export default base;