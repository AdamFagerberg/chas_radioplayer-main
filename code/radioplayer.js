// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const channelsEl = document.querySelector("#channels");

async function getRadio() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const radio = await response.json();

  const channels = radio.channels;

  console.log(radio);

  channels.forEach((station) => {
    const radioPlayer2 = document.createElement("div");

    radioPlayer2.setAttribute("class", "radioContainer");

    radioPlayer2.innerHTML = `<img class=image src=${station.image}><p class=tagline>${station.tagline}</p><h1 class=title>${station.name}</h1><audio class=audioplayer src=${station.liveaudio.url} controls>`;

    radioPlayer2.style.backgroundColor = `#${station.color}`;

    channelsEl.appendChild(radioPlayer2);
  });
}

getRadio();
