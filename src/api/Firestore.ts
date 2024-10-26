import { addDoc, collection, doc, getDocs, onSnapshot, setDoc } from "@firebase/firestore";
import { database } from "../fb/firebase";
import * as Notifications from 'expo-notifications';


async function getNotification() {
    
    const notifications = collection(database, 'events');
    const notificationSnapshots = await getDocs(notifications);

    const notificationsData = notificationSnapshots.docs.map(doc => doc.data());

    return notificationsData;
  }

async function addNotif(notificationUrgency: string, notificationText: string) {
    const docRef = await addDoc(collection(database, "events"), {
        text: notificationText,
        urgency: notificationUrgency
      });
}

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Ktoś w pobliżu potrzebuje pomocy!',
        body: `Zgłoszenie: Pomoc przy powodzi`,
        badge: 0
      },
      trigger: { seconds: 2 },
    });
  }

export { getNotification, addNotif, schedulePushNotification };