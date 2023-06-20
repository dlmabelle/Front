// import React from 'react';
import { IonList, IonItem } from '@ionic/react';
import React, { useEffect, useState } from "react";
interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

const ChatList: React.FC = () => {
  const chats = [
    { id: 1, sender: 'John' },
    { id: 2, sender: 'Alice' },
    { id: 3, sender: 'Bob' },
    
  ];
  const [categorie, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const openChat = (chatId: number) => {
    // Implement the logic to navigate to the chat page with the selected chat
    console.log(`Open chat with ID: ${chatId}`);
  };
  useEffect(() => {
    const fechData = async() => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const chats = await response.json();
            setCategories(chats.categories);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    fechData();
}, []);

  return (
    <IonList>
      {chats.map((chat) => (
        <IonItem key={chat.id} onClick={() => openChat(chat.id)}>
          {chat.sender}
        </IonItem>
      ))}
    </IonList>
  );
};

export default ChatList;
