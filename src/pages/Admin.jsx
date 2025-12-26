import { auth, provider, db } from "../firebase.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const ADMIN = "dinijanuari23@gmail.com";

export default function Admin() {
  async function login() {
    const res = await signInWithPopup(auth, provider);
    if (res.user.email !== ADMIN) alert("Bukan admin");
  }

  async function add() {
    await addDoc(collection(db, "orders"), {
      robuxType: "REGULER",
      amount: "80 Robux",
      status: "PENDING",
      createdAt: serverTimestamp(),
      completedAt: serverTimestamp()
    });
  }

  return `
    <div class="container">
      <div class="card">
        <h2>Admin</h2>
        <button onclick="(${login})()">Login Google</button>
        <button onclick="(${add})()">Add Order</button>
      </div>
    </div>
  `;
}
