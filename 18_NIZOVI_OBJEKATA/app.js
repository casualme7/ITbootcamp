console.log("NIZOVI OBJEKATA");

let blog1 = {
    title: "Amadeus",
    likes: 30,
    dislakes: 9,
};

let blog2 = {
    title: "Lion King",
    likes: 40,
    dislakes: 12
};

let blog3 = {
    title: "Parasite",
    likes: 15,
    dislakes: 39
};

let arrBlog = [blog1, blog2, blog3];
arrBlog.forEach(objekat => {
    console.log(objekat);
})

arrBlog.forEach(objekat => {
    document.body.innerHTML += `<h3>${objekat.title}</h3>`
    document.body.innerHTML += `<p>Likes: ${objekat.likes}</p>`
    document.body.innerHTML += `<p>Dislikes: ${objekat.dislakes}</p>`
})

for (let i = 0; i < arrBlog.length; i++) {
    console.log(arrBlog[i].title);
}