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

classInfo.shams.city;

classInfo.faiz.grade = "C";

//Array of objects

let stdInfo = [
    {
        name: "shahab",
        marks: 92,
        city: "gilgit"
    },
    {
        name: "kamran",
        marks: 85,
        city: "islamabad"
    },
    {
        name: "raza",
        marks: 88,
        city: "peshawar"
    }
];


//math objects
math.abs(-3);
math.pow(2, 4);
math.floor(5.5);  //round off the number to smaller number like 5.5 to 5
math.ceil(5.5);   //round off the number to larger number like 5.5 to 6
math.random();    //gives random values


// practice Qs
//Q-1 generate random number between 1 and 100.
math.floor(math.random()*100);
