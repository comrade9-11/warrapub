/* VARIABLES */

/* ROOM */
const headless = false;
const roomName = 'Futsal 4v4 | Gold';
const maxPlayers = 24;
const roomPublic = headless ? false : true;
const token = "x"; // Insert token here
const roomGeo = {"code": "gb", "lat": 50.389767789311, "lon": 3.48716683321}; // 50.883837, 4.382505

//3def system settings
const def3Mess = false;

//webhook settings
const webhookBlock = false;
const masterPasswordAuth = true;
let roomWebhook = 'https://discord.com/api/webhooks/1101561090049056808/VnNltpKmJoBvNjwGaL5Z3fhgAkFsnmhtiQx8DEr54c1c56JoPr3xSgPjI-5iFH01yQbY'; // this webhook is used to send the details of the room (chat, join, leave) ; it should be in a private discord channel
let gameWebhook = 'https://discord.com/api/webhooks/1113097347853983775/tuUx0E6L6VNOgGv4AB3rnTLS_Fd5YwZ_G5biy9khNB2HbA8Rm63Mc83EYipawzNk9e2a'; // this webhook is used to send the summary of the games ; it should be in a public discord channel
if (headless || webhookBlock) {
    roomWebhook = '';
    gameWebhook = '';
}

let fetchRecordingletiable = true;
let timeLimit = 3;
let scoreLimit = 3;

/*
if (typeof token == 'string' && token.length == 39) {
    gameConfig.token = token;
}
*/

const room = HBInit({
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: false,
    geo: roomGeo,
    noPlayer: true,
});

const trainingMap = `{
	"name": "EEF training",
	"width": 465,
	"height": 230,
	"cameraWidth": 0,
	"cameraHeight": 0,
	"maxViewWidth": 0,
	"cameraFollow": "ball",
	"spawnDistance": 150,
	"redSpawnPoints": [],
	"blueSpawnPoints": [],
	"canBeStored": false,
	"kickOffReset": "full",
	"bg": {
		"color": "323847",
		"height": 200,
		"width": 400
	},
	"traits": {
		"ballArea": {
			"vis": false,
			"bCoef": 1,
			"cMask": [
				"ball"
			]
		},
		"goalPost": {
			"radius": 8,
			"invMass": 0,
			"bCoef": 0.5
		},
		"goalNet": {
			"vis": true,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			]
		},
		"kickOffBarrier": {
			"vis": false,
			"bCoef": 0.1,
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"cMask": [
				"red",
				"blue"
			]
		}
	},
	"vertexes": [
		{
			"x": -401,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 401,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -401,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 401,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -400,
			"y": 70,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -400,
			"y": 201,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 400,
			"y": 70,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 400,
			"y": 201,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -400,
			"y": -201,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -400,
			"y": -70,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 400,
			"y": -201,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 400,
			"y": -70,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -436,
			"y": -70,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -400,
			"y": -70,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -436,
			"y": 70,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -400,
			"y": 70,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -435,
			"y": -71,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -435,
			"y": 71,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": 435,
			"y": -71,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 435,
			"y": 71,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 436,
			"y": -70,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 400,
			"y": -70,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 436,
			"y": 70,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 400,
			"y": 70,
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": -400,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC",
			"curve": 0
		},
		{
			"x": -400,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC",
			"curve": 0
		},
		{
			"x": 400,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": 400,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": -200,
			"y": -198.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": -200,
			"y": 198.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 200,
			"y": -198.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763",
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 200,
			"y": 198.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763",
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -398.5,
			"y": -100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -339,
			"y": -100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -398.5,
			"y": 100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -339,
			"y": 100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -340,
			"y": -101,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": -340,
			"y": 101,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 340,
			"y": -101,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 340,
			"y": 101,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 339,
			"y": -100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": 398.5,
			"y": -100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": 339,
			"y": 100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": 398.5,
			"y": 100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -270,
			"y": 2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": -270,
			"y": -2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": 270,
			"y": 2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": 270,
			"y": -2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": 0,
			"y": -230,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": -80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": 80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false
		},
		{
			"x": 0,
			"y": 230,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false
		},
		{
			"x": 0,
			"y": 80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "0A1524"
		},
		{
			"x": 0,
			"y": -80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "0A1524"
		},
		{
			"x": 0,
			"y": -80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": 80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": -81,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": 81,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "f09ec9"
		},
		{
			"x": -402,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A"
		},
		{
			"x": -402,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A"
		},
		{
			"x": -398,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A"
		},
		{
			"x": -398,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A"
		},
		{
			"x": 398,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A",
			"curve": 0
		},
		{
			"x": 398,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A",
			"curve": 0
		},
		{
			"x": 402,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A",
			"curve": 0
		},
		{
			"x": 402,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A",
			"curve": 0
		},
		{
			"x": 0,
			"y": 2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": -2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": -198.5,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "151a1e",
			"vis": true
		},
		{
			"x": 0,
			"y": -83,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "151a1e",
			"vis": true
		},
		{
			"x": 0,
			"y": 83,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "151a1e",
			"vis": true
		},
		{
			"x": 0,
			"y": 198.5,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "151a1e",
			"vis": true
		}
	],
	"segments": [
		{
			"v0": 0,
			"v1": 1,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -200
		},
		{
			"v0": 2,
			"v1": 3,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"y": 200
		},
		{
			"v0": 4,
			"v1": 5,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"x": -400
		},
		{
			"v0": 6,
			"v1": 7,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"x": 400
		},
		{
			"v0": 8,
			"v1": 9,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10
		},
		{
			"v0": 10,
			"v1": 11,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10
		},
		{
			"v0": 12,
			"v1": 13,
			"color": "ff6666",
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10
		},
		{
			"v0": 14,
			"v1": 15,
			"color": "ff6666",
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"y": 70
		},
		{
			"v0": 16,
			"v1": 17,
			"color": "ff6666",
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10
		},
		{
			"v0": 18,
			"v1": 19,
			"color": "6666ff",
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"x": 435
		},
		{
			"v0": 20,
			"v1": 21,
			"color": "6666ff",
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10
		},
		{
			"v0": 22,
			"v1": 23,
			"color": "6666ff",
			"bCoef": 1.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"y": 70
		},
		{
			"v0": 24,
			"v1": 25,
			"curve": 0,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -400
		},
		{
			"v0": 26,
			"v1": 27,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 400
		},
		{
			"v0": 28,
			"v1": 29,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -200
		},
		{
			"v0": 30,
			"v1": 31,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 200,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						200,
						-198.5
					],
					"b": [
						200,
						198.5
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		},
		{
			"v0": 32,
			"v1": 33,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": -100
		},
		{
			"v0": 34,
			"v1": 35,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": 100
		},
		{
			"v0": 36,
			"v1": 37,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			]
		},
		{
			"v0": 38,
			"v1": 39,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 340
		},
		{
			"v0": 40,
			"v1": 41,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": -100
		},
		{
			"v0": 42,
			"v1": 43,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": 100
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -270
		},
		{
			"v0": 45,
			"v1": 44,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -270
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -270
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 270
		},
		{
			"v0": 47,
			"v1": 46,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 270
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 270
		},
		{
			"v0": 48,
			"v1": 49,
			"vis": false,
			"color": "818FB0",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 50,
			"v1": 51,
			"vis": false,
			"color": "818FB0",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 52,
			"v1": 53,
			"curve": 180,
			"vis": false,
			"color": "0A1524",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 54,
			"v1": 55,
			"curve": 180,
			"vis": false,
			"color": "f09ec9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 56,
			"v1": 57,
			"curve": -180,
			"color": "f09ec9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 0
		},
		{
			"v0": 57,
			"v1": 56,
			"curve": -180,
			"color": "f09ec9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 0
		},
		{
			"v0": 66,
			"v1": 67,
			"color": "f09ec9",
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			]
		},
		{
			"v0": 68,
			"v1": 69,
			"vis": true,
			"color": "151a1e",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 70,
			"v1": 71,
			"vis": true,
			"color": "151a1e",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		}
	],
	"goals": [],
	"discs": [
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-400,
				-70
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-400,
				70
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				400,
				-70
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				400,
				70
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		}
	],
	"planes": [
		{
			"normal": [
				0,
				1
			],
			"dist": -230,
			"cMask": [
				"red",
				"blue"
			],
			"_data": {
				"extremes": {
					"normal": [
						0,
						1
					],
					"dist": -230,
					"canvas_rect": [
						-702,
						-230,
						702,
						230
					],
					"a": [
						-702,
						-230
					],
					"b": [
						702,
						-230
					]
				}
			}
		},
		{
			"normal": [
				0,
				-1
			],
			"dist": -230,
			"cMask": [
				"red",
				"blue"
			],
			"_data": {
				"extremes": {
					"normal": [
						0,
						-1
					],
					"dist": -230,
					"canvas_rect": [
						-702,
						-230,
						702,
						230
					],
					"a": [
						-702,
						230
					],
					"b": [
						702,
						230
					]
				}
			}
		}
	],
	"joints": [],
	"playerPhysics": {
		"bCoef": 0,
		"acceleration": 0.11,
		"kickingAcceleration": 0.083,
		"kickStrength": 4.545
	},
	"ballPhysics": {
		"radius": 5.8,
		"bCoef": 0.412,
		"invMass": 1.5,
		"color": "FFD700"
	}
}`;
const classicMap = `{
	"name": "EEF v2",
	"width": 465,
	"height": 230,
	"cameraWidth": 0,
	"cameraHeight": 0,
	"maxViewWidth": 0,
	"cameraFollow": "ball",
	"spawnDistance": 150,
	"redSpawnPoints": [],
	"blueSpawnPoints": [],
	"canBeStored": false,
	"kickOffReset": "full",
	"bg": {
		"color": "323847",
		"height": 200,
		"width": 400
	},
	"traits": {
		"ballArea": {
			"vis": false,
			"bCoef": 1,
			"cMask": [
				"ball"
			]
		},
		"goalPost": {
			"radius": 8,
			"invMass": 0,
			"bCoef": 0.5
		},
		"goalNet": {
			"vis": true,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			]
		},
		"kickOffBarrier": {
			"vis": false,
			"bCoef": 0.1,
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"cMask": [
				"red",
				"blue"
			]
		}
	},
	"vertexes": [
		{
			"x": -401,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 401,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -401,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 401,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -400,
			"y": 70,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -400,
			"y": 201,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 400,
			"y": 70,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 400,
			"y": 201,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -400,
			"y": -201,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -400,
			"y": -70,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 400,
			"y": -201,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 400,
			"y": -70,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -436,
			"y": -70,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -400,
			"y": -70,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -436,
			"y": 70,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -400,
			"y": 70,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -435,
			"y": -71,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -435,
			"y": 71,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": 435,
			"y": -71,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 435,
			"y": 71,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 436,
			"y": -70,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 400,
			"y": -70,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 436,
			"y": 70,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 400,
			"y": 70,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": -400,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC",
			"curve": 0
		},
		{
			"x": -400,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC",
			"curve": 0
		},
		{
			"x": 400,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": 400,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": -200,
			"y": -198.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763",
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -200,
			"y": 198.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763",
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 200,
			"y": -198.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 200,
			"y": 198.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": -398.5,
			"y": -100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -339,
			"y": -100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -398.5,
			"y": 100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -339,
			"y": 100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -340,
			"y": -101,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": -340,
			"y": 101,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 340,
			"y": -101,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 340,
			"y": 101,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 339,
			"y": -100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": 398.5,
			"y": -100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": 339,
			"y": 100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": 398.5,
			"y": 100,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -270,
			"y": 2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": -270,
			"y": -2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": 270,
			"y": 2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": 270,
			"y": -2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": 0,
			"y": -230,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": -80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": 80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false
		},
		{
			"x": 0,
			"y": 230,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false
		},
		{
			"x": 0,
			"y": 80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "0A1524"
		},
		{
			"x": 0,
			"y": -80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "0A1524"
		},
		{
			"x": 0,
			"y": -80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "0A1524"
		},
		{
			"x": 0,
			"y": 80,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "0A1524"
		},
		{
			"x": 0,
			"y": -81,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": 81,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "f09ec9"
		},
		{
			"x": -402,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A"
		},
		{
			"x": -402,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A"
		},
		{
			"x": -398,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A"
		},
		{
			"x": -398,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A"
		},
		{
			"x": 398,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A",
			"curve": 0
		},
		{
			"x": 398,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A",
			"curve": 0
		},
		{
			"x": 402,
			"y": -70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A",
			"curve": 0
		},
		{
			"x": 402,
			"y": 70,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "353C4A",
			"curve": 0
		},
		{
			"x": 0,
			"y": 2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": -2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": -198.5,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "151a1e",
			"vis": true
		},
		{
			"x": 0,
			"y": -83,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "151a1e",
			"vis": true
		},
		{
			"x": 0,
			"y": 83,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "151a1e",
			"vis": true
		},
		{
			"x": 0,
			"y": 198.5,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "151a1e",
			"vis": true
		}
	],
	"segments": [
		{
			"v0": 0,
			"v1": 1,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -200
		},
		{
			"v0": 2,
			"v1": 3,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"y": 200
		},
		{
			"v0": 4,
			"v1": 5,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"x": -400
		},
		{
			"v0": 6,
			"v1": 7,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"x": 400
		},
		{
			"v0": 8,
			"v1": 9,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10
		},
		{
			"v0": 10,
			"v1": 11,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10
		},
		{
			"v0": 12,
			"v1": 13,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10
		},
		{
			"v0": 14,
			"v1": 15,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"y": 70
		},
		{
			"v0": 16,
			"v1": 17,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10
		},
		{
			"v0": 18,
			"v1": 19,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"x": 435
		},
		{
			"v0": 20,
			"v1": 21,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10
		},
		{
			"v0": 22,
			"v1": 23,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"y": 70
		},
		{
			"v0": 24,
			"v1": 25,
			"curve": 0,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -400
		},
		{
			"v0": 26,
			"v1": 27,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 400
		},
		{
			"v0": 28,
			"v1": 29,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -200,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-200,
						-198.5
					],
					"b": [
						-200,
						198.5
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		},
		{
			"v0": 30,
			"v1": 31,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 200
		},
		{
			"v0": 32,
			"v1": 33,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": -100
		},
		{
			"v0": 34,
			"v1": 35,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": 100
		},
		{
			"v0": 36,
			"v1": 37,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			]
		},
		{
			"v0": 38,
			"v1": 39,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 340
		},
		{
			"v0": 40,
			"v1": 41,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": -100
		},
		{
			"v0": 42,
			"v1": 43,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": 100
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -270
		},
		{
			"v0": 45,
			"v1": 44,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -270
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -270
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 270
		},
		{
			"v0": 47,
			"v1": 46,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 270
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 270
		},
		{
			"v0": 48,
			"v1": 49,
			"vis": false,
			"color": "818FB0",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 50,
			"v1": 51,
			"vis": false,
			"color": "818FB0",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 52,
			"v1": 53,
			"curve": 180,
			"vis": false,
			"color": "0A1524",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 54,
			"v1": 55,
			"curve": 180,
			"vis": false,
			"color": "0A1524",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 56,
			"v1": 57,
			"curve": -180,
			"color": "f09ec9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 0
		},
		{
			"v0": 57,
			"v1": 56,
			"curve": -180,
			"color": "f09ec9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 0
		},
		{
			"v0": 66,
			"v1": 67,
			"color": "f09ec9",
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			]
		},
		{
			"v0": 68,
			"v1": 69,
			"vis": true,
			"color": "151a1e",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 70,
			"v1": 71,
			"vis": true,
			"color": "151a1e",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		}
	],
	"goals": [
		{
			"p0": [
				-405.8,
				-70
			],
			"p1": [
				-405.8,
				70
			],
			"team": "red"
		},
		{
			"p0": [
				405.8,
				-70
			],
			"p1": [
				405.8,
				70
			],
			"team": "blue"
		}
	],
	"discs": [
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-400,
				-70
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-400,
				70
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				400,
				-70
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				400,
				70
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		}
	],
	"planes": [
		{
			"normal": [
				0,
				1
			],
			"dist": -230,
			"cMask": [
				"red",
				"blue"
			],
			"_data": {
				"extremes": {
					"normal": [
						0,
						1
					],
					"dist": -230,
					"canvas_rect": [
						-702,
						-230,
						702,
						230
					],
					"a": [
						-702,
						-230
					],
					"b": [
						702,
						-230
					]
				}
			}
		},
		{
			"normal": [
				0,
				-1
			],
			"dist": -230,
			"cMask": [
				"red",
				"blue"
			],
			"_data": {
				"extremes": {
					"normal": [
						0,
						-1
					],
					"dist": -230,
					"canvas_rect": [
						-702,
						-230,
						702,
						230
					],
					"a": [
						-702,
						230
					],
					"b": [
						702,
						230
					]
				}
			}
		}
	],
	"joints": [],
	"playerPhysics": {
		"bCoef": 0,
		"acceleration": 0.11,
		"kickingAcceleration": 0.083,
		"kickStrength": 4.545
	},
	"ballPhysics": {
		"radius": 5.8,
		"bCoef": 0.412,
		"invMass": 1.5,
		"color": "FFD700"
	}
}`;
const bigMap = `{
	"name": "EEF v4",
	"width": 765,
	"height": 350,
	"cameraWidth": 0,
	"cameraHeight": 0,
	"maxViewWidth": 0,
	"cameraFollow": "ball",
	"spawnDistance": 150,
	"redSpawnPoints": [],
	"blueSpawnPoints": [],
	"canBeStored": false,
	"kickOffReset": "full",
	"bg": {
		"color": "323847",
		"height": 320,
		"width": 700
	},
	"traits": {
		"ballArea": {
			"vis": false,
			"bCoef": 1,
			"cMask": [
				"ball"
			]
		},
		"goalPost": {
			"radius": 8,
			"invMass": 0,
			"bCoef": 0.5
		},
		"goalNet": {
			"vis": true,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			]
		},
		"kickOffBarrier": {
			"vis": false,
			"bCoef": 0.1,
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"cMask": [
				"red",
				"blue"
			]
		}
	},
	"vertexes": [
		{
			"x": -701,
			"y": -320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 701,
			"y": -320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -701,
			"y": 320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 701,
			"y": 320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -700,
			"y": 85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -700,
			"y": 321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 700,
			"y": 85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 700,
			"y": 321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -700,
			"y": -321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -700,
			"y": -85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 700,
			"y": -321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 700,
			"y": -85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -736,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -700,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -736,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -700,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -735,
			"y": -86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -735,
			"y": 86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": 735,
			"y": -86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 735,
			"y": 86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 736,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 700,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 736,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 700,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": -700,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": -700,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": 700,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": 700,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": -360,
			"y": -350,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763",
			"_data": {
				"mirror": {}
			},
			"vis": false
		},
		{
			"x": -360,
			"y": 350,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763",
			"_data": {
				"mirror": {}
			},
			"vis": false
		},
		{
			"x": 360,
			"y": -350,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763",
			"_data": {
				"mirror": {}
			},
			"vis": false
		},
		{
			"x": 360,
			"y": 350,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763",
			"_data": {
				"mirror": {}
			},
			"vis": false
		},
		{
			"x": -698.5,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -624,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -698.5,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -624,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -625,
			"y": -126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": -625,
			"y": 126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 625,
			"y": -126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 625,
			"y": 126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "686763"
		},
		{
			"x": 624,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": 698.5,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": 624,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": 698.5,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "686763"
		},
		{
			"x": -500,
			"y": 2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": -500,
			"y": -2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": 500,
			"y": 2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": 500,
			"y": -2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "686763"
		},
		{
			"x": 0,
			"y": -350,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false
		},
		{
			"x": 0,
			"y": 350,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "f09ec9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "f09ec9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "f09ec9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "f09ec9",
			"vis": true
		},
		{
			"x": 0,
			"y": -86,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"c1"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": 86,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"c1"
			],
			"color": "f09ec9"
		},
		{
			"x": -698,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": -698,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": -702,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": -702,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 698,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 698,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 702,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 702,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 0,
			"y": -2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": 2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "f09ec9"
		},
		{
			"x": 0,
			"y": -318.5,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "151a1e"
		},
		{
			"x": 0,
			"y": -88,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "151a1e"
		},
		{
			"x": 0,
			"y": 88,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "151a1e"
		},
		{
			"x": 0,
			"y": 318.5,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "151a1e"
		},
		{
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"x": 360,
			"y": 318.5,
			"_data": {
				"mirror": {}
			},
			"vis": true
		},
		{
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"x": 360,
			"y": -318.5,
			"_data": {
				"mirror": {}
			},
			"vis": true
		},
		{
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"x": -360,
			"y": 318.5,
			"_data": {
				"mirror": {}
			},
			"vis": true
		},
		{
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"x": -360,
			"y": -318.5,
			"_data": {
				"mirror": {}
			},
			"vis": true
		}
	],
	"segments": [
		{
			"v0": 0,
			"v1": 1,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -320
		},
		{
			"v0": 2,
			"v1": 3,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"y": 320,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-701,
						320
					],
					"b": [
						701,
						320
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		},
		{
			"v0": 4,
			"v1": 5,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"x": -700
		},
		{
			"v0": 6,
			"v1": 7,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"x": 700
		},
		{
			"v0": 8,
			"v1": 9,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"x": -700
		},
		{
			"v0": 10,
			"v1": 11,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"x": 700
		},
		{
			"v0": 12,
			"v1": 13,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10
		},
		{
			"v0": 14,
			"v1": 15,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"y": 70
		},
		{
			"v0": 16,
			"v1": 17,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"x": -735
		},
		{
			"v0": 18,
			"v1": 19,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"x": 735
		},
		{
			"v0": 20,
			"v1": 21,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10
		},
		{
			"v0": 22,
			"v1": 23,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"y": 70
		},
		{
			"v0": 24,
			"v1": 25,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -700
		},
		{
			"v0": 26,
			"v1": 27,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 700
		},
		{
			"v0": 28,
			"v1": 29,
			"color": "686763",
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"x": -360,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-360,
						-350
					],
					"b": [
						-360,
						350
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			},
			"vis": false
		},
		{
			"v0": 30,
			"v1": 31,
			"color": "686763",
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"x": 360,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						360,
						-350
					],
					"b": [
						360,
						350
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			},
			"vis": false
		},
		{
			"v0": 32,
			"v1": 33,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": -125
		},
		{
			"v0": 34,
			"v1": 35,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": 125
		},
		{
			"v0": 36,
			"v1": 37,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -625
		},
		{
			"v0": 38,
			"v1": 39,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 625
		},
		{
			"v0": 40,
			"v1": 41,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": -125
		},
		{
			"v0": 42,
			"v1": 43,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": 125
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -500
		},
		{
			"v0": 45,
			"v1": 44,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -500
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -500
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 0,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 500
		},
		{
			"v0": 47,
			"v1": 46,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 500
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 180,
			"color": "686763",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 500
		},
		{
			"v0": 48,
			"v1": 49,
			"vis": false,
			"color": "818FB0",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 50,
			"v1": 51,
			"vis": false,
			"color": "818FB0",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 52,
			"v1": 53,
			"curve": 180,
			"vis": true,
			"color": "f09ec9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 54,
			"v1": 55,
			"curve": 180,
			"vis": true,
			"color": "f09ec9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 66,
			"v1": 67,
			"color": "f09ec9",
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			]
		},
		{
			"v0": 68,
			"v1": 69,
			"vis": true,
			"color": "151a1e",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 70,
			"v1": 71,
			"vis": true,
			"color": "151a1e",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"color": "686763",
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"v0": 72,
			"v1": 73,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						360,
						318.5
					],
					"b": [
						360,
						-318.5
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			},
			"x": 360,
			"vis": true
		},
		{
			"color": "686763",
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"v0": 74,
			"v1": 75,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-360,
						318.5
					],
					"b": [
						-360,
						-318.5
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			},
			"x": -360,
			"vis": true
		}
	],
	"goals": [
		{
			"p0": [
				-705.8,
				-85
			],
			"p1": [
				-705.8,
				85
			],
			"team": "red"
		},
		{
			"p0": [
				705.8,
				-85
			],
			"p1": [
				705.8,
				85
			],
			"team": "blue"
		}
	],
	"discs": [
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-700,
				-85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-700,
				85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				700,
				-85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				700,
				85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		}
	],
	"planes": [
		{
			"normal": [
				0,
				1
			],
			"dist": -350,
			"cMask": [
				"red",
				"blue"
			],
			"y": -350,
			"_data": {
				"extremes": {
					"normal": [
						0,
						1
					],
					"dist": -350,
					"canvas_rect": [
						-446.3701523755323,
						-204.22163834174683,
						446.3701523755323,
						204.22163834174683
					],
					"a": [
						-446.3701523755323,
						-350
					],
					"b": [
						446.3701523755323,
						-350
					]
				},
				"mirror": {}
			}
		},
		{
			"normal": [
				0,
				-1
			],
			"dist": -350,
			"cMask": [
				"red",
				"blue"
			],
			"y": 350,
			"_data": {
				"extremes": {
					"normal": [
						0,
						-1
					],
					"dist": -350,
					"canvas_rect": [
						-446.3701523755323,
						-204.22163834174683,
						446.3701523755323,
						204.22163834174683
					],
					"a": [
						-446.3701523755323,
						350
					],
					"b": [
						446.3701523755323,
						350
					]
				}
			}
		}
	],
	"playerPhysics": {
		"bCoef": 0,
		"acceleration": 0.11,
		"kickingAcceleration": 0.083,
		"kickStrength": 4.545,
		"radius": 15,
		"invMass": 0.5,
		"damping": 0.96,
		"cGroup": [
			"red",
			"blue"
		],
		"gravity": [
			0,
			0
		],
		"kickingDamping": 0.96,
		"kickback": 0
	},
	"ballPhysics": {
		"radius": 5.8,
		"bCoef": 0.412,
		"invMass": 1.5,
		"color": "FFD700",
		"cMask": [
			"all"
		],
		"damping": 0.99,
		"gravity": [
			0,
			0
		],
		"cGroup": [
			"ball"
		]
	},
	"joints": []
}`;
let currentStadium = 'training';
//let bigMapObj = JSON.parse(trainingMap);

room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
room.setKickRateLimit(6, 0, 0);
let masterPassword = 10000 + getRandomInt(90000);
let roomPassword = '';

/* OBJECTS */
class Goal {
    constructor(time, team, striker, assist) {
        this.time = time;
        this.team = team;
        this.striker = striker;
        this.assist = assist;
    }
}

class Game {
    constructor() {
        this.date = Date.now();
        this.scores = room.getScores();
        this.playerComp = getStartingLineups();
        this.goals = [];
        this.rec = room.startRecording();
        this.touchArray = [];
    }
}

class PlayerComposition {
    constructor(player, auth, timeEntry, timeExit) {
        this.player = player;
        this.auth = auth;
        this.timeEntry = timeEntry;
        this.timeExit = timeExit;
        this.inactivityTicks = 0;
        this.GKTicks = 0;
    }
}

class MutePlayer {
    constructor(name, id, auth) {
        this.id = MutePlayer.incrementId();
        this.name = name;
        this.playerId = id;
        this.auth = auth;
        this.unmuteTimeout = null;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    setDuration(minutes) {
        this.unmuteTimeout = setTimeout(() => {
            room.sendAnnouncement(
                `You have been unmuted.`,
                this.playerId,
                announcementColor,
                "bold",
                HaxNotification.CHAT
            );
            this.remove();
        }, minutes * 60 * 1000);
        muteArray.add(this);
    }

    remove() {
        this.unmuteTimeout = null;
        muteArray.removeById(this.id);
    }
}

class MuteList {
    constructor() {
        this.list = [];
    }

    add(mutePlayer) {
        this.list.push(mutePlayer);
        return mutePlayer;
    }

    getById(id) {
        let index = this.list.findIndex(mutePlayer => mutePlayer.id === id);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    getByPlayerId(id) {
        let index = this.list.findIndex(mutePlayer => mutePlayer.playerId === id);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    getByAuth(auth) {
        let index = this.list.findIndex(mutePlayer => mutePlayer.auth === auth);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    removeById(id) {
        let index = this.list.findIndex(mutePlayer => mutePlayer.id === id);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }

    removeByAuth(auth) {
        let index = this.list.findIndex(mutePlayer => mutePlayer.auth === auth);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
}

class BallTouch {
    constructor(player, time, goal, position) {
        this.player = player;
        this.time = time;
        this.goal = goal;
        this.position = position;
    }
}

class HaxStatistics {
    constructor(playerName = '') {
        this.playerName = playerName;
        this.games = 0;
        this.wins = 0;
        this.winrate = '0.00%';
        this.playtime = 0;
        this.goals = 0;
        this.assists = 0;
        this.CS = 0;
        this.ownGoals = 0;
    }
}

/* PLAYERS */
const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const State = { PLAY: 0, PAUSE: 1, STOP: 2 };
const Role = { PLAYER: 0, ADMIN_TEMP: 1, ADMIN_PERM: 2, MASTER: 3 };
const HaxNotification = { NONE: 0, CHAT: 1, MENTION: 2 };
const Situation = { STOP: 0, KICKOFF: 1, PLAY: 2, GOAL: 3 };
let gameState = State.STOP;
let playSituation = Situation.STOP;
let goldenGoal = false;
let playersAll = [];
let players = [];
let teamRed = [];
let teamBlue = [];
let teamSpec = [];
let teamRedStats = [];
let teamBlueStats = [];
let banList = [];

/* STATS */
let possession = [0, 0];
let actionZoneHalf = [0, 0];
let lastWinner = Team.SPECTATORS;
let streak = 0;

/* AUTH */
let authArray = [];
let adminList = [
    //['nSjaaoKofSvRAGa0LqAn9ibsd4i44ZhTVFMQsP8unxo', 'kenzo'],
    ['gsQy4UsLdYNSENdFLo75Nm0mhtK6DQZ4xurK-0s_224', 'lonic'],
    ['szYMRXq8UNuYu8SCaYlgACpDMaSE16qTMC1MHtF22aI', 'Walter White']
	//['ffrkheHkC8K7qdLqrtzXHh4G6WDWTuIYmZ3qlD_3IaQ', 'Gabriel']
];
let masterList = [
    '2znUsLSqKuiOpr-SYHqxJOdDhrfOBlEXX3emPKiQpnU', //dar
    'LK5stJmmDX2d0beMec8gQQtFQDSFFLG5f11WuZRBSpA' //phar
];

/* OPTIONS */
let drawTimeLimit = Infinity;
let teamSize = 4;
let maxAdmins = 0;
let disableBans = false;
let debugMode = false;
let afkLimit = debugMode ? Infinity : 21;
let defaultSlowMode = 0.5;
let chooseModeSlowMode = 1;
let slowMode = defaultSlowMode;
let SMSet = new Set();
let hideClaimMessage = true;
let mentionPlayersUnpause = true;

/* GAME */
let lastTouches = Array(2).fill(null);
let lastTeamTouched;
let speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
let ballSpeed = 0;
let playerRadius = 15;
let ballRadius = 10;
let triggerDistance = playerRadius + ballRadius + 0.01;

/* COLORS */
let welcomeColor = 0x5c4e9e;
let announcementColor = 0xffefd6;
let infoColor = 0xbebebe;
let privateMessageColor = 0xffc933;
let redColor = 0xff4c4c;
let blueColor = 0x62cbff;
let warningColor = 0xffa135;
let errorColor = 0xa40000;
let successColor = 0x75ff75;
let defaultColor = null;

/* AUXILIARY */
let checkTimeletiable = false;
let checkStadiumletiable = true;
let endGameletiable = false;
let cancelGameletiable = false;
let kickFetchletiable = false;
let chooseMode = false;
let timeOutCap;
let capLeft = false;
let redCaptainChoice = '';
let blueCaptainChoice = '';
let chooseTime = 20;
let AFKSet = new Set();
let AFKMinSet = new Set();
let AFKCooldownSet = new Set();
let minAFKDuration = 0;
let maxAFKDuration = 30;
let AFKCooldown = 0;
let muteArray = new MuteList();
let muteDuration = 5;
let removingPlayers = false;
let insertingPlayers = false;
let stopTimeout;
let startTimeout;
let unpauseTimeout;
let removingTimeout;
let insertingTimeout;
let emptyPlayer = {
    id: 0,
};

class Text {
    open(playerId = undefined) {
        room.sendAnnouncement(`┌──────────────────────────────────────────────────────┐`, playerId, 0xff0000, 'normal', 0);
    }
    close(playerId = undefined) {
        room.sendAnnouncement(`└──────────────────────────────────────────────────────┘`, playerId, 0xff0000, 'normal', 0);
    }
    info(mess, playerId = undefined) {
        room.sendAnnouncement(`[Info] ${mess}`, playerId, 0x1490d9, 'normal', 0);
    }
    impInfo(mess, playerId = undefined) {
        room.sendAnnouncement(`[Info] ${mess}`, playerId, 0x00ff00, 'bold', 0);
    }
    cl(text) {
        console.log(text);
    }
}
const text = new Text();

//3def system
let redLine = -362;
let blueLine = 362;
let maxDefenders = 3;
let redDefenders = [];
let blueDefenders = [];
let attackers = [[], []];

function handleDef() {
    let oldDefenders = [JSON.stringify(redDefenders.map((p) => p.id)), JSON.stringify(blueDefenders.map((p) => p.id))];
    redDefenders = redDefenders.filter(p => room.getPlayer(p.id) !== null && room.getPlayer(p.id).team == 1);
    blueDefenders = blueDefenders.filter(p => room.getPlayer(p.id) !== null && room.getPlayer(p.id).team == 2);
    if (oldDefenders[0] != JSON.stringify(redDefenders.map((p) => p.id)) && redDefenders.length < maxDefenders) {
        for (let j = 0; j < attackers[0].length; j++) {
            room.setPlayerDiscProperties(attackers[0][j].id, { cGroup: room.CollisionFlags.red });
        }
    }
    if (oldDefenders[1] != JSON.stringify(blueDefenders.map((p) => p.id)) && blueDefenders.length < maxDefenders) {
        for (let j = 0; j < attackers[1].length; j++) {
            room.setPlayerDiscProperties(attackers[1][j].id, { cGroup: room.CollisionFlags.blue });
        }
    }
    let arr = [[], []];
    for (let i = 0; i < teamRed.length; i++) {
        if (teamRed[i].position !== null && teamRed[i].position.x <= redLine + playerRadius - 0.01) {
            if (redDefenders.find(a => a.id == teamRed[i].id) === undefined) {
                arr[0].push(teamRed[i]);
            }
        }
        else {
            if (redDefenders.find(a => a.id == teamRed[i].id) !== undefined) {
                redDefenders = redDefenders.filter(a => a.id !== teamRed[i].id);
                if (redDefenders.length < maxDefenders) {
                    for (let j = 0; j < attackers[0].length; j++) {
                        room.setPlayerDiscProperties(attackers[0][j].id, { cGroup: room.CollisionFlags.red });
						if(def3Mess) {
							room.sendAnnouncement(
								`[3def system] now you can join the defense`,
								attackers[0][j].id,
								0xf53131,
								'normal',
								null
							);
						}
                    }
                }
            }
        }
    }
    arr[0].sort((a, b) => a.position.x - b.position.x);
    for (let i = 0; i < arr[0].length; i++) {
        if (redDefenders.length < maxDefenders) {
            redDefenders.push(arr[0][i]);
            if (redDefenders.length === maxDefenders) {
                attackers[0] = teamRed.filter(a => !redDefenders.map(b => b.id).includes(a.id));
                attackers[0].forEach(a => {
                    room.setPlayerDiscProperties(a.id, { cGroup: room.CollisionFlags.red | room.CollisionFlags.c0 });
					if(def3Mess) {
						room.sendAnnouncement(
							`[3def system] go attack`,
							a.id,
							0xf53131,
							'normal',
							null
						);
					}
                });
                break;
            }
        }
    }
    for (let i = 0; i < teamBlue.length; i++) {
        if (teamBlue[i].position !== null && teamBlue[i].position.x >= blueLine - playerRadius + 0.01) {
            if (blueDefenders.find(a => a.id == teamBlue[i].id) === undefined) {
                arr[1].push(teamBlue[i]);
            }
        }
        else {
            if (blueDefenders.find(a => a.id == teamBlue[i].id) !== undefined) {
                blueDefenders = blueDefenders.filter(a => a.id !== teamBlue[i].id);
                if (blueDefenders.length < maxDefenders) {
                    for (let j = 0; j < attackers[1].length; j++) {
                        room.setPlayerDiscProperties(attackers[1][j].id, { cGroup: room.CollisionFlags.blue });
                        if(def3Mess) {
							room.sendAnnouncement(
								`[3def system] now you can join the defense`,
								attackers[1][j].id,
								0x283fed,
								'normal',
								null
							);
						}
                    }
                }
            }
        }
    }
    arr[1].sort((a, b) => a.position.x - b.position.x);
    for (let i = 0; i < arr[1].length; i++) {
        if (blueDefenders.length < maxDefenders) {
            blueDefenders.push(arr[1][i]);
            if (blueDefenders.length === maxDefenders) {
                attackers[1] = teamBlue.filter(a => !blueDefenders.map(b => b.id).includes(a.id));
                attackers[1].forEach(a => {
                    room.setPlayerDiscProperties(a.id, { cGroup: room.CollisionFlags.blue | room.CollisionFlags.c1 });
                    if(def3Mess) {
						room.sendAnnouncement(
							`[3def system] go attack`,
							a.id,
							0x283fed,
							'normal',
							null
						);
					}
                });
                break;
            }
        }
    }
}

/* COMMANDS */
let commands = {
    help: {
        aliases: ['commands'],
        roles: Role.PLAYER,
        desc: `
    This command shows all the available commands. It also can show the description of a command in particular.
Example: \'!help bb\' will show the description of the \'bb\' command.`,
        function: helpCommand,
    },
    claim: {
        aliases: [],
        roles: Role.PLAYER,
        desc: false,
        function: masterCommand,
    },
    write: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: false,
        function: writeCommand,
    },
    afk: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command makes you go AFK.
    It has constraints: 1 minute minimum of AFK time, 5 minutes maximum and 10 minutes cooldown.`,
        function: afkCommand,
    },
    afks: {
        aliases: ['afklist'],
        roles: Role.PLAYER,
        desc: `
        This command shows all the players that are AFK.`,
        function: afkListCommand,
    },
    bb: {
        aliases: ['bye', 'gn', 'cya'],
        roles: Role.PLAYER,
        desc: `
    This command makes you leave instantly (use recommended).`,
        function: leaveCommand,
    },
    me: {
        aliases: ['stat', 'stats'],
        roles: Role.PLAYER,
        desc: `
        This command shows your global stats in the room.`,
        function: globalStatsCommand,
    },
    rename: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command allows you to rename yourself for the leaderboard.`,
        function: renameCommand,
    },
    games: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most games in the room.`,
        function: statsLeaderboardCommand,
    },
    wins: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most wins in the room.`,
        function: statsLeaderboardCommand,
    },
    goals: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most goals in the room.`,
        function: statsLeaderboardCommand,
    },
    assists: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most assists in the room.`,
        function: statsLeaderboardCommand,
    },
    cs: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most CS in the room.`,
        function: statsLeaderboardCommand,
    },
    playtime: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most time played in the room.`,
        function: statsLeaderboardCommand,
    },
    training: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command loads the classic training stadium.`,
        function: stadiumCommand,
    },
    classic: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command loads the classic stadium.`,
        function: stadiumCommand,
    },
    big: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command loads the big stadium.`,
        function: stadiumCommand,
    },
    rr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command restarts the game.`,
        function: restartCommand,
    },
    rrs: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command swaps the teams and restarts the game.`,
        function: restartSwapCommand,
    },
    swap: {
        aliases: ['s'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command swaps the teams when the game is stopped.`,
        function: swapCommand,
    },
    kickred: {
        aliases: ['kickr'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command kicks all the players from the red team, including the player that entered the command. You can give as an argument the reason of the kick.`,
        function: kickTeamCommand,
    },
    kickblue: {
        aliases: ['kickb'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command kicks all the players from the blue team, including the player that entered the command. You can give as an argument the reason of the kick.`,
        function: kickTeamCommand,
    },
    kickspec: {
        aliases: ['kicks'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command kicks all the players from the spectators team, including the player that entered the command. You can give as an argument the reason of the kick.`,
        function: kickTeamCommand,
    },
    mute: {
        aliases: ['m'],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command allows to mute a player. He won't be able to talk for a certain duration, and can be unmuted at any time by admins.
    It takes 2 arguments:
    Argument 1: #<id> where <id> is the id of the player targeted. This won't work if the player is an admin.
    Argument 2 (optional): <duration> where <duration> is the duration of the mute in minutes. If no value is provided, the mute lasts for the default duration, ${muteDuration} minutes.
    Example: !mute #3 20 will mute the player with id 3 for 20 minutes.`,
        function: muteCommand,
    },
    unmute: {
        aliases: ['um'],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command allows to unmute someone.
    It takes 1 argument:
    Argument 1: #<id> where <id> is the id of the muted player.
    OR
    Argument 1: <number> where <number> is the number associated with the mute given by the 'muteList' command.
    Example: !unmute #300 will unmute the player with id 300,
             !unmute 8 will unmute the n°8 player according to the 'muteList' command.`,
        function: unmuteCommand,
    },
    mutes: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command shows the list of muted players.`,
        function: muteListCommand,
    },
    clearbans: {
        aliases: [],
        roles: Role.MASTER,
        desc: `
    This command unbans everyone. It also can unban one player in particular, by adding his ID as an argument.`,
        function: clearbansCommand,
    },
    bans: {
        aliases: ['banlist'],
        roles: Role.MASTER,
        desc: `
    This command shows all the players that were banned and their IDs.`,
        function: banListCommand,
    },
    admins: {
        aliases: ['adminlist'],
        roles: Role.MASTER,
        desc: `
    This command shows all the players that are permanent admins.`,
        function: adminListCommand,
    },
    setadmin: {
        aliases: ['admin'],
        roles: Role.MASTER,
        desc: `
    This command allows to set someone as admin. He will be able to connect as admin, and can be removed at any time by masters.
It takes 1 argument:
Argument 1: #<id> where <id> is the id of the player targeted.
Example: !setadmin #3 will give admin to the player with id 3.`,
        function: setAdminCommand,
    },
    removeadmin: {
        aliases: ['unadmin'],
        roles: Role.MASTER,
        desc: `
    This command allows to remove someone as admin.
It takes 1 argument:
Argument 1: #<id> where <id> is the id of the player targeted.
OR
Argument 1: <number> where <number> is the number associated with the admin given by the 'admins' command.
Example: !removeadmin #300 will remove admin to the player with id 300,
         !removeadmin 2 will remove the admin n°2 according to the 'admins' command.`,
        function: removeAdminCommand,
    },
    password: {
        aliases: ['pw'],
        roles: Role.MASTER,
        desc: `
        This command allows to add a password to the room.
    It takes 1 argument:
    Argument 1: <password> where <password> is the password you want for the room.
    
    To remove the room password, simply enter '!password'.`,
        function: passwordCommand,
    },
};

stadiumCommand(emptyPlayer, "!training");

let game = new Game();

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

if (typeof String.prototype.replaceAll != 'function') {
    String.prototype.replaceAll = function (search, replacement) {
        let target = this;
        return target.split(search).join(replacement);
    };
}

function getDate() {
    let d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

/* MATH FUNCTIONS */

function getRandomInt(max) {
    // returns a random number between 0 and max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function pointDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

/* TIME FUNCTIONS */

function getHoursStats(time) {
    return Math.floor(time / 3600);
}

function getMinutesGame(time) {
    let t = Math.floor(time / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesReport(time) {
    return Math.floor(Math.round(time) / 60);
}

function getMinutesEmbed(time) {
    let t = Math.floor(Math.round(time) / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesStats(time) {
    return Math.floor(time / 60) - getHoursStats(time) * 60;
}

function getSecondsGame(time) {
    let t = Math.floor(time - Math.floor(time / 60) * 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsReport(time) {
    let t = Math.round(time);
    return Math.floor(t - getMinutesReport(t) * 60);
}

function getSecondsEmbed(time) {
    let t = Math.round(time);
    let t2 = Math.floor(t - Math.floor(t / 60) * 60);
    return `${Math.floor(t2 / 10)}${Math.floor(t2 % 10)}`;
}

function getTimeGame(time) {
    return `[${getMinutesGame(time)}:${getSecondsGame(time)}]`;
}

function getTimeEmbed(time) {
    return `[${getMinutesEmbed(time)}:${getSecondsEmbed(time)}]`;
}

function getTimeStats(time) {
    if (getHoursStats(time) > 0) {
        return `${getHoursStats(time)}h${getMinutesStats(time)}m`;
    } else {
        return `${getMinutesStats(time)}m`;
    }
}

function getGoalGame() {
    return game.scores.red + game.scores.blue;
}

/* REPORT FUNCTIONS */

function findFirstNumberCharString(str) {
    let str_number = str[str.search(/[0-9]/g)];
    return str_number === undefined ? "0" : str_number;
}

function getIdReport() {
    let d = new Date();
    return `${d.getFullYear() % 100}${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}${d.getDate() < 10 ? '0' : ''}${d.getDate()}${d.getHours() < 10 ? '0' : ''}${d.getHours()}${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}${d.getSeconds() < 10 ? '0' : ''}${d.getSeconds()}${findFirstNumberCharString(roomName)}`;
}

function getRecordingName(game) {
    let d = new Date();
    let redCap = game.playerComp[0][0] != undefined ? game.playerComp[0][0].player.name : 'Red';
    let blueCap = game.playerComp[1][0] != undefined ? game.playerComp[1][0].player.name : 'Blue';
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let month = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let year = d.getFullYear() % 100 < 10 ? '0' + (d.getFullYear() % 100) : (d.getFullYear() % 100);
    let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    return `${day}-${month}-${year}-${hour}h${minute}-${redCap}vs${blueCap}.hbr2`;
}

function fetchRecording(game) {
    if (gameWebhook != "") {
        let form = new FormData();
        form.append(null, new File([game.rec], getRecordingName(game), { "type": "text/plain" }));
        form.append("payload_json", JSON.stringify({
            "username": roomName
        }));

        fetch(gameWebhook, {
            method: 'POST',
            body: form,
        }).then((res) => res);
    }
}

/* FEATURE FUNCTIONS */

function getCommand(commandStr) {
    if (commands.hasOwnProperty(commandStr)) return commandStr;
    for (const [key, value] of Object.entries(commands)) {
        for (let alias of value.aliases) {
            if (alias == commandStr) return key;
        }
    }
    return false;
}

function getPlayerComp(player) {
    if (player == null || player.id == 0) return null;
    let comp = game.playerComp;
    let index = comp[0].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[0][index];
    index = comp[1].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[1][index];
    return null;
}

function getTeamArray(team, includeAFK = true) {
    if (team == Team.RED) return teamRed;
    if (team == Team.BLUE) return teamBlue;
    if (includeAFK) {
      return playersAll.filter((p) => p.team === Team.SPECTATORS);
    }
    return teamSpec;
}

function sendAnnouncementTeam(message, team, color, style, mention) {
    for (let player of team) {
        room.sendAnnouncement(message, player.id, color, style, mention);
    }
}

function teamChat(player, message) {
    let msgArray = message.split(/ +/).slice(1);
    let emoji = player.team == Team.RED ? '🔴' : player.team == Team.BLUE ? '🔵' : '⚪';
    let mess = `${emoji} [TEAM] ${player.name}: ${msgArray.join(' ')}`;
    let team = getTeamArray(player.team, true);
    let color = player.team == Team.RED ? redColor : player.team == Team.BLUE ? blueColor : null;
    let style = 'normal';
    let mention = HaxNotification.CHAT;
    sendAnnouncementTeam(mess, team, color, style, mention);
}

function playerChat(player, message) {
    let msgArray = message.split(/ +/);
    let playerTargetIndex = playersAll.findIndex(
        (p) => p.name.replaceAll(' ', '_') == msgArray[0].substring(2)
    );
    if (playerTargetIndex == -1) {
        room.sendAnnouncement(
            `Invalid player, make sure the name you entered is correct.`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }
    let playerTarget = playersAll[playerTargetIndex];
    if (player.id == playerTarget.id) {
        room.sendAnnouncement(
            `You can't send a PM to yourself!`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }
    let messageFrom = `📝 [PM with ${playerTarget.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    let messageTo = `📝 [PM with ${player.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    room.sendAnnouncement(
        messageFrom,
        player.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
    room.sendAnnouncement(
        messageTo,
        playerTarget.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
}

/* PHYSICS FUNCTIONS */

function calculateStadiumletiables() {
    if (checkStadiumletiable && teamRed.length + teamBlue.length > 0) {
        checkStadiumletiable = false;
        setTimeout(() => {
            let ballDisc = room.getDiscProperties(0);
            let playerDisc = room.getPlayerDiscProperties(teamRed.concat(teamBlue)[0].id);
            ballRadius = ballDisc.radius;
            playerRadius = playerDisc.radius;
            triggerDistance = ballRadius + playerRadius + 0.01;
            speedCoefficient = 100 / (5 * ballDisc.invMass * (ballDisc.damping ** 60 + 1));
        }, 1);
    }
}

function checkGoalKickTouch(array, index, goal) {
    if (array != null && array.length >= index + 1) {
        let obj = array[index];
        if (obj != null && obj.goal != null && obj.goal == goal) return obj;
    }
    return null;
}

/* BUTTONS */

function topButton() {
    if (teamSpec.length > 0) {
        if (teamRed.length == teamBlue.length && teamSpec.length > 1) {
            room.setPlayerTeam(teamSpec[0].id, Team.RED);
            room.setPlayerTeam(teamSpec[1].id, Team.BLUE);
        } else if (teamRed.length < teamBlue.length)
            room.setPlayerTeam(teamSpec[0].id, Team.RED);
        else room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
    }
}

function randomButton() {
    if (teamSpec.length > 0) {
        if (teamRed.length == teamBlue.length && teamSpec.length > 1) {
            let r = getRandomInt(teamSpec.length);
            room.setPlayerTeam(teamSpec[r].id, Team.RED);
            teamSpec = teamSpec.filter((spec) => spec.id != teamSpec[r].id);
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
        } else if (teamRed.length < teamBlue.length)
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.RED);
        else
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
    }
}

function blueToSpecButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let i = 0; i < teamBlue.length; i++) {
        room.setPlayerTeam(teamBlue[teamBlue.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let i = 0; i < teamRed.length; i++) {
        room.setPlayerTeam(teamRed[teamRed.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let i = 0; i < Math.max(teamRed.length, teamBlue.length); i++) {
        if (Math.max(teamRed.length, teamBlue.length) - teamRed.length - i > 0)
            room.setPlayerTeam(teamBlue[teamBlue.length - 1 - i].id, Team.SPECTATORS);
        else if (Math.max(teamRed.length, teamBlue.length) - teamBlue.length - i > 0)
            room.setPlayerTeam(teamRed[teamRed.length - 1 - i].id, Team.SPECTATORS);
        else break;
    }
    for (let i = 0; i < Math.min(teamRed.length, teamBlue.length); i++) {
        room.setPlayerTeam(
            teamBlue[Math.min(teamRed.length, teamBlue.length) - 1 - i].id,
            Team.SPECTATORS
        );
        room.setPlayerTeam(
            teamRed[Math.min(teamRed.length, teamBlue.length) - 1 - i].id,
            Team.SPECTATORS
        );
    }
}

function swapButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let player of teamBlue) {
        room.setPlayerTeam(player.id, Team.RED);
    }
    for (let player of teamRed) {
        room.setPlayerTeam(player.id, Team.BLUE);
    }
}

/* COMMAND FUNCTIONS */

/* PLAYER COMMANDS */

function leaveCommand(player, message) {
    room.kickPlayer(player.id, '🔥Bye!', false);
}

function helpCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        let commandString = 'Player commands :';
        for (const [key, value] of Object.entries(commands)) {
            if (value.desc && value.roles == Role.PLAYER) commandString += ` !${key},`;
        }
        commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        if (getRole(player) >= Role.ADMIN_TEMP) {
            commandString += `Admin commands :`;
            for (const [key, value] of Object.entries(commands)) {
                if (value.desc && value.roles == Role.ADMIN_TEMP) commandString += ` !${key},`;
            }
            if (commandString.slice(commandString.length - 1) == ':')
                commandString += ` None,`;
            commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        }
        if (getRole(player) >= Role.MASTER) {
            commandString += `Master commands :`;
            for (const [key, value] of Object.entries(commands)) {
                if (value.desc && value.roles == Role.MASTER) commandString += ` !${key},`;
            }
            if (commandString.slice(commandString.length - 1) == ':') commandString += ` None,`;
            commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        }
        commandString += "\nTo get information on a specific command, type ''!help <command name>'.";
        room.sendAnnouncement(
            commandString,
            player.id,
            infoColor,
            'bold',
            HaxNotification.CHAT
        );
    } else if (msgArray.length >= 1) {
        let commandName = getCommand(msgArray[0].toLowerCase());
        if (commandName != false && commands[commandName].desc != false)
            room.sendAnnouncement(
                `\'${commandName}\' command :\n${commands[commandName].desc}`,
                player.id,
                infoColor,
                'bold',
                HaxNotification.CHAT
            );
        else
            room.sendAnnouncement(
                `The command you tried to get information on does not exist. To check all available commands, type \'!help\'`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
    }
}

function globalStatsCommand(player, message) {
    let stats = new HaxStatistics(player.name);
    if (localStorage.getItem(authArray[player.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
    }
    let statsString = printPlayerStats(stats);
    room.sendAnnouncement(
        statsString,
        player.id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

function renameCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);
    if (localStorage.getItem(authArray[player.id][0])) {
        let stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
        if (msgArray.length == 0) {
            stats.playerName = player.name;
        } else {
            stats.playerName = msgArray.join(' ');
        }
        localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));
        room.sendAnnouncement(
            `You successfully renamed yourself ${stats.playerName} !`,
            player.id,
            successColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        room.sendAnnouncement(
            `You haven't played a game in this room yet !`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function statsLeaderboardCommand(player, message) {
    let key = message.split(/ +/)[0].substring(1).toLowerCase();
    printRankings(key, player.id);
}

function afkCommand(player, message) {
    if (player.team == Team.SPECTATORS || players.length == 1) {
        if (AFKSet.has(player.id)) {
            if (AFKMinSet.has(player.id)) {
                room.sendAnnouncement(
                    `There is a minimum of ${minAFKDuration} minute of AFK time. Don't abuse the command !`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else {
                AFKSet.delete(player.id);
                room.sendAnnouncement(
                    `🌅 ${player.name} is not AFK anymore !`,
                    null,
                    announcementColor,
                    'normal',
                    null
                );
                updateTeams();
                handlePlayersJoin();
            }
        } else {
            if (AFKCooldownSet.has(player.id)) {
                room.sendAnnouncement(
                    `You can only go AFK every ${AFKCooldown} minutes. Don't abuse the command !`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else {
                AFKSet.add(player.id);
                if (!player.admin) {
                    AFKMinSet.add(player.id);
                    AFKCooldownSet.add(player.id);
                    setTimeout(
                        (id) => {
                            AFKMinSet.delete(id);
                        },
                        minAFKDuration * 60 * 1000,
                        player.id
                    );
                    setTimeout(
                        (id) => {
                            AFKSet.delete(id);
                        },
                        maxAFKDuration * 60 * 1000,
                        player.id
                    );
                    setTimeout(
                        (id) => {
                            AFKCooldownSet.delete(id);
                        },
                        AFKCooldown * 60 * 1000,
                        player.id
                    );
                }
                room.setPlayerTeam(player.id, Team.SPECTATORS);
                room.sendAnnouncement(
                    `😴 ${player.name} is now AFK !`,
                    null,
                    announcementColor,
                    'normal',
                    null
                );
                updateTeams();
                handlePlayersLeave();
            }
        }
    } else {
        room.sendAnnouncement(
            `You can't go AFK while in a team !`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function afkListCommand(player, message) {
    if (AFKSet.size == 0) {
        room.sendAnnouncement(
            "😴 There's nobody in the AFK list.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return;
    }
    let cstm = '😴 AFK list : ';
    AFKSet.forEach((_, value) => {
        let p = room.getPlayer(value);
        if (p != null) cstm += p.name + `, `;
    });
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(cstm, player.id, announcementColor, 'bold', null);
}

function masterCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);
    if (parseInt(msgArray[0]) == masterPassword) {
        if (!masterList.includes(authArray[player.id][0])) {
            room.setPlayerAdmin(player.id, true);
            adminList = adminList.filter((a) => a[0] != authArray[player.id][0]);
            masterList.push(authArray[player.id][0]);
            room.sendAnnouncement(
                `${player.name} is now a room master !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `You are a master already !`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* ADMIN COMMANDS */

function writeCommand(player, message){
    let msg = message.replace("!write ","")
    if(msg.length>0&&msg!=" "){
        room.sendAnnouncement(msg + "",null,0x43d4a1,"bold",null);
    }
}

function restartCommand(player, message) {
    instantRestart();
}

function restartSwapCommand(player, message) {
    room.stopGame();
    swapButton();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function swapCommand(player, message) {
    if (playSituation == Situation.STOP) {
        swapButton();
        room.sendAnnouncement(
            '✔️ Teams swapped !',
            null,
            announcementColor,
            'bold',
            null
        );
    } else {
        room.sendAnnouncement(
            `Please stop the game before swapping.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function kickTeamCommand(player, message) {
    let msgArray = message.split(/ +/);
    let reasonString = `Team kick by ${player.name}`;
    if (msgArray.length > 1) {
        reasonString = msgArray.slice(1).join(' ');
    }
    if (['!kickred', '!kickr'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamRed.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamRed[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickblue', '!kickb'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamBlue.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamBlue[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickspec', '!kicks'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamSpec.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamSpec[0].id, reasonString, false);
            }, i * 20)
        }
    }
}

function stadiumCommand(player, message) {
    let msgArray = message.split(/ +/);
    if (gameState == State.STOP) {
        if (['!classic'].includes(msgArray[0].toLowerCase())) {
            if (JSON.parse(classicMap).name == 'Classic') {
                room.setDefaultStadium('Classic');
            } else {
                room.setCustomStadium(classicMap);
            }
            currentStadium = 'classic';
        } else if (['!big'].includes(msgArray[0].toLowerCase())) {
            if (JSON.parse(bigMap).name == 'Big') {
                room.setDefaultStadium('Big');
            } else {
                room.setCustomStadium(bigMap);
            }
            currentStadium = 'big';
        } else if (['!training'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(trainingMap);
            currentStadium = 'training';
        } else {
            room.sendAnnouncement(
                `Stadium not recognized.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Please stop the game before using this command.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function muteCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                let playerMute = room.getPlayer(parseInt(msgArray[0]));
                let minutesMute = muteDuration;
                if (msgArray.length > 1 && parseInt(msgArray[1]) > 0) {
                    minutesMute = parseInt(msgArray[1]);
                }
                if (!playerMute.admin) {
                    let muteObj = new MutePlayer(playerMute.name, playerMute.id, authArray[playerMute.id][0]);
                    muteObj.setDuration(minutesMute);
                    room.sendAnnouncement(
                        `${playerMute.name} has been muted for ${minutesMute} minutes.`,
                        null,
                        announcementColor,
                        'bold',
                        null
                    );
                } else {
                    room.sendAnnouncement(
                        `You can't mute an admin.`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help mute" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help mute" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help mute" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function unmuteCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                let playerUnmute = room.getPlayer(parseInt(msgArray[0]));
                if (muteArray.getByPlayerId(playerUnmute.id) != null) {
                    let muteObj = muteArray.getByPlayerId(playerUnmute.id);
                    muteObj.remove()
                    room.sendAnnouncement(
                        `${playerUnmute.name} has been unmuted !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.sendAnnouncement(
                        `This player isn't muted !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help unmute" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else if (msgArray[0].length > 0 && parseInt(msgArray[0]) > 0 && muteArray.getById(parseInt(msgArray[0])) != null) {
            let playerUnmute = muteArray.getById(parseInt(msgArray[0]));
            playerUnmute.remove();
            room.sendAnnouncement(
                `${playerUnmute.name} has been unmuted !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help unmute" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help unmute" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function muteListCommand(player, message) {
    if (muteArray.list.length == 0) {
        room.sendAnnouncement(
            "🔇 There's nobody in the mute list.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    let cstm = '🔇 Mute list : ';
    for (let mute of muteArray.list) {
        cstm += mute.name + `[${mute.id}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

/* MASTER COMMANDS */

function clearbansCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        room.clearBans();
        room.sendAnnouncement(
            '✔️ Bans cleared !',
            null,
            announcementColor,
            'bold',
            null
        );
        banList = [];
    } else if (msgArray.length == 1) {
        if (parseInt(msgArray[0]) > 0) {
            let ID = parseInt(msgArray[0]);
            room.clearBan(ID);
            if (banList.length != banList.filter((p) => p[1] != ID).length) {
                room.sendAnnouncement(
                    `✔️ ${banList.filter((p) => p[1] == ID)[0][0]} has been unbanned from the room !`,
                    null,
                    announcementColor,
                    'bold',
                    null
                );
            } else {
                room.sendAnnouncement(
                    `The ID you entered doesn't have a ban associated to. Enter "!help clearbans" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
            banList = banList.filter((p) => p[1] != ID);
        } else {
            room.sendAnnouncement(
                `Invalid ID entered. Enter "!help clearbans" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help clearbans" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function banListCommand(player, message) {
    if (banList.length == 0) {
        room.sendAnnouncement(
            "📢 There's nobody in the ban list.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    let cstm = '📢 Ban list : ';
    for (let ban of banList) {
        cstm += ban[0] + `[${ban[1]}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

function adminListCommand(player, message) {
    if (adminList.length == 0) {
        room.sendAnnouncement(
            "📢 There's nobody in the admin list.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    let cstm = '📢 Admin list : ';
    for (let i = 0; i < adminList.length; i++) {
        cstm += adminList[i][1] + `[${i}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

function setAdminCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                let playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (!adminList.map((a) => a[0]).includes(authArray[playerAdmin.id][0])) {
                    if (!masterList.includes(authArray[playerAdmin.id][0])) {
                        room.setPlayerAdmin(playerAdmin.id, true);
                        adminList.push([authArray[playerAdmin.id][0], playerAdmin.name]);
                        room.sendAnnouncement(
                            `${playerAdmin.name} is now a room admin !`,
                            null,
                            announcementColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    } else {
                        room.sendAnnouncement(
                            `This player is a master already !`,
                            player.id,
                            errorColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    }
                } else {
                    room.sendAnnouncement(
                        `This player is a permanent admin already !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help setadmin" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help setadmin" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help setadmin" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function removeAdminCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                let playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (adminList.map((a) => a[0]).includes(authArray[playerAdmin.id][0])) {
                    room.setPlayerAdmin(playerAdmin.id, false);
                    adminList = adminList.filter((a) => a[0] != authArray[playerAdmin.id][0]);
                    room.sendAnnouncement(
                        `${playerAdmin.name} is not a room admin anymore !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.sendAnnouncement(
                        `This player isn't a permanent admin !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help removeadmin" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else if (msgArray[0].length > 0 && parseInt(msgArray[0]) < adminList.length) {
            let index = parseInt(msgArray[0]);
            let playerAdmin = adminList[index];
            if (playersAll.findIndex((p) => authArray[p.id][0] == playerAdmin[0]) != -1) {
                // check if there is the removed admin in the room
                let indexRem = playersAll.findIndex((p) => authArray[p.id][0] == playerAdmin[0]);
                room.setPlayerAdmin(playersAll[indexRem].id, false);
            }
            adminList.splice(index);
            room.sendAnnouncement(
                `${playerAdmin[1]} is not a room admin anymore !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help removeadmin" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help removeadmin" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function passwordCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray.length == 1 && msgArray[0] == '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `The room password has been removed.`,
                player.id,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        roomPassword = msgArray.join(' ');
        room.setPassword(roomPassword);
        room.sendAnnouncement(
            `The room password has been set to ${roomPassword}`,
            player.id,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        if (roomPassword != '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `The room password has been removed.`,
                player.id,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `The room currently does not have a password. Enter "!help password" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    if (game != undefined) game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0 && playSituation == Situation.PLAY) {
        if (scores.red != scores.blue) {
            if (!checkTimeletiable) {
                checkTimeletiable = true;
                setTimeout(() => {
                    checkTimeletiable = false;
                }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                stopTimeout = setTimeout(() => {
                    room.stopGame();
                }, 2000);
            }
            return;
        }
        if (drawTimeLimit != 0) {
            goldenGoal = true;
            room.sendAnnouncement(
                '⚽ First goal wins !',
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60 - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (!checkTimeletiable) {
            checkTimeletiable = true;
            setTimeout(() => {
                checkTimeletiable = false;
            }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}

function instantRestart() {
    room.stopGame();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function resumeGame() {
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 1000);
    setTimeout(() => {
        room.pauseGame(false);
    }, 500);
}

function endGame(winner) {
    if (players.length >= 2 * teamSize - 1) activateChooseMode();
    const scores = room.getScores();
    game.scores = scores;
    lastWinner = winner;
    endGameletiable = true;
    if (winner == Team.RED) {
        streak++;
        room.sendAnnouncement(
            `✨ Red Team won ${scores.red} - ${scores.blue} ! Current streak: ${streak}`,
            null,
            redColor,
            'bold',
            HaxNotification.CHAT
        );
    } else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement(
            `✨ Blue Team won ${scores.blue} - ${scores.red} ! Current streak: ${streak}`,
            null,
            blueColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        streak = 0;
        room.sendAnnouncement(
            '💤 Draw limit reached !',
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    }
    let possessionRedPct = (possession[0] / (possession[0] + possession[1])) * 100;
    let possessionBluePct = 100 - possessionRedPct;
    let possessionString = `🔴 ${possessionRedPct.toFixed(0)}% - ${possessionBluePct.toFixed(0)}% 🔵`;
    let actionRedPct = (actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1])) * 100;
    let actionBluePct = 100 - actionRedPct;
    let actionString = `🔴 ${actionRedPct.toFixed(0)}% - ${actionBluePct.toFixed(0)}% 🔵`;
    //let CSString = getCSString(scores);
    room.sendAnnouncement(
        `📊 Possession: 🔴 ${possessionString}\n` +
        `📊 Action Zone: 🔴 ${actionString}\n`,
		// +`${CSString}`,
        null,
        announcementColor,
        'bold',
        HaxNotification.NONE
    );
    updateStats();
}

/* CHOOSING FUNCTIONS */

function activateChooseMode() {
    chooseMode = true;
    slowMode = chooseModeSlowMode;
    /*room.sendAnnouncement(
        `🐢 Slow mode changed to choose mode duration of: ${chooseModeSlowMode}s.`,
        null,
        announcementColor,
        'bold',
        HaxNotification.CHAT
    );*/
}

function deactivateChooseMode() {
    chooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != defaultSlowMode) {
        slowMode = defaultSlowMode;
        /*room.sendAnnouncement(
            `🐢 Slow mode changed to choose mode duration of: ${defaultSlowMode}s.`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );*/
    }
    redCaptainChoice = '';
    blueCaptainChoice = '';
}

function getSpecList(player) {
    if (player == null) return null;
    let cstm = 'Players : ';
    for (let i = 0; i < teamSpec.length; i++) {
        cstm += teamSpec[i].name + `[${i + 1}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    let captain;
    if (teamRed.length <= teamBlue.length && teamRed.length != 0) {
        captain = teamRed[0];
    } else if (teamBlue.length < teamRed.length && teamBlue.length != 0) {
        captain = teamBlue[0];
    }
    if (captain != null) {
        room.sendAnnouncement(
            "To choose a player, enter his number in the list given or use 'top', 'random' or 'bottom'.",
            captain.id,
            infoColor,
            'bold',
            HaxNotification.MENTION
        );
        timeOutCap = setTimeout(
            (player) => {
                room.sendAnnouncement(
                    `Hurry up ${player.name}, only ${Number.parseInt(String(chooseTime / 2))} seconds left to choose !`,
                    player.id,
                    warningColor,
                    'bold',
                    HaxNotification.MENTION
                );
                timeOutCap = setTimeout(
                    (player) => {
                        room.kickPlayer(
                            player.id,
                            "You didn't choose in time !",
                            false
                        );
                    },
                    chooseTime * 500,
                    captain
                );
            },
            chooseTime * 1000,
            captain
        );
    }
    if (teamRed.length != 0 && teamBlue.length != 0) {
        getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
    }
}

function chooseModeFunction(player, message) {
    let msgArray = message.split(/ +/);
    if (player.id == teamRed[0].id || player.id == teamBlue[0].id) {
        if (teamRed.length <= teamBlue.length && player.id == teamRed[0].id) {
            if (['top', 'auto'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
                redCaptainChoice = 'top';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Top !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['random', 'rand'].includes(msgArray[0].toLowerCase())) {
                let r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
                redCaptainChoice = 'random';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Random !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['bottom', 'bot'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.RED);
                redCaptainChoice = 'bottom';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Bottom !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (!Number.isNaN(Number.parseInt(msgArray[0]))) {
                if (Number.parseInt(msgArray[0]) > teamSpec.length || Number.parseInt(msgArray[0]) < 1) {
                    room.sendAnnouncement(
                        `Your number is invalid !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.setPlayerTeam(
                        teamSpec[Number.parseInt(msgArray[0]) - 1].id,
                        Team.RED
                    );
                    room.sendAnnouncement(
                        `${player.name} chose ${teamSpec[Number.parseInt(msgArray[0]) - 1].name} !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else return false;
            return true;
        }
        if (teamRed.length > teamBlue.length && player.id == teamBlue[0].id) {
            if (['top', 'auto'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                blueCaptainChoice = 'top';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Top !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['random', 'rand'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(
                    teamSpec[getRandomInt(teamSpec.length)].id,
                    Team.BLUE
                );
                blueCaptainChoice = 'random';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Random !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['bottom', 'bot'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.BLUE);
                blueCaptainChoice = 'bottom';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Bottom !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (!Number.isNaN(Number.parseInt(msgArray[0]))) {
                if (Number.parseInt(msgArray[0]) > teamSpec.length || Number.parseInt(msgArray[0]) < 1) {
                    room.sendAnnouncement(
                        `Your number is invalid !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.setPlayerTeam(
                        teamSpec[Number.parseInt(msgArray[0]) - 1].id,
                        Team.BLUE
                    );
                    room.sendAnnouncement(
                        `${player.name} chose ${teamSpec[Number.parseInt(msgArray[0]) - 1].name} !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else return false;
            return true;
        }
    }
}

function checkCaptainLeave(player) {
    if (
        (teamRed.findIndex((red) => red.id == player.id) == 0 && chooseMode && teamRed.length <= teamBlue.length) ||
        (teamBlue.findIndex((blue) => blue.id == player.id) == 0 && chooseMode && teamBlue.length < teamRed.length)
    ) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
}

function slowModeFunction(player, message) {
    if (!player.admin) {
        if (!SMSet.has(player.id)) {
            SMSet.add(player.id);
            setTimeout(
                (number) => {
                    SMSet.delete(number);
                },
                slowMode * 1000,
                player.id
            );
        } else {
            return true;
        }
    }
    return false;
}

/* PLAYER FUNCTIONS */

function updateTeams() {
    playersAll = room.getPlayerList();
    players = playersAll.filter((p) => !AFKSet.has(p.id));
    teamRed = players.filter((p) => p.team == Team.RED);
    teamBlue = players.filter((p) => p.team == Team.BLUE);
    teamSpec = players.filter((p) => p.team == Team.SPECTATORS);
}

function updateAdmins(excludedPlayerID = 0) {
    if (players.length != 0 && players.filter((p) => p.admin).length < maxAdmins) {
        let playerArray = players.filter((p) => p.id != excludedPlayerID && !p.admin);
        let arrayID = playerArray.map((player) => player.id);
        room.setPlayerAdmin(Math.min(...arrayID), true);
    }
}

function getRole(player) {
    return (
        !!masterList.find((a) => a == authArray[player.id][0]) * 2 +
        !!adminList.find((a) => a[0] == authArray[player.id][0]) * 1 +
        player.admin * 1
    );
}

function ghostKickHandle(oldP, newP) {
    let teamArrayId = getTeamArray(oldP.team, true).map((p) => p.id);
    teamArrayId.splice(teamArrayId.findIndex((id) => id == oldP.id), 1, newP.id);

    room.kickPlayer(oldP.id, 'Ghost kick', false);
    room.setPlayerTeam(newP.id, oldP.team);
    room.setPlayerAdmin(newP.id, oldP.admin);
    room.reorderPlayers(teamArrayId, true);

    if (oldP.team != Team.SPECTATORS && playSituation != Situation.STOP) {
        let discProp = room.getPlayerDiscProperties(oldP.id);
        room.setPlayerDiscProperties(newP.id, discProp);
    }
}

/* ACTIVITY FUNCTIONS */

function handleActivityPlayer(player) {
    let pComp = getPlayerComp(player);
    if (pComp != null) {
        pComp.inactivityTicks++;
        if (pComp.inactivityTicks == 60 * ((2 / 3) * afkLimit)) {
            room.sendAnnouncement(
                `⛔ ${player.name}, if you don't move or send a message in the next ${Math.floor(afkLimit / 3)} seconds, you will be kicked !`,
                player.id,
                warningColor,
                'bold',
                HaxNotification.MENTION
            );
            return;
        }
        if (pComp.inactivityTicks >= 60 * afkLimit) {
            pComp.inactivityTicks = 0;
            if (game.scores.time <= afkLimit - 0.5) {
                setTimeout(() => {
                    !chooseMode ? instantRestart() : room.stopGame();
                }, 10);
            }
            room.kickPlayer(player.id, 'AFK', false);
        }
    }
}

function handleActivityPlayerTeamChange(changedPlayer) {
    if (changedPlayer.team == Team.SPECTATORS) {
        let pComp = getPlayerComp(changedPlayer);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivityStop() {
    for (let player of players) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivity() {
    if (gameState === State.PLAY && players.length > 1) {
        for (let player of teamRed) {
            handleActivityPlayer(player);
        }
        for (let player of teamBlue) {
            handleActivityPlayer(player);
        }
    }
}

/* LINEUP FUNCTIONS */

function getStartingLineups() {
    let compositions = [[], []];
    for (let player of teamRed) {
        compositions[0].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    for (let player of teamBlue) {
        compositions[1].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    return compositions;
}

function handleLineupChangeTeamChange(changedPlayer) {
    if (gameState != State.STOP) {
        let playerLineup;
        if (changedPlayer.team == Team.RED) {
            // player gets in red team
            let redLineupAuth = game.playerComp[0].map((p) => p.auth);
            let ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[0][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[0].push(playerLineup);
            }
        } else if (changedPlayer.team == Team.BLUE) {
            // player gets in blue team
            let blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            let ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[1][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[1].push(playerLineup);
            }
        }
        if (teamRed.some((r) => r.id == changedPlayer.id)) {
            // player leaves red team
            let redLineupAuth = game.playerComp[0].map((p) => p.auth);
            let ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (teamBlue.some((r) => r.id == changedPlayer.id)) {
            // player leaves blue team
            let blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            let ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

function handleLineupChangeLeave(player) {
    if (playSituation != Situation.STOP) {
        if (player.team == Team.RED) {
            // player gets in red team
            let redLineupAuth = game.playerComp[0].map((p) => p.auth);
            let ind = redLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
            let playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (player.team == Team.BLUE) {
            // player gets in blue team
            let blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            let ind = blueLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
            let playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

/* TEAM BALANCE FUNCTIONS */

function balanceTeams() {
    if (!chooseMode) {
        if (players.length == 0) {
            room.stopGame();
            room.setScoreLimit(scoreLimit);
            room.setTimeLimit(timeLimit);
        } else if (players.length == 1 && teamRed.length == 0) {
            instantRestart();
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!training`);
            }, 5);
            room.setPlayerTeam(players[0].id, Team.RED);
        } else if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length && teamSpec.length > 0) {
            const n = Math.abs(teamRed.length - teamBlue.length);
            if (players.length == 2) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!classic`);
                }, 5);
            }
            if (teamRed.length > teamBlue.length) {
                for (let i = 0; i < n; i++) {
                    room.setPlayerTeam(teamSpec[i].id, Team.BLUE);
                }
            } else {
                for (let i = 0; i < n; i++) {
                    room.setPlayerTeam(teamSpec[i].id, Team.RED);
                }
            }
        } else if (Math.abs(teamRed.length - teamBlue.length) > teamSpec.length) {
            const n = Math.abs(teamRed.length - teamBlue.length);
            if (players.length == 1) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!training`);
                }, 5);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            } else if (teamSize > 2 && players.length == 5) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!classic`);
                }, 5);
            }
            if (players.length == teamSize * 2 - 1) {
                teamRedStats = [];
                teamBlueStats = [];
            }
            if (teamRed.length > teamBlue.length) {
                for (let i = 0; i < n; i++) {
                    room.setPlayerTeam(
                        teamRed[teamRed.length - 1 - i].id,
                        Team.SPECTATORS
                    );
                }
            } else {
                for (let i = 0; i < n; i++) {
                    room.setPlayerTeam(
                        teamBlue[teamBlue.length - 1 - i].id,
                        Team.SPECTATORS
                    );
                }
            }
        } else if (Math.abs(teamRed.length - teamBlue.length) < teamSpec.length && teamRed.length != teamBlue.length) {
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        } else if (teamSpec.length >= 2 && teamRed.length == teamBlue.length && teamRed.length < teamSize) {
            if (teamRed.length == 2) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!big`);
                }, 5);
            }
            topButton();
        }
    }
}

function handlePlayersJoin() {
    if (chooseMode) {
        if (teamSize > 2 && players.length == 6) {
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!big`);
            }, 5);
        }
        getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
    }
    balanceTeams();
}

function handlePlayersLeave() {
    if (gameState != State.STOP) {
        let scores = room.getScores();
        if (players.length >= 2 * teamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamRed.length != teamBlue.length) {
            let rageQuitCheck = false;
            if (teamRed.length < teamBlue.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                    rageQuitCheck = true;
                }
            } else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                    rageQuitCheck = true;
                }
            }
            if (rageQuitCheck) {
                room.sendAnnouncement(
                    "Ragequit detected, game ended.",
                    null,
                    infoColor,
                    'bold',
                    HaxNotification.MENTION
                )
                stopTimeout = setTimeout(() => {
                    room.stopGame();
                }, 100);
                return;
            }
        }
    }
    if (chooseMode) {
        if (teamSize > 2 && players.length == 5) {
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!classic`);
            }, 5);
        }
        if (teamRed.length == 0 || teamBlue.length == 0) {
            room.setPlayerTeam(teamSpec[0].id, teamRed.length == 0 ? Team.RED : Team.BLUE);
            return;
        }
        if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length) {
            deactivateChooseMode();
            resumeGame();
            let b = teamSpec.length;
            if (teamRed.length > teamBlue.length) {
                for (let i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            } else {
                for (let i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.RED);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            }
            return;
        }
        if (streak == 0 && gameState == State.STOP) {
            if (Math.abs(teamRed.length - teamBlue.length) == 2) {
                let teamIn = teamRed.length > teamBlue.length ? teamRed : teamBlue;
                room.setPlayerTeam(teamIn[teamIn.length - 1].id, Team.SPECTATORS)
            }
        }
        if (teamRed.length == teamBlue.length && teamSpec.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }

        if (capLeft) {
            choosePlayer();
        } else {
            getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
        }
    }
    balanceTeams();
}

function handlePlayersTeamChange(byPlayer) {
    if (chooseMode && !removingPlayers && byPlayer == null) {
        if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length) {
            deactivateChooseMode();
            resumeGame();
            let b = teamSpec.length;
            if (teamRed.length > teamBlue.length) {
                for (let i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            } else {
                for (let i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.RED);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            }
            return;
        } else if (
            (teamRed.length == teamSize && teamBlue.length == teamSize) ||
            (teamRed.length == teamBlue.length && teamSpec.length < 2)
        ) {
            deactivateChooseMode();
            resumeGame();
        } else if (teamRed.length <= teamBlue.length && redCaptainChoice != '') {
            if (redCaptainChoice == 'top') {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
            } else if (redCaptainChoice == 'random') {
                let r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
            } else {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.RED);
            }
            return;
        } else if (teamBlue.length < teamRed.length && blueCaptainChoice != '') {
            if (blueCaptainChoice == 'top') {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
            } else if (blueCaptainChoice == 'random') {
                let r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.BLUE);
            } else {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.BLUE);
            }
            return;
        } else {
            choosePlayer();
        }
    }
}

function handlePlayersStop(byPlayer) {
    if (byPlayer == null && endGameletiable) {
        if (chooseMode) {
            if (players.length == 2 * teamSize) {
                chooseMode = false;
                resetButton();
                for (let i = 0; i < teamSize; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        randomButton();
                    }, 200 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 200 * teamSize);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else if (lastWinner == Team.BLUE) {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 10);
                } else {
                    resetButton();
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    topButton();
                }, 300);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 300);
            }
        } else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    swapButton();
                }
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 3 || players.length >= 2 * teamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 5);
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    topButton();
                }, 200);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 300);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 4) {
                resetButton();
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    randomButton();
                    setTimeout(() => {
                        randomButton();
                    }, 500);
                }, 500);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 2000);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 5 || players.length >= 2 * teamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 5);
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 200);
                setTimeout(() => {
                    topButton();
                }, 200);
                activateChooseMode();
            } else if (players.length == 6) {
                resetButton();
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 1500);
                setTimeout(() => {
                    randomButton();
                    setTimeout(() => {
                        randomButton();
                        setTimeout(() => {
                            randomButton();
                        }, 500);
                    }, 500);
                }, 500);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            }
        }
    }
}

/* STATS FUNCTIONS */

/* GK FUNCTIONS */

function handleGKTeam(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? teamRed : teamBlue;
    let playerGK = teamArray.reduce((prev, current) => {
        if (team == Team.RED) {
            return (prev.position.x < current.position.x) ? prev : current
        } else {
            return (prev.position.x > current.position.x) ? prev : current
        }
    }, null);
    let playerCompGK = getPlayerComp(playerGK);
    return playerCompGK;
}

function handleGK() {
    let redGK = handleGKTeam(Team.RED);
    if (redGK != null) {
        redGK.GKTicks++;
    }
    let blueGK = handleGKTeam(Team.BLUE);
    if (blueGK != null) {
        blueGK.GKTicks++;
    }
}

function getGK(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? game.playerComp[0] : game.playerComp[1];
    let playerGK = teamArray.reduce((prev, current) => {
        return (prev.GKTicks > current.GKTicks) ? prev : current
    }, null);
    return playerGK;
}

function getCS(scores) {
    let playersNameCS = [];
    let redGK = getGK(Team.RED);
    let blueGK = getGK(Team.BLUE);
    if (redGK != null && scores.blue == 0) {
        playersNameCS.push(redGK.player.name);
    }
    if (blueGK != null && scores.red == 0) {
        playersNameCS.push(blueGK.player.name);
    }
    return playersNameCS;
}

function getCSString(scores) {
    let playersCS = getCS(scores);
    if (playersCS.length == 0) {
        return "🥅 No CS";
    } else if (playersCS.length == 1) {
        return `🥅 ${playersCS[0]} had a CS.`;
    } else {
        return `🥅 ${playersCS[0]} and ${playersCS[1]} had a CS.`;
    }
}

/* GLOBAL STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    let playerArray = [];
    for (let player of players) {
        if (player.position != null) {
            let distanceToBall = pointDistance(player.position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
                playerArray.push([player, distanceToBall]);
            }
        }
    }
    if (playerArray.length != 0) {
        let playerTouch = playerArray.sort((a, b) => a[1] - b[1])[0][0];
        if (lastTeamTouched == playerTouch.team || lastTeamTouched == Team.SPECTATORS) {
            if (lastTouches[0] == null || (lastTouches[0] != null && lastTouches[0].player.id != playerTouch.id)) {
                game.touchArray.push(
                    new BallTouch(
                        playerTouch,
                        game.scores.time,
                        getGoalGame(),
                        ballPosition
                    )
                );
                lastTouches[0] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 1,
                    getGoalGame()
                );
                lastTouches[1] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 2,
                    getGoalGame()
                );
            }
        }
        lastTeamTouched = playerTouch.team;
    }
}

function getBallSpeed() {
    let ballProp = room.getDiscProperties(0);
    return Math.sqrt(ballProp.xspeed ** 2 + ballProp.yspeed ** 2) * speedCoefficient;
}

function getGameStats() {
    if (playSituation == Situation.PLAY && gameState == State.PLAY) {
        lastTeamTouched == Team.RED ? possession[0]++ : possession[1]++;
        let ballPosition = room.getBallPosition();
        ballPosition.x < 0 ? actionZoneHalf[0]++ : actionZoneHalf[1]++;
        //handleGK();
    }
}

/* GOAL ATTRIBUTION FUNCTIONS */

function getGoalAttribution(team) {
    let goalAttribution = Array(2).fill(null);
    if (lastTouches[0] != null) {
        if (lastTouches[0].player.team == team) {
            // Direct goal scored by player
            if (lastTouches[1] != null && lastTouches[1].player.team == team) {
                goalAttribution = [lastTouches[0].player, lastTouches[1].player];
            } else {
                goalAttribution = [lastTouches[0].player, null];
            }
        } else {
            // Own goal
            goalAttribution = [lastTouches[0].player, null];
        }
    }
    return goalAttribution;
}

function getGoalString(team) {
    let goalString;
    let scores = game.scores;
    let goalAttribution = getGoalAttribution(team);
    if (goalAttribution[0] != null) {
        if (goalAttribution[0].team == team) {
            if (goalAttribution[1] != null && goalAttribution[1].team == team) {
                goalString = `⚽ ${getTimeGame(scores.time)} Goal by ${goalAttribution[0].name} ! Assist by ${goalAttribution[1].name}. Goal speed : ${ballSpeed.toFixed(2)}km/h.`;
                game.goals.push(
                    new Goal(
                        scores.time,
                        team,
                        goalAttribution[0],
                        goalAttribution[1]
                    )
                );
            } else {
                goalString = `⚽ ${getTimeGame(scores.time)} Goal by ${goalAttribution[0].name} ! Goal speed : ${ballSpeed.toFixed(2)}km/h.`;
                game.goals.push(
                    new Goal(scores.time, team, goalAttribution[0], null)
                );
            }
        } else {
            goalString = `😂 ${getTimeGame(scores.time)} Own goal by ${goalAttribution[0].name} ! Goal speed : ${ballSpeed.toFixed(2)}km/h.`;
            game.goals.push(
                new Goal(scores.time, team, goalAttribution[0], null)
            );
        }
    } else {
        goalString = `⚽ ${getTimeGame(scores.time)} Goal for ${team == Team.RED ? 'red' : 'blue'} team ! Goal speed : ${ballSpeed.toFixed(2)}km/h.`;
        game.goals.push(
            new Goal(scores.time, team, null, null)
        );
    }

    return goalString;
}

/* ROOM STATS FUNCTIONS */

function updatePlayerStats(player, teamStats) {
    let stats = new HaxStatistics(player.name);
    let pComp = getPlayerComp(player);
    if (localStorage.getItem(authArray[player.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
    }
    stats.games++;
    if (lastWinner == teamStats) stats.wins++;
    stats.winrate = ((100 * stats.wins) / (stats.games || 1)).toFixed(1) + `%`;
    stats.goals += getGoalsPlayer(pComp);
    stats.assists += getAssistsPlayer(pComp);
    stats.ownGoals += getOwnGoalsPlayer(pComp);
    //stats.CS += getCSPlayer(pComp);
    stats.playtime += getGametimePlayer(pComp);
    localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));
}

function updateStats() {
    if (
        players.length >= 2 * teamSize &&
        (
            game.scores.time >= (5 / 6) * game.scores.timeLimit ||
            game.scores.red == game.scores.scoreLimit ||
            game.scores.blue == game.scores.scoreLimit
        ) &&
        teamRedStats.length >= teamSize && teamBlueStats.length >= teamSize
    ) {
        for (let player of teamRedStats) {
            updatePlayerStats(player, Team.RED);
        }
        for (let player of teamBlueStats) {
            updatePlayerStats(player, Team.BLUE);
        }
    }
}

function printRankings(statKey, id = 0) {
    let leaderboard = [];
    statKey = statKey == "cs" ? "CS" : statKey;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.length == 43)
            leaderboard.push([
                JSON.parse(localStorage.getItem(key)).playerName,
                JSON.parse(localStorage.getItem(key))[statKey],
            ]);
    }
    if (leaderboard.length < 5) {
        if (id != 0) {
            room.sendAnnouncement(
                'Not enough games played yet !',
                id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        return;
    }
    leaderboard.sort(function (a, b) { return b[1] - a[1]; });
    let rankingString = `${statKey.charAt(0).toUpperCase() + statKey.slice(1)}> `;
    for (let i = 0; i < 5; i++) {
        let playerName = leaderboard[i][0];
        let playerStat = leaderboard[i][1];
        if (statKey == 'playtime') playerStat = getTimeStats(playerStat);
        rankingString += `#${i + 1} ${playerName} : ${playerStat}, `;
    }
    rankingString = rankingString.substring(0, rankingString.length - 2);
    room.sendAnnouncement(
        rankingString,
        id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

/* GET STATS FUNCTIONS */

function getGamePlayerStats(player) {
    let stats = new HaxStatistics(player.name);
    let pComp = getPlayerComp(player);
    stats.goals += getGoalsPlayer(pComp);
    stats.assists += getAssistsPlayer(pComp);
    stats.ownGoals += getOwnGoalsPlayer(pComp);
    stats.playtime += getGametimePlayer(pComp);
    //stats.CS += getCSPlayer(pComp);
    return stats;
}

function getGametimePlayer(pComp) {
    if (pComp == null) return 0;
    let timePlayer = 0;
    for (let j = 0; j < pComp.timeEntry.length; j++) {
        if (pComp.timeExit.length < j + 1) {
            timePlayer += game.scores.time - pComp.timeEntry[j];
        } else {
            timePlayer += pComp.timeExit[j] - pComp.timeEntry[j];
        }
    }
    return Math.floor(timePlayer);
}

function getGoalsPlayer(pComp) {
    if (pComp == null) return 0;
    let goalPlayer = 0;
    for (let goal of game.goals) {
        if (goal.striker != null && goal.team === pComp.player.team) {
            if (authArray[goal.striker.id][0] == pComp.auth) {
                goalPlayer++;
            }
        }
    }
    return goalPlayer;
}

function getOwnGoalsPlayer(pComp) {
    if (pComp == null) return 0;
    let goalPlayer = 0;
    for (let goal of game.goals) {
        if (goal.striker != null && goal.team !== pComp.player.team) {
            if (authArray[goal.striker.id][0] == pComp.auth) {
                goalPlayer++;
            }
        }
    }
    return goalPlayer;
}

function getAssistsPlayer(pComp) {
    if (pComp == null) return 0;
    let assistPlayer = 0;
    for (let goal of game.goals) {
        if (goal.assist != null) {
            if (authArray[goal.assist.id][0] == pComp.auth) {
                assistPlayer++;
            }
        }
    }
    return assistPlayer;
}

function getGKPlayer(pComp) {
    if (pComp == null) return 0;
    let GKRed = getGK(Team.RED);
    if (pComp.auth == GKRed.auth) {
        return Team.RED;
    }
    let GKBlue = getGK(Team.BLUE);
    if (pComp.auth == GKBlue.auth) {
        return Team.BLUE;
    }
    return Team.SPECTATORS;
}

function getCSPlayer(pComp) {
    if (pComp == null || game.scores == null) return 0;
    if (getGKPlayer(pComp) == Team.RED && game.scores.blue == 0) {
        return 1;
    } else if (getGKPlayer(pComp) == Team.BLUE && game.scores.red == 0) {
        return 1;
    }
    return 0;
}

function actionReportCountTeam(goals, team) {
    let playerActionSummaryTeam = [];
    let indexTeam = team == Team.RED ? 0 : 1;
    let indexOtherTeam = team == Team.RED ? 1 : 0;
    for (let goal of goals[indexTeam]) {
        if (goal[0] != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == goal[0].id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[0].id);
                playerActionSummaryTeam[index][1]++;
            } else {
                playerActionSummaryTeam.push([goal[0], 1, 0, 0]);
            }
            if (goal[1] != null) {
                if (playerActionSummaryTeam.find(a => a[0].id == goal[1].id)) {
                    let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[1].id);
                    playerActionSummaryTeam[index][2]++;
                } else {
                    playerActionSummaryTeam.push([goal[1], 0, 1, 0]);
                }
            }
        }
    }
    if (goals[indexOtherTeam].length == 0) {
        /*let playerCS = getGK(team).player;
        if (playerCS != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == playerCS.id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == playerCS.id);
                playerActionSummaryTeam[index][3]++;
            } else {
                playerActionSummaryTeam.push([playerCS, 0, 0, 1]);
            }
        }*/
    }

    playerActionSummaryTeam.sort((a, b) => (a[1] + a[2] + a[3]) - (b[1] + b[2] + b[3]));
    return playerActionSummaryTeam;
}

/* PRINT FUNCTIONS */

function printPlayerStats(stats) {
    let statsString = '';
    for (let [key, value] of Object.entries(stats)) {
        if (key == 'playerName') statsString += `${value}: `;
        else {
            if (key == 'playtime') value = getTimeStats(value);
            let reCamelCase = /([A-Z](?=[a-z]+)|[A-Z]+(?![a-z]))/g;
            let statName = key.replaceAll(reCamelCase, ' $1').trim();
            statsString += `${statName.charAt(0).toUpperCase() + statName.slice(1)}: ${value}, `;
        }
    }
    statsString = statsString.substring(0, statsString.length - 2);
    return statsString;
}

/* FETCH FUNCTIONS */

function fetchGametimeReport(game) {
    let fieldGametimeRed = {
        name: '🔴        **RED TEAM STATS**',
        value: '⌛ __**Game Time:**__\n\n',
        inline: true,
    };
    let fieldGametimeBlue = {
        name: '🔵       **BLUE TEAM STATS**',
        value: '⌛ __**Game Time:**__\n\n',
        inline: true,
    };
    let redTeamTimes = game.playerComp[0].map((p) => [p.player, getGametimePlayer(p)]);
    let blueTeamTimes = game.playerComp[1].map((p) => [p.player, getGametimePlayer(p)]);

    for (let time of redTeamTimes) {
        let minutes = getMinutesReport(time[1]);
        let seconds = getSecondsReport(time[1]);
        fieldGametimeRed.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeRed.value += `\n${blueTeamTimes.length - redTeamTimes.length > 0 ? '\n'.repeat(blueTeamTimes.length - redTeamTimes.length) : ''
        }`;
    fieldGametimeRed.value += '=====================';

    for (let time of blueTeamTimes) {
        let minutes = getMinutesReport(time[1]);
        let seconds = getSecondsReport(time[1]);
        fieldGametimeBlue.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeBlue.value += `\n${redTeamTimes.length - blueTeamTimes.length > 0 ? '\n'.repeat(redTeamTimes.length - blueTeamTimes.length) : ''
        }`;
    fieldGametimeBlue.value += '=====================';

    return [fieldGametimeRed, fieldGametimeBlue];
}

function fetchActionsSummaryReport(game) {
    let fieldReportRed = {
        name: '🔴        **RED TEAM STATS**',
        value: '📊 __**Player Stats:**__\n\n',
        inline: true,
    };
    let fieldReportBlue = {
        name: '🔵       **BLUE TEAM STATS**',
        value: '📊 __**Player Stats:**__\n\n',
        inline: true,
    };
    let goals = [[], []];
    for (let i = 0; i < game.goals.length; i++) {
        goals[game.goals[i].team - 1].push([game.goals[i].striker, game.goals[i].assist]);
    }
    let redActions = actionReportCountTeam(goals, Team.RED);
    if (redActions.length > 0) {
        for (let act of redActions) {
            fieldReportRed.value += `> **${act[0].team != Team.RED ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}`
				// +`${act[3] > 0 ? ` ${act[3]}CS` : ''}\n`;
        }
    }
    let blueActions = actionReportCountTeam(goals, Team.BLUE);
    if (blueActions.length > 0) {
        for (let act of blueActions) {
            fieldReportBlue.value += `> **${act[0].team != Team.BLUE ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}`
				// +`${act[3] > 0 ? ` ${act[3]}CS` : ''}\n`;
        }
    }

    fieldReportRed.value += `\n${blueActions.length - redActions.length > 0 ? '\n'.repeat(blueActions.length - redActions.length) : ''
        }`;
    fieldReportRed.value += '=====================';

    fieldReportBlue.value += `\n${redActions.length - blueActions.length > 0 ? '\n'.repeat(redActions.length - blueActions.length) : ''
        }`;
    fieldReportBlue.value += '=====================';

    return [fieldReportRed, fieldReportBlue];
}

function fetchSummaryEmbed(game) {
    let fetchEndgame = [fetchGametimeReport, fetchActionsSummaryReport];
    let logChannel = gameWebhook;
    let fields = [
        {
            name: '🔴        **RED TEAM STATS**',
            value: '=====================\n\n',
            inline: true,
        },
        {
            name: '🔵       **BLUE TEAM STATS**',
            value: '=====================\n\n',
            inline: true,
        },
    ];
    for (let i = 0; i < fetchEndgame.length; i++) {
        let fieldsReport = fetchEndgame[i](game);
        fields[0].value += fieldsReport[0].value + '\n\n';
        fields[1].value += fieldsReport[1].value + '\n\n';
    }
    fields[0].value = fields[0].value.substring(0, fields[0].value.length - 2);
    fields[1].value = fields[1].value.substring(0, fields[1].value.length - 2);

    let possR = possession[0] / (possession[0] + possession[1]);
    let possB = 1 - possR;
    let possRString = (possR * 100).toFixed(0).toString();
    let possBString = (possB * 100).toFixed(0).toString();
    let zoneR = actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1]);
    let zoneB = 1 - zoneR;
    let zoneRString = (zoneR * 100).toFixed(0).toString();
    let zoneBString = (zoneB * 100).toFixed(0).toString();
    let win = (game.scores.red > game.scores.blue) * 1 + (game.scores.blue > game.scores.red) * 2;
    let objectBodyWebhook = {
        embeds: [
            {
                title: `📝 MATCH REPORT #${getIdReport()}`,
                description:
                    `**${getTimeEmbed(game.scores.time)}** ` +
                    (win == 1 ? '**Red Team** ' : 'Red Team ') + game.scores.red +
                    ' - ' +
                    game.scores.blue + (win == 2 ? ' **Blue Team**' : ' Blue Team') +
                    '\n```c\nPossession: ' + possRString + '% - ' + possBString + '%' +
                    '\nAction Zone: ' + zoneRString + '% - ' + zoneBString + '%\n```\n\n',
                color: 9567999,
                fields: fields,
                footer: {
                    text: `Recording: ${getRecordingName(game)}`,
                },
                timestamp: new Date().toISOString(),
            },
        ],
        username: roomName
    };
    if (logChannel != '') {
        fetch(logChannel, {
            method: 'POST',
            body: JSON.stringify(objectBodyWebhook),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
}

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    authArray[player.id] = [player.auth, player.conn];
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ➡️ JOIN (${playersAll.length + 1}/${maxPlayers})\n` +
                    `**${player.name}** [${authArray[player.id][0]}] {${authArray[player.id][1]}}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    room.sendAnnouncement(
        `👋 Hi ${player.name} !`,
        player.id,
        welcomeColor,
        'bold',
        HaxNotification.CHAT
    );
    updateTeams();
    updateAdmins();
    if (masterList.findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `👑 [OWNER] ${player.name} has connected to the room`,
            null,
            0xcf911c,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    } else if (adminList.map((a) => a[0]).findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `⚡️ [ADMIN] ${player.name} has connected to the room`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    }
    let sameAuthCheck = playersAll.filter((p) => p.id != player.id && authArray[p.id][0] == player.auth);
    if (sameAuthCheck.length > 0 && !debugMode && !headless) {
        let oldPlayerArray = playersAll.filter((p) => p.id != player.id && authArray[p.id][0] == player.auth);
        for (let oldPlayer of oldPlayerArray) {
            ghostKickHandle(oldPlayer, player);
        }
    }
    handlePlayersJoin();
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    handleLineupChangeTeamChange(changedPlayer);
    if (AFKSet.has(changedPlayer.id) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendAnnouncement(
            `${changedPlayer.name} is AFK !`,
            null,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }
    updateTeams();
    if (gameState != State.STOP) {
        if (changedPlayer.team != Team.SPECTATORS && game.scores.time <= (3 / 4) * game.scores.timeLimit && Math.abs(game.scores.blue - game.scores.red) < 2) {
            changedPlayer.team == Team.RED ? teamRedStats.push(changedPlayer) : teamBlueStats.push(changedPlayer);
        }
    }
    handleActivityPlayerTeamChange(changedPlayer);
    handlePlayersTeamChange(byPlayer);
};

room.onPlayerLeave = function (player) {
    setTimeout(() => {
        if (!kickFetchletiable) {
            if (roomWebhook != '') {
                let stringContent = `[${getDate()}] ⬅️ LEAVE (${playersAll.length}/${maxPlayers})\n**${player.name}**` +
                    `[${authArray[player.id][0]}] {${authArray[player.id][1]}}`;
                fetch(roomWebhook, {
                    method: 'POST',
                    body: JSON.stringify({
                        content: stringContent,
                        username: roomName,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => res);
            }
        } else kickFetchletiable = false;
    }, 10);
    handleLineupChangeLeave(player);
    checkCaptainLeave(player);
    updateTeams();
    updateAdmins();
    handlePlayersLeave();
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    kickFetchletiable = true;
    if (roomWebhook != '') {
        let stringContent = `[${getDate()}] ⛔ ${ban ? 'BAN' : 'KICK'} (${playersAll.length}/${maxPlayers})\n` +
            `**${kickedPlayer.name}** [${authArray[kickedPlayer.id][0]}] {${authArray[kickedPlayer.id][1]}} was ${ban ? 'banned' : 'kicked'}` +
            `${byPlayer != null ? ' by **' + byPlayer.name + '** [' + authArray[byPlayer.id][0] + '] {' + authArray[byPlayer.id][1] + '}' : ''}`
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: stringContent,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    if ((ban && ((byPlayer != null &&
        (byPlayer.id == kickedPlayer.id || getRole(byPlayer) < Role.MASTER)) || getRole(kickedPlayer) == Role.MASTER)) || disableBans
    ) {
        room.clearBan(kickedPlayer.id);
        return;
    }
    if (byPlayer != null && getRole(byPlayer) < Role.ADMIN_PERM) {
        room.sendAnnouncement(
            'You are not allowed to kick/ban players !',
            byPlayer.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(byPlayer.id, false);
        return;
    }
    if (ban) banList.push([kickedPlayer.name, kickedPlayer.id]);
};
class Ball { //ball darxe system
    constructor() {
        this.tp = false;
        this.maxSpeed = 0;
        this.lastKick = '';
        this.lastKickTeam = 0;
        this.assist = '';
    }
    pos(c = false) {
        if(c) {console.log(room.getBallPosition())}
        return room.getBallPosition();
    }
    //set
    set_x(value = 0, id = 0) {
        room.setDiscProperties(id, {x: value});
    }
    set_y(value = 0, id = 0) {
        room.setDiscProperties(id, {y: value});
    }
    set_xspeed(value = 0, id = 0) {
        room.setDiscProperties(id, {xspeed: value});
    }
    set_yspeed(value = 0, id = 0) {
        room.setDiscProperties(id, {yspeed: value});
    }
    set_xgravity(value = 0, id = 0) {
        room.setDiscProperties(id, {xgravity: value});
    }
    set_ygravity(value = 0, id = 0) {
        room.setDiscProperties(id, {ygravity: value});
    }
    set_cGroup(value = 0, id = 0) {
        room.setDiscProperties(id, {cGroup: value});
    }
    set_cMask(value = 0, id = 0) {
        room.setDiscProperties(id, {cMask: value});
    }
    set_color(value = 0, id = 0) {
        room.setDiscProperties(id, {color: value});
    }
    set_damping(value = 0, id = 0) {
        room.setDiscProperties(id, {damping: value});
    }
    set_invMass(value = 0, id = 0) {
        room.setDiscProperties(id, {invMass: value});
    }
    set_radius(value = 0, id = 0) {
        room.setDiscProperties(id, {radius: value});
    }
    //get
    x(id = 0) {
        return room.getDiscProperties(id).x;
    }
    y(id = 0) {
        return room.getDiscProperties(id).y;
    }
    xspeed(id = 0) {
        return room.getDiscProperties(id).xspeed;
    }
    yspeed(id = 0) {
        return room.getDiscProperties(id).yspeed;
    }
    xgravity(id = 0) {
        return room.getDiscProperties(id).xgravity;
    }
    ygravity(id = 0) {
        return room.getDiscProperties(id).ygravity;
    }
    cGroup(id = 0) {
        return room.getDiscProperties(id).cGroup;
    }
    cMask(id = 0) {
        return room.getDiscProperties(id).cMask;
    }
    color(id = 0) {
        return room.getDiscProperties(id).color;
    }
    damping(id = 0) {
        return room.getDiscProperties(id).damping;
    }
    invMass(id = 0) {
        return room.getDiscProperties(id).invMass;
    }
    radius(id = 0) {
        return room.getDiscProperties(id).radius;
    }
    tpBall() {
        room.setDiscProperties(0, {x: 0, y: 0});
        room.setDiscProperties(1, {invMass: 1, radius: 11, cGroup: 193, x: 0, y: 0, xspeed: 0, yspeed: 0})
        room.setDiscProperties(2, {invMass: 1, radius: 11, cGroup: 193, x: 0, y: 0, xspeed: 0, yspeed: 0})
        room.setDiscProperties(3, {invMass: 1, radius: 11, cGroup: 193, x: 0, y: 0, xspeed: 0, yspeed: 0})
        room.setDiscProperties(4, {invMass: 1, radius: 11, cGroup: 193, x: 0, y: 0, xspeed: 0, yspeed: 0})
    }
}
const ball = new Ball();
/* PLAYER ACTIVITY */
room.onPlayerChat = function (player, message) { //chat
    /*if (message === `d`) {
        console.log(`X: ${ball.x(5)} Y: ${ball.y(5)}`);
    }*/
    if (gameState !== State.STOP && player.team != Team.SPECTATORS) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
    let msgArray = message.split(/ +/);
    if (!hideClaimMessage || msgArray[0] != '!claim') {
        if (roomWebhook != '')
            fetch(roomWebhook, {
                method: 'POST',
                body: JSON.stringify({
                    content: `[${getDate()}] 💬 CHAT\n**${player.name}** : ${message.replace('@', '@ ')}`,
                    username: roomName,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res);
    }
    if (msgArray[0][0] == '!') {
        let command = getCommand(msgArray[0].slice(1).toLowerCase());
        if (command != false && commands[command].roles <= getRole(player)) commands[command].function(player, message);
        else
            room.sendAnnouncement(
                `The command you tried to enter does not exist for you. Please enter '!help' to get the available commands to you.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        return false;
    }
    if (msgArray[0].toLowerCase() == 't') {
        teamChat(player, message);
        return false;
    }
    if (msgArray[0].substring(0, 2) === '@@') {
        playerChat(player, message);
        return false;
    }
    if (chooseMode && teamRed.length * teamBlue.length != 0) {
        let choosingMessageCheck = chooseModeFunction(player, message);
        if (choosingMessageCheck) return false;
    }
    if (slowMode > 0) {
        let filter = slowModeFunction(player, message);
        if (filter) return false;
    }
    if (!player.admin && muteArray.getByAuth(authArray[player.id][0]) != null) {
        room.sendAnnouncement(
            `You are muted !`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return false;
    }
    //player chat rang system //darxe
    if (player.admin) {
        room.sendAnnouncement(`[Admin] ${player.name}: ${message}`, undefined, 0xFFD700, "normal", 0);
    } else {
        room.sendAnnouncement(`[Player] ${player.name}: ${message}`, undefined, 0xFFFFFF, "normal", 0);
    }
    return false;
};

room.onPlayerActivity = function (player) {
    if (gameState !== State.STOP) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
};

room.onPlayerBallKick = function (player) {
    if (playSituation != Situation.GOAL) {
        let ballPosition = room.getBallPosition();
        if (game.touchArray.length == 0 || player.id != game.touchArray[game.touchArray.length - 1].player.id) {
            if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
            lastTeamTouched = player.team;
            game.touchArray.push(
                new BallTouch(
                    player,
                    game.scores.time,
                    getGoalGame(),
                    ballPosition
                )
            );
            lastTouches[0] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 1,
                getGoalGame()
            );
            lastTouches[1] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 2,
                getGoalGame()
            );
        }
    }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    clearTimeout(startTimeout);
    if (byPlayer != null) clearTimeout(stopTimeout);
    game = new Game();
    possession = [0, 0];
    actionZoneHalf = [0, 0];
    gameState = State.PLAY;
    endGameletiable = false;
    goldenGoal = false;
    playSituation = Situation.KICKOFF;
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    teamRedStats = [];
    teamBlueStats = [];
    if (teamRed.length == teamSize && teamBlue.length == teamSize) {
        for (let i = 0; i < teamSize; i++) {
            teamRedStats.push(teamRed[i]);
            teamBlueStats.push(teamBlue[i]);
        }
    }
    calculateStadiumletiables();
};

room.onGameStop = function (byPlayer) {
    clearTimeout(stopTimeout);
    clearTimeout(unpauseTimeout);
    if (byPlayer != null) clearTimeout(startTimeout);
    game.rec = room.stopRecording();
    if (
        !cancelGameletiable && game.playerComp[0].length + game.playerComp[1].length > 0 &&
        (
            (game.scores.timeLimit != 0 &&
                ((game.scores.time >= 0.5 * game.scores.timeLimit &&
                    game.scores.time < 0.75 * game.scores.timeLimit &&
                    game.scores.red != game.scores.blue) ||
                    game.scores.time >= 0.75 * game.scores.timeLimit)
            ) ||
            endGameletiable
        )
    ) {
        fetchSummaryEmbed(game);
        if (fetchRecordingletiable) {
            setTimeout((gameEnd) => { fetchRecording(gameEnd); }, 500, game);
        }
    }
    cancelGameletiable = false;
    gameState = State.STOP;
    playSituation = Situation.STOP;
    updateTeams();
    handlePlayersStop(byPlayer);
    handleActivityStop();
};

room.onGamePause = function (byPlayer) {
    if (mentionPlayersUnpause && gameState == State.PAUSE) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Game paused by ${byPlayer.name} !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Game paused !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    clearTimeout(unpauseTimeout);
    gameState = State.PAUSE;
};

room.onGameUnpause = function (byPlayer) {
    unpauseTimeout = setTimeout(() => {
        gameState = State.PLAY;
    }, 2000);
    if (mentionPlayersUnpause) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Game unpaused by ${byPlayer.name} !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Game unpaused !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    if (
        (teamRed.length == teamSize && teamBlue.length == teamSize && chooseMode) ||
        (teamRed.length == teamBlue.length && teamSpec.length < 2 && chooseMode)
    ) {
        deactivateChooseMode();
    }
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    game.scores = scores;
    playSituation = Situation.GOAL;
    ballSpeed = getBallSpeed();
    let goalString = getGoalString(team);
    for (let player of teamRed) {
        let playerComp = getPlayerComp(player);
        team == Team.RED ? playerComp.goalsScoredTeam++ : playerComp.goalsConcededTeam++;
    }
    for (let player of teamBlue) {
        let playerComp = getPlayerComp(player);
        team == Team.BLUE ? playerComp.goalsScoredTeam++ : playerComp.goalsConcededTeam++;
    }
    room.sendAnnouncement(
        goalString,
        null,
        team == Team.RED ? redColor : blueColor,
        null,
        HaxNotification.CHAT
    );
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ${goalString}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    if ((scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit)) || goldenGoal) {
        endGame(team);
        goldenGoal = false;
        stopTimeout = setTimeout(() => {
            room.stopGame();
        }, 1000);
    }
};

room.onPositionsReset = function () {
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    playSituation = Situation.KICKOFF;
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
    console.log(`${url}\nmasterPassword : ${masterPassword}`);
	
    if (roomWebhook != '' && masterPasswordAuth) {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] 🔗 @Pharaoh89 LINK ${url}\nmasterPassword : ${masterPassword}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    updateTeams();
    if (!changedPlayer.admin && getRole(changedPlayer) >= Role.ADMIN_TEMP) {
        room.setPlayerAdmin(changedPlayer.id, true);
        return;
    }
    updateAdmins(byPlayer != null && !changedPlayer.admin && changedPlayer.id == byPlayer.id ? changedPlayer.id : 0);
};

room.onKickRateLimitSet = function (min, rate, burst, byPlayer) {
    if (byPlayer != null) {
        room.sendAnnouncement(
            `It is not allowed to change the kickrate limit. It must stay at "6-0-0".`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setKickRateLimit(6, 0, 0);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    if (byPlayer !== null) {
        if (getRole(byPlayer) < Role.MASTER && currentStadium != 'other') {
            room.sendAnnouncement(
                `You can't change stadium manually ! Please use the stadium commands.`,
                byPlayer.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
            stadiumCommand(emptyPlayer, `!${currentStadium}`);
        } else {
            room.sendAnnouncement(
                `Map changed. After you're done with this map, please use the stadium commands.`,
                byPlayer.id,
                infoColor,
                'bold',
                HaxNotification.CHAT
            );
            currentStadium = 'other';
        }
    }
    checkStadiumletiable = true;
};

room.onGameTick = function () { //tick
    checkTime();
    getLastTouchOfTheBall();
    getGameStats();
    handleActivity();
    handleDef();
};

class Notify { //darxe notify system
    discord(){
        room.sendAnnouncement(`EEF Discord - https://discord.gg/FHXZ8ghHXK`,null,0xffffff,"bold",null);
    }
	info(){
        room.sendAnnouncement(`[Update November 2, v23.8.1317] We have returned! Stable connection and no unfair bans [@Pharaoh89]`,null, 0x969696,"bold",null);
    }
}
const notify = new Notify();

setInterval(notify.discord, 170000); //dc 0xffffff
setInterval(notify.info, 250000); //info