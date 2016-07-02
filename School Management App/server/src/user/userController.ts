///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {User, IUser, ISignin} from "./userModel";     //import Member Class


 
let user = new User();

//Object
let Controller = {
    Index_get: (req: express.Request, res: express.Response) => {
        res.json({ 'test': 'done' });
    },
    UserSave_post: (req: express.Request, res: express.Response) => {
        var userObj: IUser = req.body;
        user.create(userObj, (err, data) => {
			if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    },
    
    UserGet_get(req:express.Request, res:express.Response){
        console.log('firrrrrrrrrrrrrrrre')
        user.getAllUser( (err,data) => {
            console.log('controller err',err)
            console.log('controller data',data)
            if(err){
                res.send({'success': false , 'data': null, 'error': err})
            }
            else{
                res.send({'success': true,'data': data, 'error': err })
            }
        })
        
    },
    updateUserStatus(req:express.Request, res:express.Response){
        console.log('Reuest Body',req.body);
        var obj= req.body;
        user.updateUserStatus(obj, (err, data) => {
			if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    },
    UserSigin_post: (req: express.Request, res: express.Response) => {
        var userObj: ISignin = req.body;
        user.singin(userObj, (err, data: ISignin) => {
			if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    },
};

//export controller object
export = Controller;