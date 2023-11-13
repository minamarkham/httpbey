const statuses = {
	100: {
		code: 100,
		message: 'Continue',
		set: 1,
		desc: '"Carry on."',
		source: 'https://giphy.com/gifs/beyonce-single-carry-on-kXrj8H7qcucZW',
	},
	101: {
		code: 101,
		message: 'Switching Protocols',
		set: 1,
		desc: '',
		source: 'https://giphy.com/gifs/sexy-beyonce-perfect-SIGFCnVhEQKw8',
	},
	102: {
		code: 102,
		message: 'Processing',
		set: 1,
		desc: '',
		source: 'https://giphy.com/gifs/beyonce-Vnxu5OOeu7RIs',
	},
	103: {
		code: 103,
		message: 'Early Hints',
		set: 1,
		desc: '',
		source: 'https://giphy.com/gifs/beyonce-jay-z-blue-ivy-l0IyeifaGT2G49ccM',
	},
	200: {
		code: 200,
		message: 'OK',
		set: 2,
		desc: '',
		source: 'https://giphy.com/gifs/ok-thats-good-for-whoring-this-out-95XryhG9Ylbws',
	},
	201: {
		code: 201,
		message: 'Created',
		set: 2,
		desc: '',
		source: 'https://giphy.com/gifs/beyonce-vmas-pregnant-mkVaMw8F7AsKY',
	},
	202: {
		code: 202,
		message: 'Accepted',
		set: 2,
		desc: '',
		source: 'https://i.gifer.com/3orz.gif',
	},
	// 203: { code: 203, message: 'Non-authoritative Information', set: 2, desc: '', source: '' },
	// 204: { code: 204, message: 'No Content', set: 2, desc: '', source: '' },
	205: {
		code: 205,
		message: 'Reset Content',
		set: 2,
		desc: '',
		source: 'https://giphy.com/gifs/beyonce-hair-flip-nSPEShm513TZ6',
	},
	206: { code: 206, message: 'Partial Content', set: 2, desc: '', source: '' },
	// 207: { code: 207, message: 'Multi-Status', set: 2, desc: '', source: '' },
	208: {
		code: 208,
		message: 'Already Reported',
		set: 2,
		desc: '',
		source: 'https://s.yimg.com/ny/api/res/1.2/DGnOfdYBJKna_5NcgB84UA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2Nw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/71f5f18495b12db0aefdb8c58ac75fbf',
	},
	226: { code: 226, message: 'IM Used', set: 2, desc: '', source: 'https://gifer.com/en/XKqi' },
	300: {
		code: 300,
		message: 'Multiple Choices',
		set: 3,
		desc: '',
		source: 'https://giphy.com/gifs/beyonce-queen-renaissance-im-that-girl-saJ4Lt12dUmPucCrDh',
	},
	301: {
		code: 301,
		message: 'Moved Permanently',
		set: 3,
		desc: '',
		source: 'https://baddiebeyfashion.files.wordpress.com/2015/04/tumblr_nmx7d1btbf1riaiodo9_r1_1280.gif',
	},
	302: {
		code: 302,
		message: 'Found',
		set: 3,
		desc: '',
		source: 'https://giphy.com/gifs/vmas-beyonce-surprised-chance-the-rapper-l0MYxsEUe1yu8gVVe',
	},
	303: { code: 303, message: 'See Other', set: 3, desc: '', source: '' },
	304: { code: 304, message: 'Not Modified', set: 3, desc: '', source: '' },
	305: {
		code: 305,
		message: 'Use Proxy',
		set: 3,
		desc: '',
		source: 'https://giphy.com/gifs/mashable-beyonce-channing-tatum-lip-sync-battle-3o6UB2o6NbtNqlNoCA',
	},
	307: {
		code: 307,
		message: 'Temporary Redirect',
		set: 3,
		desc: '',
		source: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-05/18/17/enhanced/webdr01/anigif_original-9074-1431983135-15.gif',
	},
	308: { code: 308, message: 'Permanent Redirect', set: 3, desc: '', source: '' },
	400: {
		code: 400,
		message: 'Bad Request',
		set: 4,
		desc: '',
		source: 'https://wifflegif.com/gifs/437516-beyonce-funny-short-hair-gif',
	},
	401: {
		code: 401,
		message: 'Unauthorized',
		set: 4,
		desc: '"Who the **** do you think I is?"',
		source: 'https://giphy.com/gifs/beyonce-lemonade-3o6ozDwjzGi2B4TdXq',
	},
	402: {
		code: 402,
		message: 'Payment Required',
		set: 4,
		desc: '',
		source: 'https://giphy.com/gifs/mic-women-college-pay-gap-m0J68sF7IOSHK',
	},
	403: {
		code: 403,
		message: 'Forbidden',
		set: 4,
		desc: '',
		source: 'https://i.pinimg.com/originals/b4/0a/6b/b40a6b504701f9ee79a98bc5bf0644f5.gif',
		// source: 'https://diversao.terra.com.br/infograficos/img/beyonce.gif',
	},
	404: {
		code: 404,
		message: 'Not Found',
		set: 4,
		desc: '',
		source: 'https://tenor.com/view/beyonce-sorry-where-looking-around-gif-14002591',
	},
	405: {
		code: 405,
		message: 'Method Not Allowed',
		set: 4,
		desc: '',
		source: 'https://tenor.com/view/beyonce-711-phone-foot-queen-bey-gif-5678008',
	},
	406: {
		code: 406,
		message: 'Not Acceptable',
		set: 4,
		desc: '"No, no. No."',
		source: 'https://giphy.com/gifs/coachella-beychella-beyonce-homecoming-RLQblftWOdp8mFe5KN',
	},
	// 407: { code: 407, message: 'Proxy Authentication Required', set: 4, desc: '', source: '' },
	408: { code: 408, message: 'Request Timeout', set: 4, desc: '', source: '' },
	409: {
		code: 409,
		message: 'Conflict',
		set: 4,
		desc: '',
		source: 'https://tenor.com/view/loseit-bat-beyonce-lemonade-gif-6061703',
	},
	410: {
		code: 410,
		message: 'Gone',
		set: 4,
		desc: '"Boy bye"',
		source: 'https://giphy.com/gifs/beyonce-boy-bye-sorry-mv-l2Sq3gitDaUatBt0A',
	},
	411: { code: 411, message: 'Length Required', set: 4, desc: '', source: '' },
	// 412: { code: 412, message: 'Precondition Failed', set: 4, desc: '', source: '' },
	// 413: { code: 413, message: 'Payload Too Large', set: 4, desc: '', source: '' },
	// 414: { code: 414, message: 'Request-URI Too Long', set: 4, desc: '', source: '' },
	415: {
		code: 415,
		message: 'Unsupported Media Type',
		set: 4,
		desc: '',
		source: 'https://tenor.com/view/beyonce-dancing-3d-glasses-gif-5924179',
	},
	// 416: { code: 416, message: 'Requested Range Not Satisfiable', set: 4, desc: '', source: '' },
	417: {
		code: 417,
		message: 'Expectation Failed',
		set: 4,
		desc: '',
		source: 'https://giphy.com/gifs/beyonce-HGHiupwwcEak',
	},
	418: {
		code: 418,
		message: 'I’m a teapot',
		set: 4,
		desc: '',
		source: 'https://tenor.com/view/beyonce-oh-no-you-didnt-reaction-angry-sass-gif-5677603',
	},
	420: {
		code: 420,
		message: 'Method Failure',
		set: 4,
		desc: '',
		source: 'https://tenor.com/view/beyonce-711-jump-bathroom-queen-bey-gif-5678009',
	},
	// 421: { code: 421, message: 'Misdirected Request', set: 4, desc: '', source: '' },
	422: {
		code: 422,
		message: 'Unprocessable Entity',
		set: 4,
		desc: '',
		source: 'https://tenor.com/view/queenbey-beyonce-kingbey-gif-9667803',
	},
	// 423: { code: 423, message: 'Locked', set: 4, desc: '', source: '' },
	// 424: { code: 424, message: 'Failed Dependency', set: 4, desc: '', source: '' },
	// 425: { code: 425, message: 'Too Early', set: 4, desc: '', source: '' },
	426: {
		code: 426,
		message: 'Upgrade Required',
		set: 4,
		desc: '',
		source: 'https://makeagif.com/gif/beyonce-upgrade-u-video-ft-jay-z-qdUZdV',
	},
	428: {
		code: 428,
		message: 'Precondition Required',
		set: 4,
		desc: '',
		source: 'https://tenor.com/view/beyonce-single-ladies-dance-choreography-sassy-gif-5502043',
	},
	429: { code: 429, message: 'Too Many Requests', set: 4, desc: '', source: '' },
	// 431: { code: 431, message: 'Request Header Fields Too Large', set: 4, desc: '', source: '' },
	// 444: { code: 444, message: 'Connection Closed Without Response', set: 4, desc: '', source: '' },
	// 450: { code: 450, message: 'Blocked by Windows Parental Controls', set: 4, desc: '', source: '' },
	451: {
		code: 451,
		message: 'Unavailable For Legal Reasons',
		set: 4,
		desc: '',
		source: 'https://gifer.com/en/4ewh',
	},
	// 497: { code: 497, message: 'HTTP Request Sent to HTTPS Port', set: 4, desc: '', source: '' },
	// 498: { code: 498, message: 'Invalid Token', set: 4, desc: '', source: '' },
	// 499: { code: 499, message: 'Client Closed Request', set: 4, desc: '', source: '' },
	500: {
		code: 500,
		message: 'Internal Server Error',
		set: 5,
		desc: '',
		source: 'https://tenor.com/view/black-women-black-girl-magic-gorgeous-beyonce-fierce-gif-17280095',
	},
	// 501: { code: 501, message: 'Not Implemented', set: 5, desc: '', source: '' },
	// 502: { code: 502, message: 'Bad Gateway', set: 5, desc: '', source: '' },
	// 503: { code: 503, message: 'Service Unavailable', set: 5, desc: '', source: '' },
	// 504: { code: 504, message: 'Gateway Timeout', set: 5, desc: '', source: '' },
	// 506: { code: 506, message: 'Variant Also Negotiates', set: 5, desc: '', source: '' },
	// 507: { code: 507, message: 'Insufficient Storage', set: 5, desc: '', source: '' },
	508: {
		code: 508,
		message: 'Loop Detected',
		set: 5,
		desc: '',
		source: 'https://img.wattpad.com/274f6ed246dfbffa0d7f77b2f50e1d36934f6e89/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5f7576475a46626a786b7a4776773d3d2d3435383732363938372e3134646339656633393931373832333333323337393135353735342e676966',
	},
	// 509: { code: 509, message: 'Bandwidth Limit Exceeded', set: 5, desc: '', source: '' },
	510: {
		code: 510,
		message: 'Not Extended',
		set: 5,
		desc: '',
		source: 'https://tenor.com/view/beyonce-lemonade-gif-5394025',
	},
	// 511: { code: 511, message: 'Network Authentication Required', set: 5, desc: '', source: '' },
	// 521: { code: 521, message: 'Web Server Is Down', set: 5, desc: '', source: '' },
	// 523: { code: 523, message: 'Origin Is Unreachable', set: 5, desc: '', source: '' },
	// 525: { code: 525, message: 'SSL Handshake Failed', set: 5, desc: '', source: '' },
	530: {
		code: 530,
		message: 'Site Frozen',
		set: 5,
		desc: '',
		source: 'https://giphy.com/gifs/jasmyn-xT0Gqt42hxD0TXeN9K',
	},
	// 599: { code: 599, message: 'Network Connect Timeout Error', set: 5, desc: '', source: '' },
};

const categories = {
	1: 'Informational',
	2: 'Success',
	3: 'Redirection',
	4: 'Client Error',
	5: 'Server Error',
};

module.exports = {
	statuses,
	categories,
};