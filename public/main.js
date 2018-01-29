
let twitchApiUrl = 'https://wind-bow.gomix.me/twitch-api/'

let twitchStreamers = [
  'Streamerhouse',
  'Monstercat',
  'freeCodeCamp'
]

let twitchStreamersStatus = {}

let streamData = []

twitchStreamers.forEach((streamer) => {
  fetchJsonp(twitchApiUrl + 'streams/' + streamer)
    .then((response) => response.json())
    .then((data) => {
      streamData.push(data)
      return streamData
    })
    .then((streamData) => {
      checkStreamStatus(streamData)
    })
})

function checkStreamStatus (data) {
  let i = 0
  for (i in data) {
    if (data[i].stream == null) {
      twitchStreamersStatus[twitchStreamers[i]] = 'offline'
    } else {
      twitchStreamersStatus[twitchStreamers[i]] = 'online'
    }
  }
  console.log(twitchStreamersStatus)
}
