console.log("Firebase loaded successfully");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyABnjIzryK5CsbM1zVFantkE1ljNv8HJ24",
  authDomain: "personal-profile-3d16b.firebaseapp.com",
  projectId: "personal-profile-3d16b",
  storageBucket: "personal-profile-3d16b.firebasestorage.app",
  messagingSenderId: "407791549354",
  appId: "1:407791549354:web:4e4fee4bf195b53ff489d3",
  measurementId: "G-WXBKX5WR6Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;


  try {
    await addDoc(collection(db, "messages"), {
      name:
    document. getElementById("name").value,
      email:
    document. getElementById("email").value,
      message:
    document. getElementById("message").value,
      date: new Date()
    });

    alert("Message sent successfully!");
    form.reset();
  } catch (error) {
    alert("Failed to send message.");
    console.error(error);
  }
});