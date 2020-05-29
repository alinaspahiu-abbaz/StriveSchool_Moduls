
   // PROMISES - A wrapper around CallBacks

   // a promise can have 3 stages:

   /*
   pending - You don't have any result yet. You are waiting for it. 
   resolved - everything went fine, and you got the value back.
   rejected -you get something back, but that something is an error.
   */

   //----------------------------------------------------------------

   /* 
   How to create a Promise - we will learn it later
   
   const promise = new Promise((resolve, reject) => {

   });
   */

   //------------------------------------------------------------------

  // async situation
   getUser('URL')
      .then( user => { // here the promise is resolved
        console.log(user);

   }).cath(err => console.log(errr)); // here the promise is rejected

//   getUser('URL')
//   .then((user) => getBlogPosts('URL' + user.name))
//   .then(blogPosts => getComments('URL' + blogPosts[0]))
//   .then(comments => {
//     // here I can handle comments -> we can modify DOM with comments data
//     console.log(comments)
//   })
//   .catch((err) => console.log(err)); 

//   //Fetch API
  
//    fetch('http://example.com/movies.json').then((response) => console.log(response));