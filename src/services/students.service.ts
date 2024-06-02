import { Student, students } from "../mocks/students.mock";

export const getStudents = () => {
    return students;
};

export const getStudent = (id: string) => {
    // attention ici, filter peut retourner plusieurs éléments, renvoie un tableau
    // il faut utiliser find pour retourner un seul élément
    let student = students.find((student) => student.id.toString() === id);
    return student;
}

export const createStudent = (name: string, firstname: string, age: number) => {
    let student = {
        id: students.length + 1,
        name: name,
        firstname: firstname,
        age: age
    };
    students.push(student);
    return students;
}

export const updateStudent = (id: string, body: Student) => {
    const studentToUpdate = getStudent(id);
    if (studentToUpdate) {
        studentToUpdate.name = body.name;
        studentToUpdate.firstname = body.firstname;
        studentToUpdate.age = body.age;
    }
    return studentToUpdate
}