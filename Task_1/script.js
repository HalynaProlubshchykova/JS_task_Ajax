function sendVote() {
  const button = document.getElementById("btn");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "index.html", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const currentDate = new Date();
      button.innerHTML = "Your vote was accepted: " + currentDate;
    }
  };

  xhr.send();
}
