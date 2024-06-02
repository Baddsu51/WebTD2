import { Student, students } from "../mocks/students.mock";

export const getStudents = () => {
    return students;
};

export const getStudent = (id: string) => {
    return students.filter((student) => student.id === parseInt(id));
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