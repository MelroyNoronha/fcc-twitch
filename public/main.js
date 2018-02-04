
const displayDiv = document.getElementById('displayDiv')

let twitchApiUrl = 'https://wind-bow.gomix.me/twitch-api/'
let twitchStreamers = [
  'freeCodeCamp',
  'Streamerhouse',
  'Monstercat',
  'Doublelift',
  'funfunfunction',
  'playBATTLEGROUNDS',
  'loltyler1',
  'Gosu'
]
let requiredData = []
let rawData =
  twitchStreamers.map((streamer) => {
    let fetchedData = fetchJsonp(twitchApiUrl + 'streams/' + streamer) // used fetchJsonp to make get cross origin data
      .then(response => response.json())
      .then(data => data)
    return fetchedData
  })

Promise.all(rawData).then((rawData) => {
  console.log(rawData)// delete later
  rawData.forEach((item, index) => {
    if (item.stream == null) {
      requiredData.push({ name: twitchStreamers[index], status: 'not streaming' })
    } else {
      requiredData.push({ name: twitchStreamers[index], status: 'streaming', link: item.stream.channel.url })
    }
  })

  displayDiv.innerHTML = ``
  requiredData.forEach((item) => {
    if (item.status === 'streaming') {
      displayDiv.innerHTML +=
        `<div class='listItem streaming'>
          ${item.name} <br>
          <a href="${item.link}" target="_blank" class="watchBtn">Watch stream</a>
        </div>`
    } else {
      displayDiv.innerHTML +=
        `<div class='listItem not-streaming'>
          ${item.name} <br> ${item.status}
        </div>`
    }
  })
})
