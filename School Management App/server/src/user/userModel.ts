/// <reference path="./../../typings/tsd.d.ts" />

//import moongose
import mongoose = require('mongoose'); 	//import mongodb
import * as helper from './../helpers/helper';
//import q = require('q');				//if using promise pattren

//interface of user
export interface IUser {
    _id: string;
    selectedType:string;
    name: string;
    email: string;
    password: string;
    confirmPass:string;
    isApproved:number;
    status:number;
}

export interface ISignin {
    email: string;
    password: string;
    _id?: string;
}


//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
let userSchema = new mongoose.Schema({									//Create Schema for User Collection
    selectedType:String,
    name: String,
    email: String,
    password: String,
    confirmPass:String,
    isApproved:Number,
    status:Number,
    dated: { type: Number, default: Date.now }
});
let UserCollection = mongoose.model("Users", userSchema);			//Create Collection with the name of Users (in db it shows Todos)


//user class
export class User implements IUser {
    _id: string;
    selectedType:string;
    name: string;
    email: string;
    password: string;
    confirmPass:string;
    isApproved:number;
    status:number;
    dated: number;
    
    //constructor
    constructor(user?: IUser) {
        if (user) { 
            this.selectedType= user.selectedType;
            this.email = user.email;
            this.password = user.password;
            this.name = user.name;
            this.confirmPass=user.confirmPass
        }
    } //constructor
    
    //is user exists checking
    static isUserExists(_email: string, cb: helper.CallBackFunction): void {
        UserCollection.findOne({ email: _email }, function(err, user: IUser) {
            if (err) {
                cb(true, null)      // err true
            }
            if (user && user.email) {
                cb(true, null)      //err true if user exists
            } else {
                cb(false, null)     //err false if user not exixts
            }
        })
    }; //isUserExists
    
    //create user
    create(user: IUser, cb: helper.CallBackFunction): void {
        User.isUserExists(user.email, (err, data) => {
            if (err) {
                cb(err, null);
            } else {
                delete user._id;
                let userObj = new UserCollection(user);
                userObj.save((error, data: IUser) => {
                    if (error) {
                        cb(err, null);
                    }
                    cb(null, data);
                });
            }
        });     //User.isUserExists
    }; // create user
    
    getAllUser(cb:helper.CallBackFunction){
        UserCollection.find({isApproved : 0},(err,data) => {
            console.log('Model Errrrrrrrrrrr',err);
            console.log('Model Dataaaaaaaaaaaaaaaaa',data);
             if (err) {
                //if error on finding user
                cb(err, null);
            } else { 
                cb(null, data);
            }
            
        }); 
    };
    updateUserStatus(obj,cb:helper.CallBackFunction){
           console.log('Model ka updateUserStatus',obj)
        
        UserCollection.findById(obj._id,(err,user:IUser)=>{
           console.log(user)
            
             if (err) {
                //if error on finding user
                
                cb(err, null);
            }
            else
            {
                // user. =obj.Type;
                user.isApproved=obj.Type;
                console.log('save user approved',user.isApproved);
              let userObj = new UserCollection(user);
               userObj.save((error, data: IUser) => {
                    if (error) {
                        cb(error, null);
                    }
                    cb(null, data);
                });
            }
              
           
            // }
        })
        
        
        
        
        
    }
    
    singin(singinObj: ISignin, cb: helper.CallBackFunction): void { 
        UserCollection.findOne({ email: singinObj.email }, (error, _user: ISignin) => {
            if (error) {
                //if error on finding user
                cb(error, null);
            } else { 
                //if no error found
                if (_user && _user.password && _user.password === singinObj.password) {
                    //checking if object is not empty and password matched
                    cb(null, _user);
                } else { 
                    //if password not matched or user not found
                    cb('No Member Found!', null);
                }
            }
        }); //UserCollection.findOne
    }; //singin
    
    // //static function for create user
    // static create(user: IUser, cb: helper.CallBackFunction): void {
    //     //first checkin is user exists or not
    //     User.isUserExists(user.email, function(error, result) {
    //         if (!error) {
    //             //create user
    //             var userObj = new UserCollection(user);
    //             userObj.save(function(err, data: IUser) {
    //                 if (err) {
    //                     cb(err, null);
    //                 }
    //                 cb(null, data);
    //             }); //userObj.save
    //         } else {
    //             cb('User Already Exists', null);
    //         }
    //     });
    // } //static create

} //User class