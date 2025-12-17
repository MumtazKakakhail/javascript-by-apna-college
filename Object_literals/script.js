const std = {
name: "Ali",
age: 21,
marks: 97.2
}
console.log(std);


//twitter post
const post = {
    username: "@mumtazkakakhail",
    content: "This is my @First post",
    likes: 320,
    reposts: 3,
    tags: ["@kamranahmad", "@shahabuddin"]
};

//get values
post["username"];

post.likes;


const student = {
name: "yasir",
age: 22,
marks: 91.2,
city: "gilgit"
};

//update value
student.city = "gahkuch";

//add new value
student.gender = "male";

student.marks = "A";

//delete
delete student.marks;

//nested or object of objects

const classInfo = {
    mumtaz: {
        grade: "A+",
        city: "gahkuch"
    },
    shams: {
        grade: "A",
        city: "gilgit"
    },
    faiz: {
        grade: "B",
        city: "lahore"
    }
};

classInfo.mumtaz;