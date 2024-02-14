import * as Notificaitons from 'expo-notifications';
import { useEffect } from 'react';

export function Notificaiton() {
	Notificaitons.setNotificationHandler({
		handleNotification: async () => ({
			shouldPlaySound: true,
			shouldSetBadge: true,
			shouldShowAlert: true,
		}),
	});

	useEffect(() => {
		const subRecieved = Notificaitons.addNotificationReceivedListener((notification) => {
			console.log(notification.request.content.data);
		});
		const subResponseReceived = Notificaitons.addNotificationResponseReceivedListener(
			(notification) => {
				console.log('Clicked');
				console.log(notification.notification.request.content.data);
			},
		);
		return () => {
			subRecieved.remove();
			subResponseReceived.remove();
		};
	}, []);

	return <></>;
}
