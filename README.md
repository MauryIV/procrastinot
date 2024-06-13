# Procrastinot

Procrastinot is a full-stack application for managing timers built with Node.js, Express.js, Handlebars.js, MySQL, and Sequelize ORM. It allows users to start, stop, and reset timers for different tasks.

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Team Members](#team-members)
6. [Features](#features)
7. [Deployment](#deployment)
8. [License](#license)
9. [Acknowledgements](#acknowledgements)

## Introduction
Procrastinot is a real-world application developed as part of a coding bootcamp project. It provides users with a platform to start, stop, and reset timers for various tasks. The application follows the Model-View-Controller (MVC) architecture and includes authentication features for user security. [procrastinot](https://procrastinot.onrender.com/)

## Technologies Used
- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- Handlebars.js: Templating engine for rendering dynamic HTML content.
- PostgreSQL: Relational database management system.
- Sequelize ORM: Object-relational mapping tool for Node.js.
- Star Animation: Custom animation library for visual effects.

## Visuals
![Screenshot 2024-04-11 at 8 00 49 PM](https://github.com/MauryIV/procrastinot/assets/146037880/05764faa-d62a-4e73-8f00-7427d946fdfc)
![Screenshot 2024-04-11 at 8 01 03 PM](https://github.com/MauryIV/procrastinot/assets/146037880/1fe1c6c1-92ae-4d48-abe8-8bbbf45b512d)
![Screenshot 2024-04-11 at 8 01 21 PM](https://github.com/MauryIV/procrastinot/assets/146037880/e2d5a5f7-cb0a-40f5-892a-7914d8ac25b0)

## Installation
To install and run Procrastinot locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/procrastinot.git
    ```
2. Navigate to the project directory:
    ```bash
    cd procrastinot
    ```

3. Install dependencies:
```bash
npm install
```

4. Setup up your environment variables:
```bash
cp .env.example .env
```
Edit the .env file and add your environment variables, such as database connection details and session secrets.

Set up your environment variables:
```bash

cp .env.example .env
```
Edit the .env file and add your environment variables, such as database connection details and session secrets.

## Usage

After completing the installation steps, you can start the application by running:

```bash
npm start
```
The application will be accessible at http://localhost:3000 in your web browser.


## Team Members

Procrastinot was developed by the following team members:

- Haleigh Elkins
- Maury Hughes
- Justin Hinton
- Austin Allen

## Features

- Timer Management: Start, stop, and reset timers for tasks.
- User Authentication: Secure login and authentication system.
- Responsive Design: Optimized for desktop and mobile devices.
- Implements Javascript and other technologies to create new tasks that can be updated and manipulated.
- Star Animation Effect: Custom visual effects for enhanced user experience.

## Deployment

Procrastinot is deployed using Render [here](https://procrastinot.onrender.com/).

## Contributing

To contribute to Procrastinot, follow these steps:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a new pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to our instructor Stephen Woosley and teacher aid Nick Sandoval for their invaluable education and support throughout the development process.

Special thanks to Eduardo Araujo for the captivating Star Animation effect used in this project. Your contribution has added a delightful visual experience for our users, and we sincerely appreciate your creativity and talent. Your directions were simple and effective.
Link to animation page: https://www.eduardo-araujo.com/tips/post-106
