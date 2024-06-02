import {model, Schema, Types} from 'mongoose';

// Define the schema for the student model
// definit la structure des documents
const StudentSchema = new Schema(
    {
        name : {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 0
        },
    },
    { versionKey: false } // versionKey : false pour ne pas avoir la version du document automatiquement ajoutée par mongoose
)

// Create the student model
// represente la collection de documents
// ce model est utilisé pour lire, ecrire, mettre à jour et supprimer des documents
export const StudentModel = model(
    "students",
    StudentSchema
    );


// Interface : propre a typescript : comme un contrat (cf interface en java)



