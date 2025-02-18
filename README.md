# Task Manager

## Overview
Task Manager is a web application that allows users to manage their daily tasks efficiently. Users can sign up, log in using traditional authentication or OAuth (Google & Facebook), and manage their tasks, to-dos, and notes with additional features like dark/light mode and live random quotes.

## Features

### Authentication
- User Sign-up & Sign-in
- OAuth Authentication (Google & Facebook)
- Secure JWT-based authentication
- Logout functionality

### To-Do List
- Create new to-dos
- Search to-dos
- Delete to-dos
- Check completed to-dos
- View to-dos on the dashboard

### Tasks Management
- Add new tasks
- Search tasks
- Set task priority
- Select a due date
- Mark tasks as done
- Delete tasks

### Notes Management
- Add new notes
- Edit & save notes
- Delete notes
- Search notes

### Additional Features
- Toggle between Dark & Light mode
- Fetch & display live random quotes from [API Ninjas](https://api.api-ninjas.com/v1/quotes)
- Refresh to get a new quote

## Tech Stack

### Frontend
- React.js
- Axios
- React Router
- Date-fns
- CSS

### Backend
- Node.js
- Express.js
- Mongoose (MongoDB)
- JSON Web Token (JWT)
- Passport.js (OAuth Authentication)
  - Passport-Google-OAuth20
  - Passport-Facebook

## Installation & Setup

### Prerequisites
- Node.js & npm installed
- MongoDB installed (or use a cloud service like MongoDB Atlas)

### Steps to Run the Project

1. **Clone the Repository**
 ```bash
   git clone https://github.com/somugowdasoft/task-manager-frontend.git
    cd task-manager-frontend
   ```
   ```bash
   git clone https://github.com/somugowdasoft/task-manager-backend.git
    cd task-manager-backend
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file and add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     FACEBOOK_CLIENT_ID=your_facebook_client_id
     FACEBOOK_CLIENT_SECRET=your_facebook_client_secret
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```
   - Start the frontend server:
     ```bash
     npm start
     ```

5. Open `http://localhost:3000` in your browser.

## API Routes
### Authentication
- `POST /api/register` - Sign up a new user
- `POST /api/login` - Log in an existing user
- `GET /api/google` - Google OAuth authentication
- `GET /api/facebook` - Facebook OAuth authentication
- `GET /api/logout` - Log out user

### To-Dos
- `GET /api/todos` - Get all to-dos
- `POST /api/todos` - Create a new to-do
- `DELETE /api/todos/:id` - Delete a to-do

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `DELETE /api/tasks/:id` - Delete a task

### Notes
- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Edit a note
- `DELETE /api/notes/:id` - Delete a note

### Quotes
- `GET https://api.api-ninjas.com/v1/quotes` - Fetch a random quote

## Contributing
Feel free to fork this project and make contributions. Create a pull request for any major changes.

## License
This project is licensed under the MIT License.

