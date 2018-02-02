
let twitchApiUrl = 'https://wind-bow.gomix.me/twitch-api/'
let twitchStreamers = [
  'Streamerhouse',
  'Monstercat',
  'freeCodeCamp',
  'Doublelift',
  'funfunfunction',
  'playBATTLEGROUNDS',
  'loltyler1',
  'Gosu'
]
let requiredData = []
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
      requiredData.push({ name: twitchStreamers[index], status: 'not streaming' })
    } else {
      requiredData.push({ name: twitchStreamers[index], status: 'streaming', link: item.stream.channel.url })
    }
  })
  console.log(showStreaming(requiredData))
  console.log(showNotStreaming(requiredData))
})

function showStreaming (data) {
  let streaming = data.filter(item => item.status === 'streaming')
  return streaming
}

function showNotStreaming (data) {
  let notStreaming = data.filter(item => item.status === 'not streaming')
  return notStreaming
}
