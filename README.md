# Pics Project (React Practice)

## Description

- This was built while going through the Udemy course called _Modern React with Redux_ by Stephen Grider
- Pics app takes a search term from the user
- The search term from the user is userd to make a request to an outside API and fetch data
- The API returns fetched images that match the users initial search term and shows them to the user in a list

## What I Learned

- Creating a 'better' component layout with components file
- How to wire up callbacks with onChange() property in React
- Using arrow functions as callbacks in event listeners to consolidate code and improve readability
- Dealing with text inputs: Differences between _Controlled_ components and _Uncontrolled_ components
  - Controlled components: React component stores all data
  - **state={ term: 'this is the value' }**
  - Uncontrolled components: DOM stores data
  - **<input value={this value is being stored within the DOM}>**
- Understanding of _this_ in vanilla JavaScript
  - **Uncaught TypeError: can't access property "state", this is undefined**
  - _undefined_.state doesn't exist in the DOM
  - The _this_ keyword within a class refers to an instance of the class itself
    - example --> this.state.term
      -To define the value of _this_ inside of a function, look at where the function or method is called
  - Using arrow functions is the quickest fix to the above error; it automatically corrects the value of _this_
- Props go down! They are passed down to child components of the parent.
- __Fetching data in React from REST API__
  + AJAX Client --> fetch (function that is built into browsers) or axios (3rd party package) are the most common
  + *Fetch keeps app size smaller*
  + *Axios is a bit easier to use in terms of the amount of code you need to write*

### Again, this is not my personal work! I followed along with the above course to create this application.
