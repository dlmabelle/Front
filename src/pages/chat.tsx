import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonButton } from '@ionic/react';

const ChatPage: React.FC = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<string[]>(['Hello', 'Hi']);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList className="chat-list">
          {messages.map((message, index) => (
            <IonItem key={index} className="chat-item">
              {message}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonToolbar className="chat-input-toolbar">
        <IonInput
          value={newMessage}
          placeholder="Type your message"
          onIonChange={(e) => setNewMessage(e.detail.value!)}
          className="chat-input"
        />
        <IonButton expand="full" onClick={sendMessage} className="chat-button">
          Send
        </IonButton>
      </IonToolbar>
    </IonPage>
  );
};

export default ChatPage;
