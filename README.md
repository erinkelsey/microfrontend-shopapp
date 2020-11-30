# Microfrontend Shop App

A demo microfrontend shop app built with HTML, CSS, JavaScript, and Webpack Module Federation using Run-Time Integration.

### What are microfrontends?

- Divide a monolithic app into multiple, smaller apps
- Each smaller app is responsible for a distinct feature of the product

### Why use them?

- Multiple engineering teams can work in isolation
- Each smaller app is easier to understand and make changes to

## Integrations

### Build-Time Integration

AKA compile-time integration. Integration before Container gets loaded in the browser, it gets access to ProductsList source code.

1. Engineering team develops ProductList
2. Time to deploy!
3. Publish ProductsList as an NPM package -> NPM Registry
4. Team in charge of Container install ProductsList as a dependency (npm install)
5. Container team builds their app
6. Output bundle that includes all the code for ProductsList

PROS:

- Easy to setup and understand

CONS:

- Container has to be re-deployed every time ProductsList is updated
- Tempting to tightly couple the Container + ProductsList

### Run-Time Integrations

AKA client-side integration. Integration after Container gets loaded in the browser, it gets access to ProductsList source code.

1. Engineering team develops ProductsList
2. Time to deploy!
3. ProductsList code deployed at https://my-app.com/productslist.js
4. User navigates to my-app.com, Container app is loaded
5. Container app fetches productslists.js and executes it

PROS:

- ProductsList can be deployed independently at any time
- Different versions of ProductsList can be deployed and Container can decide which one to use

CONS:

- Tooling + setup is far more complicated

NOTE: this project uses this type of integration with the help of Webpack Module Federation

This integration is hardest to setup and understand, but is most flexible and performant solution around right now.

### Server Integration

While sending down JS to load up Container, a server decides on whether or not to include ProductsList source.
