async function fetchUserData() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];
    return user;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

function renderUserInfo(user) {
  const userInfoContainer = document.getElementById("userInfo");
  userInfoContainer.innerHTML = `
    <img src="${user.picture.large}" alt="Avatar">
    <p>Name: ${user.name.first} ${user.name.last}</p>
    <p>Age: ${user.dob.age}</p>
    <p>Gender: ${user.gender}</p>
    <p>Country: ${user.location.country}</p>
    <p>Login: ${user.login.username}</p>
    <p>Password: ${user.login.password}</p>
    <p>Email: ${user.email}</p>
  `;
}

async function loadUserData() {
  const user = await fetchUserData();
  if (user) {
    renderUserInfo(user);
  }
}

loadUserData();
