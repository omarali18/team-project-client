const firebaseConfig = {
    // apiKey: "AIzaSyBFj7ge_BhE1qvWAIu9yhTeAVmBvU0L2lI",
    // authDomain: "first-team--project.firebaseapp.com",
    // projectId: "first-team--project",
    // storageBucket: "first-team--project.appspot.com",
    // messagingSenderId: "223921605870",
    // appId: "1:223921605870:web:f6c195aca054f9285577ff"

     apiKey: process.env.REACT_APP_API_KEY,
     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
     projectId: process.env.REACT_APP_PROJECT_ID,
     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
     appId: process.env.REACT_APP_APP_ID,
  };

  export default firebaseConfig


//  apiKey: process.env.REACT_APP_API_KEY,
//  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//  projectId: process.env.REACT_APP_PROJECT_ID,
//  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//  appId: process.env.REACT_APP_APP_ID,