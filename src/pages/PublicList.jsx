import { db } from "../firebase.js";
import { collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export default function PublicList() {
  onSnapshot(
    query(collection(db, "orders"), orderBy("createdAt", "desc")),
    (snap) => {
      let html = "";
      snap.forEach((d, i) => {
        const o = d.data();
        html += `<tr>
          <td>${i + 1}</td>
          <td>${o.robuxType}</td>
          <td>${o.amount}</td>
          <td>${o.status}</td>
        </tr>`;
      });
      document.getElementById("tbody").innerHTML = html;
    }
  );

  return `
    <div class="container">
      <div class="card">
        <h2>List Order (Publik)</h2>
        <table>
          <thead>
            <tr><th>No</th><th>Jenis</th><th>Nominal</th><th>Status</th></tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
    </div>
  `;
}
