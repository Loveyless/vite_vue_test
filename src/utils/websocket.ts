/**
 * @param url 链接链接
 * @param onMessage 当发送消息时
 * @return ws 返回websocket实例
 */
export function useWebSocket(url: string, onMessage: (data: any) => any) {
	const ws = new WebSocket(url);

	ws.onopen = e => {
		console.log("open", e);
	};

	ws.onmessage = onMessage;

	ws.onclose = e => {
		console.log("close", e);
	};

	ws.onerror = e => {
		console.log("error", e);
	};

	return ws;
}
