## ---------------Galvanize MCSP-20---------------

# Front End Capstone Project: Hipcamp.com clone (Hopcamp)

### Screenshot

[![HopCamp](hopcamp_screenshot.png)](https://hopcamp.tech-n-code.com/)

## Tech Stack

  [![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![HTML](https://img.shields.io/badge/-HTML-E34F26?style=flat&logo=html5&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS](https://img.shields.io/badge/-CSS-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
  [![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
  [![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=F6DC40)](https://vitejs.dev/)
  
  [![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=Node.js&logoColor=black)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
  [![Supabase](https://img.shields.io/badge/-Supabase-3FCF8E?style=flat&logo=supabase&logoColor=black)](https://supabase.com/)

  [![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=black)](https://git-scm.com/)
  [![Npm](https://img.shields.io/badge/-Npm-CB3837?style=flat&logo=npm&logoColor=white)](https://npmjs.com/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
  [![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

  [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/)
  [![Slack](https://img.shields.io/badge/-Slack-4A154B?style=flat&logo=slack&logoColor=white)](https://slack.com/)
  [![Discord](https://img.shields.io/badge/-Discord-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.com/)

## Objectives & Minimum Requirements

- Build a Full-Stack UI Clone of a webpage's "item detail page"
- Page must contain multiple distinct modules of functionality
- Selected webpage should have sufficient complexity
- Implement React Components
- Perform API requests

## Installation & Setup

- make sure Docker Desktop is installed and running on your machine
- click the green "code" button above, then click the 'copy' icon under HTTPS to copy the repo's URL
- on your terminal run `git clone <repo-URL>`
- `cd` into the `HopCamp` directory
- run `cp .env.template .env`
- run `docker-compose up -d --build`
- go to `localhost:3000` on your browser

## Removing

- to power-down the app and delete all containers and associated volumes run `docker-compose down -v`
- (optional) to power-down the app and also delete its images run `docker-compose down -v --rmi all`

## Additional notes

- initially our team used [Supabase](https://supabase.com/dashboard/sign-in) for database; all migration and seed files are in the `db` folder
- I forked and containerized the project for demo/deployment purposes utilizing `docker-compose` and it no longer uses Supabase, it now uses PostgreSQL.

## Developers

- Chris Stewart - [@CStewCodes](https://github.com/CStewCodes)
- Genglin Yu - [@DessertWarrior](https://github.com/DessertWarrior)
- Dennis Kennedy - [@Kennedyz71](https://github.com/Kennedyz71)
- Daniel Purdy - [@DanielPurdy509](https://github.com/DanielPurdy509)
- Will Franceschini - [@tech-n-code](https://github.com/tech-n-code)
