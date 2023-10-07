<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/PaulaBurgheleaGithub/e-Commerce-App">
    <img src="https://github.com/PaulaBurgheleaGithub/e-Commerce-App/blob/main/client/nft.svg" alt="Logo" width="50" height="50">
  </a>

<h3 align="center">NFT eCommerce App</h3>

  <p align="center">
    NFT Online Store, the app that allowse people to easily purchase fashion NFTs.
    <br />
    <a href="https://github.com/PaulaBurgheleaGithub/e-Commerce-App/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://desolate-harbor-25583-d0e8904996eb.herokuapp.com">View Demo</a>
    ·
    <a href="https://github.com/users/PaulaBurgheleaGithub/projects/3">Report Bug</a>
    ·
    <a href="https://github.com/users/PaulaBurgheleaGithub/projects/3">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

NFT Online Store App started as an MVP group final project at CodeOp bootcamp. I later forkedt the project and continue to work on design as well as new features.
The full-stack app is built using React, Node/Express, Vite, and MySQL.
Deployed on Heroku and migrated DB on Stackhero.

The app is meant to help people buy fashion NFTs as well as learn more about digital assets. It now allowes users to select and buy varius NFTs, create an account on the platform as well as contact us using the form. It will hopefully soon send the order receipt via email, send email if a person left items in the cart or even allow the user to communicate with an agent via the chat option.

[![nft-app][product-screenshot]][product-screenshot]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Node][NodeJS]][Node-url]
* [![Express][Express.js]][Express-url]
* [![React][React.js]][React-url]
* [![MySQL][MySQL]][MySQL-url]
* [![ViteJS][ViteJS]][Vite-url]
* [![ReactRouter][ReactRouter]][ReactRouter-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Clone the Repo and run `npm install`in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).
- Create Stripe Account or use the TEST API KEY they provide.
- Create SendGrid account and generate a new API KEY.

### Database Prep

- Access the MySQL interface in your terminal by running
  ```sh
  mysql -u root -p
  create database ecommerce;
  ```

- On the root of your project add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=ecommerce
  DB_PASS=YOURPASSWORD
  SUPER_SECRET=YOURSUPER_SECRET_PASSWORD
  STRIPE_KEY=************
  SENDGRID_API_KEY=**********
```

- Run the following commands to your MySQL console: `CREATE DATABASE ecommerce;` and then `USE ecommerce;`.
- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create the required tables in your database: "payments", "orders", "users", "guests", "artists", "products", and "product_order".
- Make sure you understand how the tables are constructed. In your MySQL console, you can run `DESCRIBE tablename;` to see the structure of each table. Please mind that "tablename" in `DESCRIBE tablename;` needs to be replaced by the name of the table that you want to describe.

### Development

- Run `npm start` in project directory to start the Express server on port 5000.
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

## Resources

  - [MDN docs](https://developer.mozilla.org/en-US/)
  - [Express docs](https://expressjs.com/en/api.html)
  - [MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
  - [React docs](https://reactjs.org/docs/hello-world.html)
  - [STRIPE](https://stripe.com)
  - [SENDGRID](https://sendgrid.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- [forks-shield]:
[forks-url]: https://github.com/PaulaBurgheleaGithub/travelette/fork

[issues-shield]:
[issues-url]: https://github.com/PaulaBurgheleaGithub/travelette/issues

[license-shield]:
[license-url]: https://github.com/PaulaBurgheleaGithub/travelette/blob/main/LICENSE -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/paula-burghelea/

[product-screenshot]: https://github.com/PaulaBurgheleaGithub/e-Commerce-App/blob/main/client/public/Nft/Shop-page.png

[Express.js]: https://img.shields.io/badge/Express-js?logo=express&logoColor=%23F9F9F9&color=%23F9F9F9
[Express-url]: https://expressjs.com/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[MySQL]: https://img.shields.io/badge/MySQL-white?logo=mysql&color=%23F9F9F9
[MySQL-url]: https://www.mysql.com/

[NodeJS]: https://img.shields.io/badge/node.js-white?logo=nodedotjs&color=%23333333
[Node-url]: https://nodejs.org/en

[ViteJS]: https://img.shields.io/badge/vitejs-purple?logo=vite&color=%23FFFFFF
[Vite-url]: https://vitejs.dev/

[ReactRouter]: https://img.shields.io/badge/ReactRouter-black?logo=reactrouter&color=%23121212&link=https%3A%2F%2Freactrouter.com%2Fen%2Fmain
[ReactRouter-url]: https://reactrouter.com/en/main
