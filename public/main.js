
let twitchApiUrl = 'https://wind-bow.gomix.me/twitch-api/'
let twitchStreamers = [
  'Streamerhouse',
  'Monstercat',
  'freeCodeCamp',
  'Doublelift',
  'funfunfunction',
  'playBATTLEGROUNDS',
  'loltyler1'
]
let twitchStreamersStatus = {}
let rawData =
  twitchStreamers.map((streamer) => {
    let fetchedData = fetchJsonp(twitchApiUrl + 'streams/' + streamer)
      .then(response => response.json())
      .then(data => data)
    return fetchedData
  })

Promise.all(rawData).then((rawData) => {
  rawData.forEach((item, index) => {
    if (item.stream == null) {
      twitchStreamersStatus[twitchStreamers[index]] = 'not streaming'
    } else {
      twitchStreamersStatus[twitchStreamers[index]] = 'streaming'
    }
  })
  console.log(twitchStreamersStatus)
})
