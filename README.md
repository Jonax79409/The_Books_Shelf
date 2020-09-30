# The_Books_Shelf

link - https://pacific-headland-09289.herokuapp.com/

This is a book reviewing platform where users can review a book and provide other details like rating, price of the book.<br/> 
Comments and suggestions are most welcomed .

### Installation

You must have [Node.js](https://nodejs.org/) version 12.x installed in order to run this.

#### For node version

```sh
node -v
```

### Install the dependencies 

```sh
$ npm install
$ cd client
$ npm install
```

### To start the Project 

```sh
$ npm run dev
```

Runs the app in the development mode.<br/>
Open http://localhost:3000 to view it in the browser.


### Project Structure

```
├── client
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── css
│   │   │   └── style.css
│   │   ├── favicon.ico
│   │   ├── images
│   │   │   └── avatar.png
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   └── src
│       ├── actions
│       │   └── index.js
│       ├── components
│       │   ├── Admin
│       │   │   ├── index.js
│       │   │   ├── logout.js
│       │   │   └── userPosts.js
│       │   ├── Books
│       │   │   └── index.js
│       │   ├── header
│       │   │   ├── header.js
│       │   │   └── sidenav
│       │   │       ├── side_nav_items.js
│       │   │       └── sidenav.js
│       │   └── home.js
│       ├── containers
│       │   ├── admin
│       │   │   ├── add.js
│       │   │   ├── edit.js
│       │   │   ├── login.js
│       │   │   └── register.js
│       │   └── home_container.js
│       ├── hoc
│       │   ├── auth.js
│       │   └── layout.js
│       ├── index.js
│       ├── logo.svg
│       ├── reducers
│       │   ├── books_reducer.js
│       │   ├── index.js
│       │   └── user_reducer.js
│       ├── routes.js
│       ├── serviceWorker.js
│       ├── setupTests.js
│       └── widgetsUI
│           └── book_item.js
├── package.json
├── package-lock.json
└── server
    ├── config
    │   └── config.js
    ├── middleware
    │   └── auth.js
    ├── models
    │   ├── book.js
    │   └── user.js
    └── server.js
```
