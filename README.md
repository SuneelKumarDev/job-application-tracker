# Job Application Tracker

This is a simple full-stack web application I built to help track job applications. It lets users add, view, update, and delete job applications. The main goal was to practice full-stack development using React for the frontend, Node.js + Express for the backend, and MySQL as the database.


# Why I Built This

As someone preparing for developer roles, I wanted to create a practical, real-world project that demonstrates:
- CRUD operations (Create, Read, Update, Delete)
- RESTful APIs
- Frontend/backend integration
- Working with a relational database (MySQL)
  

# Technologies Used

# Frontend:
- React.js
- Axios (for making API calls)
- Basic CSS (no heavy frameworks used)

# Backend:
- Node.js
- Express.js
- MySQL

# Tools:
- Postman (for API testing)
- Git & GitHub (for version control)
- VS Code (IDE)


# What You Can Do with This App

- Add a new job application with company name, role, applied date, and status (Pending, Hired, Rejected, etc.)
- View all your job applications in a table
- Update or delete entries if something changes
- Clean UI for better readability


# How to Run This Project Locally

# 1. Clone the repo

```bash
git clone https://github.com/SuneelKumarDev/job-application-tracker.git
cd job-application-tracker


2. Set up the MySQL database

Open your MySQL terminal and run the following:

create database job_tracker;

use job_tracker;

create table applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  company VARCHAR(100),
  role VARCHAR(100),
  status VARCHAR(50),
  applied_date DATE
);


3. Start the Backend

cd backend
npm install
node server.js
Make sure you update your MySQL username and password inside db.js.


4. Start the Frontend

cd frontend
npm install
npm start
Now open http://localhost:3000 in your browser.


API Overview (Backend)

Method  	Endpoint	                   Description
GET	      /api/applications    	      Get all applications
POST    	/api/applications	          Add a new application
PUT	      /api/applications/:id      	Update an application
DELETE  	/api/applications/:id	      Delete an application


About Me
I'm Suneel Kumar, a passionate full-stack developer with an interest in building clean, real-world applications.
Feel free to check out my GitHub for more projects.


License
This project is free to use for learning and educational purposes.
