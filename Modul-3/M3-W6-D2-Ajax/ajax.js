
// SYNC

const data = ajaxRequest('http://someurl.com');
console.log(data);

// ASYNC
ajaxRequest('http://someurl.com', function myCallBack(err, data) {
// myCallBack() - means call me back when data is ready    
// handle data when deady

  if (err){
     alert(err);

   } else {
     console.log(data);
      }
   });

   // Callback Hell
   getUser ('URL', (user) => {

    getBlogPosts('URL' + user.name, (blogPosts) => {
      
      getComments('URL' + blogpost[0], (comments) => {
        console.log(comments);

      })
    })
   });

   // PROMISES - A wrapper around CallBacks

   // a promise can have 3 stages:

   /*
   pending - You don't have any result yet. You are waiting for it. 
   resolved - everything went fine, and you got the value back.
   rejected -you get something back, but that something is an error.
   */

   /* How to create a Promise - we will learn it later
   const promise = new Promise((resolve, reject) => {

   });
   */