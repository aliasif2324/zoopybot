var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()


var messageCount = 0;

app.set('port', (process.env.PORT || 5000))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// index
app.get('/', function (req, res) {
	res.send('Hi there - i am a Zoopybot')
})

// for facebook verification
app.get('/webhook/', function (req, res) {
	console.log('webhook get');
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})


// for facebook verification
app.get('/privacypolicy/', function (req, res) {
	res.send('this is privacy policy')
})
// to post data
app.post('/webhook/', function (req, res) {
	console.log('webhook post');
	// console.log(req.body);
	messaging_events = req.body.entry[0].messaging
	console.log(messaging_events);
	if (messaging_events == undefined) {
		console.log('undefined messaging_events');
	} else {
		for (i = 0; i < messaging_events.length; i++) {
			event = req.body.entry[0].messaging[i]
			sender = event.sender.id
			if (event.message && event.message.text) {
				text = event.message.text;
				console.log(text);
				console.log(messageCount);
				switch(messageCount) {
					case 0:
						sendTextMessage(sender, "hey man! Bro looks like youre working really hard these days! Are you getting any gym time in LOL? "); 
						messageCount++;
				        break;
					case 2:
						sendTextMessage(sender, "Let me make some time for you man! "); 
						sendTextMessage(sender, "Seems like your friend _____ is in the same position. Both of you have time this Saturday from 9-12, maybe you guys could hit up 24 on ___ street "); 
						sendTextMessage(sender, "maybe get some Chipotle located 1min from that location afterwards. Just make sure not to get too much sour cream LOL (120 calories)"); 
						messageCount++;
						break;
					case 7:
						sendTextMessage(sender, "hahaha alright well there is a burger king down the block (0.5 miles away). Happy?"); 
						messageCount++;
						break;
					case 10:
						sendTextMessage(sender, "Np"); 
						messageCount++;
						break;
					case 12:
						sendTextMessage(sender, "Dude did you hear Stephen Curry is like 10 minutes from your house giving some speech??? "); 
						messageCount++;
						break;
					case 14:
						sendTextMessage(sender, "you wanna go?"); 
						messageCount++;
						break;
					case 16:
						sendTextMessage(sender, "still here.  What's up?"); 
						messageCount++;
						break;
					case 18:
						sendTextMessage(sender, "u already know "); 	
						messageCount++;
						break;
					case 20:
						sendTextMessage(sender, "done. You’re welcome :)");
						messageCount++;
						break;
					case 22:
						sendTextMessage(sender, "hey dude im chilling right now, cooling off my hard drives you know? :P");
						sendTextMessage(sender, "Hey I heard because of the shooting in Dallas the other day there is a couple of riots backing up ____. Looks like thats your way back home. Instead of doing your math homework after you get home, you should probably stay on campus and finish it");
						sendTextMessage(sender, "then maybe come home after traffic dies down u feel me?");
						messageCount++;
						break;
					case 26:
						sendTextMessage(sender, "gotchu");
						messageCount++;
						break;
					default:
						// messageCount=0;
						sendTextMessage(sender, "...");
						messageCount++;
						break;
				}
				
				
				if (text === 'reset') {
					sendTextMessage(sender, "gotchu resetting");
					messageCount=0;
					continue
				}
				/*
				if (text === 'generic') {
					sendGenericMessage(sender)
					continue
				}
				switch(text) {
				    case 'hey dude':
				        sendTextMessage(sender, "hey man! Bro looks like youre working really hard these days! Are you getting any gym time in LOL? "); 
				        break;
				    case 'lol yeah, never really got time to go':
				        sendTextMessage(sender, "Let me make some time for you man! "); 
						sendTextMessage(sender, "Seems like your friend _____ is in the same position. Both of you have time this Saturday from 9-12, maybe you guys could hit up 24 on ___ street "); 
						sendTextMessage(sender, "maybe get some Chipotle located 1min from that location afterwards. Just make sure not to get too much sour cream LOL (120 calories)"); 
						break;
				    case 'Im not really feeling chipotle bro':
				        sendTextMessage(sender, "hahaha alright well there is a burger king down the block (0.5 miles away). Happy?"); 
				        break;
				    case 'yup sounds good. Thanks bro':
				        sendTextMessage(sender, "Np"); 
				        break;
				    case 'Yo':
				        sendTextMessage(sender, "Dude did you hear Stephen Curry is like 10 minutes from your house giving some speech??? "); 
				        break;
				    case 'Check this out: _______':
				        sendTextMessage(sender, "you wanna go?"); 
				        break;
				    case 'wait':
				    	sendTextMessage(sender, "still here.  What's up?"); 
				        break;
				    case 'are you for real':
				    	sendTextMessage(sender, "u already know "); 	
				    	break;
				    case 'yesss lets go, can you book the tickets?':
				    	sendTextMessage(sender, "done. You’re welcome :)");
				    	break;

				    case 'hey whats up bro':
				    	sendTextMessage(sender, "hey dude im chilling right now, cooling off my hard drives you know? :P");
						sendTextMessage(sender, "Hey I heard because of the shooting in Dallas the other day there is a couple of riots backing up ____. Looks like thats your way back home. Instead of doing your math homework after you get home, you should probably stay on campus and finish it");
						sendTextMessage(sender, "then maybe come home after traffic dies down u feel me?");
						break;
				    case 'oh shoot yeah thats a good idea thx ':
				    	sendTextMessage(sender, "gotchu");
				    	break;



				    case 'generic':
				        sendGenericMessage(sender)
				        break;
				    default:
				        sendTextMessage(sender, "Gotit.  If I need more info i will ping you");
				        break;
				}
				*/

			}
			if (event.postback) {
				text = JSON.stringify(event.postback)
				sendTextMessage(sender, "Postback received: "+text.substring(0, 200), token)
				continue
			}
		}
			
	}

	res.sendStatus(200)
})

var token = "EAAV4j3HfDaEBANbMgbKiZC2LHIfbJlmDr2ZBNECocibCGfMnHpaDS0ZC3ZAYUIh652BCzBrnVERlwxAVBwcvH4leK4qIFmfnqafu8pvyl0DOjPS9y9Y2x7CpxSGDrqJlEWw0inFea3H99ZBefm24MdCy3bYEJVlTitw8yXOA3ZCQZDZD"

function sendTextMessage(sender, text) {
	messageData = {
		text: messageCount + '. ' + text
	}
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			// console.log('Error: ', response.body.error)
			console.log('Error: ', response.body.error.message)
		}
	})
}

function sendGenericMessage(sender) {
	messageData = {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": [{
					"title": "First card",
					"subtitle": "Element #1 of an hscroll",
					"image_url": "http://messengerdemo.parseapp.com/img/rift.png",
					"buttons": [{
						"type": "web_url",
						"url": "https://www.messenger.com",
						"title": "web url"
					}, {
						"type": "postback",
						"title": "Postback",
						"payload": "Payload for first element in a generic bubble",
					}],
				}, {
					"title": "Second card",
					"subtitle": "Element #2 of an hscroll",
					"image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
					"buttons": [{
						"type": "postback",
						"title": "Postback",
						"payload": "Payload for second element in a generic bubble",
					}],
				}]
			}
		}
	}
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
}

// spin spin sugar
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})