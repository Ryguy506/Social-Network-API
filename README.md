# Social-Network-API

## Description

This is a social network API that uses a NoSQL database to store data. The API uses Express.js for routing, a MongoDB database, and the Mongoose ODM. The API allows users to create, read, update, and delete users, thoughts, and reactions. Users can also add and remove friends from their friend list.    
   

## Table of Contents

* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)




## Demo

https://www.youtube.com/watch?v=q3r3EzYIV3M&ab_channel=Ryan



## Installation
node.js and mongoDB must be installed on your machine. 
 clone the repo to your local machine, and then install the dependencies.


```
npm i
```

## Usage
to start the server, run the following command:

```
npm start
```

use insomnia to test the routes

user routes:
```
GET /api/users to get all users
GET /api/users/:id to get a single user by its _id
POST /api/users to create a user
PUT /api/users/:id to update a user by its _id
DELETE /api/users/:id to delete a user by its _id
```

thought routes:
```
GET /api/thoughts to get all thoughts 
GET /api/thoughts/:id to get a single thought by its _id
POST /api/thoughts to create a thought
PUT /api/thoughts/:id to update a thought by its _id
DELETE /api/thoughts/:id to delete a thought by its _id
```

reaction routes:
```
POST /api/thoughts/:id/reactions to create a reaction for a thought
DELETE /api/thoughts/:id/reactions/:reactionId  to delete a reaction for a thought
```

friend routes:
```
POST /api/users/:id/friends/:friendId to add a friend to a user's friend list
DELETE /api/users/:id/friends/:friendId to delete a friend from a user's friend list
```

## License

MIT License
