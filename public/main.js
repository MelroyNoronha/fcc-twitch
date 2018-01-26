
let twitchApiUrl = "https://wind-bow.gomix.me/twitch-api/";

const dataDiv = document.getElementById("dataDiv");

let twitchStreamers = [
    "dreamhackcs",
    "skyzhar",
    "freecodecamp",
    "faceittv",
    "terakilobyte",
    "robotcaleb",
    "sheevergaming",
    "esl_sc2",
    "ogamingsc2",
    "jacksofamerica"
];

let twitchStreamerIds = [];

function getUserIds() {
    twitchStreamers.forEach((currentStreamer) => {
        fetchJsonp(twitchApiUrl + "users/" + currentStreamer)
            .then(response => response.json())
            .then(data => twitchStreamerIds.push(data._id))
    })
    return twitchStreamerIds;
}
getUserIds();

//Task: use userId to get stream data || Status: currently unfinsihed
function getStreamData() {
    for (var currentId in twitchStreamerIds) {
        console.log(currentId);
    }
}

