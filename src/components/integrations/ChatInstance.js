import React from 'react';

function ChatInstance({ width, height, backgroundColor }) {
	return (
		<iframe
			id='chat'
			type='text/html'
			width='800'
			height='800'
			src='https://messenger.interspace.chat/channel/general?layout=embedded'
			frameborder='0'></iframe>
	);
}

export default ChatInstance;
