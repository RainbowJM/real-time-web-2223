# Real-Time Web @cmda-minor-web 2022 - 2023

## 🏫 Course 
For this course we have to develop an chat that receives and gives out data in real time (you can see the data immediately). To start off with this course, we are given the assignment to start building an chat application together as a team. So that we have a strong base to start off and then we can add our own functionalities to pass this course. This assignment is quite time restricting, because we start off with this project on Monday and the next day (Tuesday) we have to complete the assignment and receive feedback from the teachers.

## 🤔 Concept
We have decided to first focus on getting to know socket.io, because it has different kind of events and we are still unfamiliar with the events. So our design will be simple and also we will only be developing 1 page, a really basic chatroom. Where you can chat with multiple users, also the users won't be anonymous, they will be given names. 

## ✏️ Sketches / design
![image 1](https://user-images.githubusercontent.com/94360732/232487129-7857ca76-19d2-41d1-80d1-c9af0ead5c89.png)

## 🪆 MoSCoW

### Must have
- Chat with multiple users
- Receive and send real time data

### Should have
- See each others names
- See the date
- Nice UI

### Could have
- The time of the message that is sent

### Would have
- You can see the other user is typing a message


## 🛠️ Used tools
- Npm
- Nodejs
- Express
- Template engine ejs
- Socket.io

## ⚙️ Installation
Clone repo

``` 
Git clone https://github.com/RainbowJM/real-time-web-2223.git
```

NVM install 

```
nvm install 19.8.1
```

Express install
```
npm install express
```
EJS install

``` 
npm install ejs

```
Socket.io install 

```
npm install socket.io

```

Start application 

``` 
npm start
```
## Real time / Socket.io events ⏰
In real time / Socket.io the events are kind of different than javascript. Here we use specifiek events to receive and send different data.

**.emit**
Here the admin sends different kind of data to the users. You can simply use the .emit behind the given function. (example: socket.emit("hello", "world"); )

**Connection**
This event is the main event. It's performs when a user makes a new connection with the server. This is the connection with the socket.

**User connect**
This event gets triggered when a new user is connecting with the game. It sends the username and triggers a join message with the username so everyone in the game can see who joined.

**Message**
This event is performed when a user wants to send a message in the chat, this can be to chat with others or to guess the answer for the game.

**Get data ( new character )**
This events gets triggered when the user enters the chat after sending their username. The marvel API data will be collected and filtered and a random item from the array will be shown. It gets triggered again after the former question gets answered right.

**Answer**
When a user is attempting to guess the right answer, this event gets triggered. When a chat message is send, it will be checked if the message contains the right answer. If this is the case, another message will be shown saying the right answer has been given.

**User left**
This event gets performed when a user leaves. It makes sure a message is sent that a user has left (with their username).

## ⚖ License
[MIT](https://github.com/RainbowJM/real-time-web-2223/blob/main/LICENSE) 

## ✍ Author
- Jevona Magdalena
- Keïsha Alexande
- Laiba Choudhry
