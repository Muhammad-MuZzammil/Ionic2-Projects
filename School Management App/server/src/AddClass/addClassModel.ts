/// <reference path="./../../typings/tsd.d.ts" />

//import moongose
import mongoose = require('mongoose'); 	//import mongodb
import * as helper from './../helpers/helper';
//import q = require('q');	


//interface of user
export interface IClass {
    _id: string;
    classTitle:number;
   SubjectSelection:string;
   TeacherSelection:string; 
}




//////////////////// Mongoose ////////////////////////
//Creating Schema for Class in MongoDB
let ClassSchema = new mongoose.Schema({									//Create Schema for User Collection
     classTitle:Number,
   SubjectSelection:String,
   TeacherSelection:String,
    dated: { type: Number, default: Date.now }
});
let ClassCollection = mongoose.model("Classes", ClassSchema);			//Create Collection with the name of Classes (in db it shows class Info)


//user class
export class AddClass implements IClass {
    _id: string;
   classTitle:number;
   SubjectSelection:string;
   TeacherSelection:string; 

    dated: number;
    
    //constructor
    constructor(addClass?: IClass) {
        if (addClass) { 
            this.classTitle= addClass.classTitle;
            this.SubjectSelection = addClass.SubjectSelection;
            this.TeacherSelection = addClass.TeacherSelection;
           
        }
    } //constructor
    






}