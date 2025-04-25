# 🏨 Hotel Reservation System

A simple full-stack hotel reservation system built with:
- Frontend: **HTML + React-like JSX**
- Backend: **Java (JDBC + Servlets)**
- Database: **MySQL**

This system allows users to reserve a room by submitting a form. The data is stored in a MySQL database.

---



Restaurant Reservation System

Purpose

The Restaurant Reservation System is a simple web-based application that allows users to make reservations at a restaurant. It helps restaurant staff manage incoming reservations efficiently and enables customers to book tables online with ease.

⸻

Key Features
	•	Make table reservations by selecting date, time, and number of guests.
	•	Store reservations in a MySQL database.
	•	Admin or restaurant staff can view all reservations.
	•	Frontend made with React for a responsive UI.
	•	REST API built with Spring Boot for handling reservation logic.
	•	Database connectivity via Spring Data JPA and MySQL.

⸻

Frontend (React)
	•	Developed using ReactJS.
	•	Axios is used to connect with the backend REST API.
	•	Simple and responsive reservation form that collects:
	•	Name
	•	Date
	•	Time
	•	Number of guests

Steps to Run the Project:
-------------------------

1. Clone the Repository:
   git clone https://github.com/yourusername/restaurant-reservation-system.git
   cd restaurant-reservation-system

2. Setup MySQL:
   - Open MySQL and run:
     CREATE DATABASE restaurantdb;

3. Backend Setup:
   - Open the `backend` folder in your IDE.
   - Update the file `src/main/resources/application.properties`:

     spring.datasource.url=jdbc:mysql://localhost:3306/restaurantdb
     spring.datasource.username=root
     spring.datasource.password=yourpassword
     spring.jpa.hibernate.ddl-auto=update

   - Run the application:
     cd backend
     mvn clean install
     mvn spring-boot:run

   - Backend will run at: http://localhost:8080

4. Frontend Setup:
   - Open the `frontend` folder in your terminal.
   - Run the following:
     cd frontend
     npm install
     npm start

   - Frontend will run at: http://localhost:3000
