const domain = 'portal.interspace.chat';

export const JitsiInstances = ['room1', 'room2', 'room3', 'room4', 'room5'];

export const RoomURLs = {
	room1: {
		jitsi: {
			domain,
			roomName: 'room1'
		},
		mozillaHub: {
			externalUrl: 'https://hubs.mozilla.com/nKCuNrg/house-of-defiance'
		},
		youtube: {
			videoId: 'X5k8Cbr0d44',
			externalUrl: 'https://youtu.be/X5k8Cbr0d44'
		}
	},
	room2: {
		jitsi: { domain, roomName: 'room2' },
		mozillaHub: {
			externalUrl: 'https://hubs.mozilla.com/eJZGNU5/house-of-daos'
		},
		youtube: {
			videoId: 'k0UpUwmKaHc',
			externalUrl: 'https://youtu.be/k0UpUwmKaHc'
		}
	},
	room3: {
		jitsi: {
			domain,
			roomName: 'room3'
		},
		mozillaHub: {
			externalUrl: 'https://hubs.mozilla.com/tpKKcfA/house-of-adoption'
		},
		youtube: {
			videoId: '_DxQQKrxYFI',
			externalUrl: 'https://youtu.be/_DxQQKrxYFI'
		}
	},
	room4: {
		jitsi: {
			domain,
			roomName: 'room4'
		},
		mozillaHub: {
			externalUrl: 'https://hubs.mozilla.com/nx5rV57/stress-test-arena'
		},
		youtube: {
			videoId: 'pWfUAjIgoJM',
			externalUrl: 'https://youtu.be/pWfUAjIgoJM'
		}
	},
	room5: {
		jitsi: {
			domain,
			roomName: 'room5'
		},
		mozillaHub: { externalUrl: 'https://hubs.mozilla.com/LmrJQqL/raid-guild' },
		youtube: {
			videoId: 'f2bnDe5-3mM',
			externalUrl: 'https://youtu.be/p7gJTpauAgk'
		}
	}
};

export const RoomNames = Object.keys(RoomURLs);
