

const post = ["Post1", "Post2", "Post3"]

var postSort = () => {
    for (var i = 0; i < post.length; i++) {
        console.log(post[i]);
    }
}

var addPost = (addPost) => {
    const promise = new Promise((resolve, reject) => {
        if (addPost == " ") reject("Boş post atılamaz")
        else {
            post[post.length] = addPost;
            resolve("Yeni post eklendi.");
        }
    })
    return promise;
}

async function asyncPost(){
    try{
        await addPost("New Post");
        postSort();
    }catch(err){
        console.log(err);
    }
}
asyncPost();

