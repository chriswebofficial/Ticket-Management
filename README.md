# Ticket Management App

This is a **Ticket Management Application** built with **Next.js** and **MongoDB**. It allows users to create, view, update, and delete tickets related to hardware, software, and project issues. The app provides a user-friendly interface to track ticket priority, progress, status, and category.

---

## Features

- **Create Tickets** with details like title, description, category, priority, progress, and status.
- **View Tickets** grouped by category.
- **Update Ticket Progress and Status.**
- **Delete Tickets** with a simple click.
- Responsive UI built with React and styled using Tailwind CSS.
- Backend API routes to handle CRUD operations with MongoDB.
- Real-time UI updates using Next.js router refresh.

---

## Technologies Used

- [Next.js](https://nextjs.org) (React framework)
- [MongoDB](https://www.mongodb.com/) (NoSQL Database)
- [Mongoose](https://mongoosejs.com/) (MongoDB ODM)
- [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
- [FontAwesome](https://fontawesome.com/) (Icons)

---

## Getting Started

### Prerequisites

- Node.js and npm/yarn installed
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)
- `.env` file with `MONGODB_URI` set to your MongoDB connection string

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chriswebofficial/Ticket-Management.git
   cd ticket-management-app
   ```

## Install dependencies:

npm install

# or

yarn install

## Create a .env file in the root with your MongoDB URI:

MONGODB_URI=mongodb://localhost:27017/ticket

## Run the development server:

npm run dev

# or

yarn dev

Open http://localhost:3000 in your browser to start using the app.

## Project Structure Overview

/app
/api
/Tickets # API routes for ticket CRUD operations
/(Components)
TicketCard.js
TicketForm.js
Nav.js
/page.js # Main dashboard displaying tickets
/lib
db.js # MongoDB connection setup
/(Models)
Ticket.js # Mongoose schema and model

## How It Works — Flowchart

User opens the app (Dashboard)
|
v
Fetch tickets from API -> Display tickets grouped by category
|
v
User clicks "Create Ticket" -> Fill form -> Submit
|
v
POST new ticket to API -> Save in MongoDB
|
v
API returns success -> UI refreshes -> New ticket appears
|
v
User can:

- Delete ticket (calls DELETE API)
- Update progress/status (calls PATCH API - if implemented)
  |
  v
  UI updates accordingly

## Future Improvements

Add user authentication and authorization.

Enable editing of existing tickets.

Implement ticket comments or chat.

Add notifications for ticket updates.

Enhance UI with more animations and better accessibility.

## Logic Behind the Ticket Management Project

# User Creates Tickets

You have a Ticket Form where users fill out details like title, description, category (e.g., Hardware Problem), priority (1-5), progress (0-100%), and status (not started, started, done).

When submitted, the form sends this data via a POST request to your backend API.

# Backend Stores Tickets in MongoDB

The backend connects to a MongoDB database using Mongoose.

It saves the ticket data as a document in a tickets collection, using a schema that defines the fields and their types.

# Tickets are Retrieved and Displayed

Your frontend fetches the tickets with a GET request to the API.

Tickets are grouped by their category (Hardware, Software, Project) and displayed in a dashboard.

Each ticket shows details and visual elements for priority, progress, and status.

# Ticket Management

Users can see tickets grouped by category.

You have components to show the priority, progress bar, and status for each ticket.

Users can delete tickets via the frontend, which sends a DELETE request to remove tickets from the database.

# Overall Flow

Form Input → POST to API → Stored in Database

Frontend Fetch → GET from API → Display grouped tickets

User Action (Delete) → DELETE request to API → Database removes ticket → Frontend refreshes

+---------------------+
| User fills form |
| (title, description, |
| category, priority, |
| progress, status) |
+----------+----------+
|
v
+---------------------+
| Form data sent via |
| POST request to API |
+----------+----------+
|
v
+---------------------+
| Backend API receives |
| ticket data and |
| saves it to MongoDB |
+----------+----------+
|
v
+---------------------+
| Frontend fetches |
| tickets via GET |
| request from API |
+----------+----------+
|
v
+---------------------+
| Tickets grouped by |
| category and |
| displayed on the |
| dashboard |
+----------+----------+
|
v
+---------------------+
| User can delete a |
| ticket |
+----------+----------+
|
v
+---------------------+
| DELETE request sent |
| to API |
+----------+----------+
|
v
+---------------------+
| Backend deletes |
| ticket from DB |
+----------+----------+
|
v
+---------------------+
| Frontend refreshes |
| ticket list |
+---------------------+

## License

# MIT License

If you want, you can just copy-paste this into your `README.md` file in your project root! Let me know if you want me to help you add a Mermaid flowchart diagram or anything else.
