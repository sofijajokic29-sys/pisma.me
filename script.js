let currentPerson = "";

const letters = {
  caki: {
    password: "pinkrose",
    text: "Draga Caki 💌\nYou are very special to me..."
  },
  ana: {
    password: "starlight",
    text: "Draga Lana 💌\nThank you for always being kind."
  },
  luka: {
    password: "moon123",
    text: "Draga Saro 💌\nI appreciate our friendship."
  },
caki: {
    password: "unicornfairy",
    text: "Draga Elena 💌\nYou are very special to me..."
  }
};

function openEnvelope(name) {
  currentPerson = name;
  document.getElementById("passwordBox").classList.remove("hidden");
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === letters[currentPerson].password) {
    document.getElementById("letter").innerText =
      letters[currentPerson].text;

    document.getElementById("letter").classList.remove("hidden");
  } else {
    alert("Wrong password 💔");
  }
}
