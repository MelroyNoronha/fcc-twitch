
let twitchApiUrl = 'https://wind-bow.gomix.me/twitch-api/'

let twitchStreamers = [
  'Streamerhouse',
  'Monstercat',
  'freeCodeCamp',
  'Doublelift',
  'funfunfunction'
]

twitchStreamers.forEach((streamer) => {
  fetchJsonp(twitchApiUrl + 'streams/' + streamer)
    .then((response) => response.json())
    .then((data) => {
      let twitchStreamersStatus = {}
      if (data.stream == null) {
        twitchStreamersStatus[streamer] = 'offline'
      } else {
        twitchStreamersStatus[streamer] = 'online'
      }
      return twitchStreamersStatus
    })
    .then(twitchStreamersStatus => console.log(twitchStreamersStatus))
})
