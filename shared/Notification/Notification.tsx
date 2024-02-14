import * as Notificaitons from 'expo-notifications';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export function Notificaiton() {
	const router = useRouter();

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
				const alias = notification.notification.request.content.data.alias;
				router.push(`/(app)/course/${alias}`);
			},
		);
		return () => {
			subRecieved.remove();
			subResponseReceived.remove();
		};
	}, []);

	return <></>;
}
