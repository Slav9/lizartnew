const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static(path.join(__dirname, 'public')));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/roadmap',function(req,res){
  res.sendFile(path.join(__dirname+'/views/roadmap.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8vrpngtNInqemU_RtHyBZBxrb-Q_smmc",
  authDomain: "new-lizart-io.firebaseapp.com",
  projectId: "new-lizart-io",
  storageBucket: "new-lizart-io.appspot.com",
  messagingSenderId: "266681165990",
  appId: "1:266681165990:web:896e0d95e01e1137166c67",
  measurementId: "G-W55XNRGE5Q"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app1);
