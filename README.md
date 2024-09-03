# ArtVista Gallery - CapeStone Project - Front End

## Admin Credentials:
    - E-mail: admin@mail.com    
    - Password: 123456


- **ArtVista Gallery** is a WebApplication where an Admin can Sell & Users can Buy Unique Paintings.

- This web project is built using **MERN Stack**

    - The MERN stack is a collection of JavaScript-based technologies that are used together to develop web applications. The stack consists of MongoDB, Express, React, and Node.js 

    1. **MongoDB**
        -  a highly scalable document database that makes it easy to store and retrieve data in JSON documents 

    2. **Express JS**
        - a lightweight web application framework that provides a range of app-building tools and supports a variety of programming languages, including JavaScript.

    3. **React JS**
        - an open source, front-end JavaScript library for building user interfaces based on components

    4. **Node JS**
        - a runtime environment that can be used to run JavaScript code on the server side. This allows developers to use the same language for both the front and back ends of their applications.

**For Frontend** I have used **ReactJs** (Javascript Library) to build user interfaces.

In addition to ReactJs, i also used **npm**, a default package manager for the Javascript runtime environment and some third-party packages in this project as follows

- **Formik & Yup**
    -  *Formik* is a popular open-source library for building and processing form data in React applications.
    
    - *Yup* helps validate data against a predefined schema.

- **Axios**
    - *Axios*, a popular library is mainly used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations.

- **Bootstrap**
    - *Bootstrap* is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.

- **Stripe**
    - *Stripe* is a payment service provider that lets merchants accept credit and debit cards or other payments.


Here the application has two roles **Admin & User**. Where admin and user have different set of functionalities.

- **Admin**

    - **Dashboard**
        - Where admin can view the number of orders ie., Total Orders, Orders Placed, Orders Dispatched, Order Delivered & Orders Cancelled.

    - **Paintings**
        - Admin can implement **CRUD Operations** (Create, Read, Update, Delete) on the paintings that were added.
        - Admin can add paintings, view paintings, edit painting details and delete paintings.

    - **Orders**
        - Admin can view **Orders created** by Users and **update the status of the orders**.

    - **View Users**
        - Admin can view users and can remove users from the database.

- **Users**

    - **Registration**
        - User can register a new account by providing the details in the *Registration form*.

    - **Login**
        - After registration, a User can log-in to their account created by using the same E-mail & Password provided during the registration.

    - **View Paintings**
        - Upon log-in User can get the access view the painting created by the Admin.

    - **Cart**
        - Users can also add the painting to their cart for future purchases and also can remove the product from the cart.

    - **Order**
        - User can buy paintings after adding the paintings to the cart. From cart the user can proceed to buy the paintngs.

    - **Payment**
        - On purchase the user will be directed to *Stripe Payment* page to process payment for their purchase.

    - **Profile**
        - On Profile page, user can edit thier personal details.
     


