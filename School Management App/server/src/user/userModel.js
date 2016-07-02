/// <reference path="./../../typings/tsd.d.ts" />
"use strict";
//import moongose
var mongoose = require('mongoose'); //import mongodb
//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
var userSchema = new mongoose.Schema({
    selectedType: String,
    name: String,
    email: String,
    password: String,
    confirmPass: String,
    isApproved: Number,
    status: Number,
    dated: { type: Number, default: Date.now }
});
var UserCollection = mongoose.model("Users", userSchema); //Create Collection with the name of Users (in db it shows Todos)
//user class
var User = (function () {
    //constructor
    function User(user) {
        if (user) {
            this.selectedType = user.selectedType;
            this.email = user.email;
            this.password = user.password;
            this.name = user.name;
            this.confirmPass = user.confirmPass;
        }
    } //constructor
    //is user exists checking
    User.isUserExists = function (_email, cb) {
        UserCollection.findOne({ email: _email }, function (err, user) {
            if (err) {
                cb(true, null); // err true
            }
            if (user && user.email) {
                cb(true, null); //err true if user exists
            }
            else {
                cb(false, null); //err false if user not exixts
            }
        });
    };
    ;
    //create user
    User.prototype.create = function (user, cb) {
        User.isUserExists(user.email, function (err, data) {
            if (err) {
                cb(err, null);
            }
            else {
                delete user._id;
                var userObj = new UserCollection(user);
                userObj.save(function (error, data) {
                    if (error) {
                        cb(err, null);
                    }
                    cb(null, data);
                });
            }
        }); //User.isUserExists
    };
    ;
    User.prototype.getAllUser = function (cb) {
        UserCollection.find({ isApproved: 0 }, function (err, data) {
            console.log('Model Errrrrrrrrrrr', err);
            console.log('Model Dataaaaaaaaaaaaaaaaa', data);
            if (err) {
                //if error on finding user
                cb(err, null);
            }
            else {
                cb(null, data);
            }
        });
    };
    ;
    User.prototype.updateUserStatus = function (obj, cb) {
        console.log('Model ka updateUserStatus', obj);
        UserCollection.findById(obj._id, function (err, user) {
            console.log(user);
            if (err) {
                //if error on finding user
                cb(err, null);
            }
            else {
                // user. =obj.Type;
                user.isApproved = obj.Type;
                console.log('save user approved', user.isApproved);
                var userObj = new UserCollection(user);
                userObj.save(function (error, data) {
                    if (error) {
                        cb(error, null);
                    }
                    cb(null, data);
                });
            }
            // }
        });
    };
    User.prototype.singin = function (singinObj, cb) {
        UserCollection.findOne({ email: singinObj.email }, function (error, _user) {
            if (error) {
                //if error on finding user
                cb(error, null);
            }
            else {
                //if no error found
                if (_user && _user.password && _user.password === singinObj.password) {
                    //checking if object is not empty and password matched
                    cb(null, _user);
                }
                else {
                    //if password not matched or user not found
                    cb('No Member Found!', null);
                }
            }
        }); //UserCollection.findOne
    };
    ;
    return User;
}());
exports.User = User; //User class
