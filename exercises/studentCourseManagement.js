let allStudents = []

const student1 = {
    rollNo : 1,
    name: "Abhi",
    class: 8,
    courses: [
        {
            courseName : "Maths",
            grade : "A"
        },
        {
            courseName : "English",
            grade : "F"
        }
    ]
}

const student2 = {
    rollNo : 2,
    name: "Baalu",
    class: 8,
    courses: [
        {
            courseName : "Maths",
            grade : "B"
        },
        {
            courseName : "English",
            grade : "C"
        }
    ]
}

allStudents.push(student1, student2)
console.log(allStudents)
