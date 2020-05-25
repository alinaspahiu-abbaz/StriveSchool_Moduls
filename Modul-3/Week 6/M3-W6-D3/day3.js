getUser=("http://example.com/users") // I http request to url
.then((user) => getBlogPosts("http:example.com/blogPosts" + user.name))
.then((blogPosts) => responce)