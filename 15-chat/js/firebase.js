//    // Import the functions you need from the SDKs you need
//    import { initializeApp } from 'firebase/app';
//    import { getDatabase, ref, onValue } from "firebase/database";

// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app"; //"https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// // import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBb0vHu6S5OkKRpkxSwcHy45TkeQDsvm_w",
//     authDomain: "javascript-chat-marek.firebaseapp.com",
//     projectId: "javascript-chat-marek",
//     storageBucket: "javascript-chat-marek.appspot.com",
//     messagingSenderId: "651353146449",
//     appId: "1:651353146449:web:879428080835073cfb6470",
//     databaseURL: 'https://javascript-chat-marek-default-rtdb.europe-west1.firebasedatabase.app/'
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const database = getDatabase(app);

// // // Odczytywanie w const firebase
// // const messageRef = ref(database, 'messages');//w naszej db glowny elem to 'messages'
// // // onValue(messageRef,(data)=>{})
// // const handleData = (data) => {
// //     // toJSON() jest to metoda firebase, ktora sluzy do zmiany przychodzacych danych na format javascriptowy
// //     const messages = data.toJSON();
// //     // console.log(messages);
// //     // console.log(Object.values(messages));
// //     // zapis wiadomosci do LS - a nasz plik odczyta
// //     localStorage.setItem('messages', JSON.stringify(Object.values(messages)))
// // }
// // onValue(messageRef, handleData);

// //         // jesli nie korzystamy z parcela, potrzebujemy zapisac rzeczy pochodzace z firebase
// //         // do window, poniewaz kazdy plik js ma do tego obiektu dostep
// //         // window.database = database;
// //         // window.messageRef = messageRef;
// //         // window.onValue = onValue;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfIaK_fy5dsoRLwXPoSUBV2ASJt_59gsY",
  authDomain: "javascript-chat123.firebaseapp.com",
  projectId: "javascript-chat123",
  storageBucket: "javascript-chat123.appspot.com",
  messagingSenderId: "572206788695",
  appId: "1:572206788695:web:8f6544f41b57df2cdcb312",
  databaseURL: 'https://javascript-chat123-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);