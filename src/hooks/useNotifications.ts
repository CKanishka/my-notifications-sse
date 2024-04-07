import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EVENT_SOURCE_URL = "http://localhost:3000/events";

const SAMPLE_NOTIFICATIONS = [
  { id: 1, title: "New user!", info: "A new user registered" },
  { id: 2, title: "Invite received", info: "Received invite from Jane" },
  { id: 3, title: "Email sent", info: "Doc access email sent to Joe" },
];

const useNotifications = () => {
  const [notifications, setNotifications] = useState(SAMPLE_NOTIFICATIONS);

  useEffect(() => {
    const eventSource = new EventSource(EVENT_SOURCE_URL);

    eventSource.onopen = () => {
      console.log("Connection to server opened.");
    };

    eventSource.onerror = () => {
      console.log("Error occurred while connecting.");
    };

    eventSource.onmessage = (event) => {
      toast("You have a new notification!");
      try {
        const data = JSON.parse(event.data);
        setNotifications((prevData) => [data, ...prevData]);
        console.log("Received data:", data);
      } catch {
        console.log("Something went wrong while receiving data");
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return notifications;
};

export default useNotifications;
