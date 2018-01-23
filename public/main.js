let twitchApiUrl = "https://wind-bow.gomix.me/twitch-api";

fetchJsonp(twitchApiUrl)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    })
