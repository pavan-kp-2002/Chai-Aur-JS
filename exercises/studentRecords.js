let students = [
    { name: "Alice", age: 20, marks: 45 },
    { name: "Bob", age: 22, marks: 75 },
    { name: "Charlie", age: 19, marks: 60 }
]

function listToppers(cutoff){
    console.log("Toppers: ")
    for (let student of students){
        if(student["marks"] > cutoff){
            console.log(`${student.name}`)
        }
    }
}

function findAverageMarks(){
    let totalMarks = 0
    for (let student of students){
        totalMarks += student.marks
    }
    console.log (`Average is ${totalMarks/students.length}`)
}

listToppers(70);
findAverageMarks();
