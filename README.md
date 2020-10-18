### Express Shopping List

This is a simple JSON API application where we will store a shopping list. Each item in the shopping list is an object with the keys of name and price.

An array will be used to store the items on the shopping list. 
Express Router will be used to build the routes. This has the advantage of making our app.js smaller and more readable, and we can better organize our routes. On this application, they are faitly simple, but it can get messy pretty fast. Express router helps with this.

On this app, we also use middleware, which is code that runs in the middle of the request / response cycle. Middleware are functions that get access to the req and res objects and can also call the next function (express.json() is an example of middleware). Middleware allow us to better separate our code into more logical groupings and providing more robust / abstracted error handling
Examples where we would use middleware are for instance when you may need to add a 'currentUser' or you may need to ensure that users are authenticated.
A middleware looks something like this:
```js
function logger(req, res, next) {
  console.log(`Sending ${req.method} request to ${req.path}.`);
  //next is needed to make it to the next route
  return next();
}
```

On this app, we also use an external middleware, Morgan which is a logger that will print on the terminal the route requested, HTTP verb, etc.


Jest and Supertest are used to test these routes. 

### Installing this application
1. Clone or download this project
2. Start your node application `npm init`
3. Install necessary packages  `npm install` 
4. Install globally nodemon `npm install --global nodemon`
5. Run `nodemon app.js`

### Using this application

Using [insomnia]('https://insomnia.rest/') is free and very useful. I would check out the file items.test.js and use those testing routes on insomnia to add, delete, patch, and view.  
To run tests simply type `jest` on the terminal.

To debug tests, console.log works in many cases. You can also try:
`node --inspect $(which jest) --runInBand NAME_OF_FILE` and adding `debugger` on your tests file. Then on chrome, you can debug your tests using chrome dev tools.