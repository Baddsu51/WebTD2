import { get } from "http";
import { Student, StudentModel } from "../models/students.model";
import { Types } from "mongoose";

// la fonction devient asynchrone pour attendre la réponse de la base de données
export const getStudents = async () => {
    return await StudentModel.find();
};

export const getStudent = async (id: string) => {
    // return await StudentModel.findOne({ _id: new Types.ObjectId(id) });
    return await StudentModel.findById(id);
}

export const createStudent = async (name: string, firstname: string, age: number) => {
    let student = {
        name: name,
        firstname: firstname,
        age: age
    };
    return await StudentModel.create(student);
}

export const updateStudent = async (id: string, body: Student) => {
    await StudentModel.updateOne({ _id: new Types.ObjectId(id) }, body);
    return await getStudents();
}

// export const deleteStudent = (id: string) => {
//     const index = students.findIndex( (student) => student.id.toString() === id)
//     // debug : 
//     console.log(index)
//     if (index !== -1) {
//         students.splice(index, 1); // index : position start, 1 : nb d'éléments à supprimer
//     }
//     console.log(students)
//     return students;
// }