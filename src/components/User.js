import axios from "axios";

const User = async () => {
  const res = await axios.get("https://randomuser.me/api");
  const user = res.data.results[0];

  const template = `
  <div class="card">
  <img src="${user.picture.large}" alt="User"/>
  <div class="card-body">
  <h3>${user.name.title + " " + user.name.first + " " + user.name.last}</h3>
  <ul>
  <li>${user.email}</li>
  <li>${user.phone}</li>
  <li>${user.location.city}</li>
  </ul>
  </div>
  </div>
  `;

  return template;
};

export default User;
