
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