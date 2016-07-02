/// <reference path="./../../typings/tsd.d.ts" />
"use strict";
//import moongose
var mongoose = require('mongoose'); //import mongodb
//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
var Schema = mongoose.Schema;
var childSchema = new Schema({ name: 'string' });
var parentSchema = new Schema({
    children: [childSchema]
});
var Parent = mongoose.model('Parent', parentSchema);
var parent = new Parent({ children: [{ name: 'Matt' }, { name: 'Sarah' }] });
//
/*



var Schema = mongoose.Schema;


let personSchema = new mongoose.Schema({
    
    name: String,
    age: Number,
    story: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

let storySchema = new mongoose.Schema({
    _creator: { type:  Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Number, ref: 'Person' }]
});


let Story = mongoose.model('Story', storySchema);
let Person = mongoose.model('Person', personSchema);


var person = new Person({
    // _id: 0,
    name: "MuZz",
    age: 24
});

*/
exports.saveperson = function () {
    console.log(parent);
    parent.children[0].name = 'demonz';
    parent.children[1].name = 'Matthew';
    console.log(parent.children[0].name);
    console.log(parent.children[1].name);
    // parent.save(callback);
    /*
    
        person.save(function (err) {
            console.log('person', err)
    
            if (err)
                return (err);
        });
        var story1 = new Story({
            title: "once upon a time",
            _creator: person._id
        });
        story1.save(function (err) {
            console.log('story1', err)
            if (err)
                return (err)
        });
        
        Story
    .findOne({ title: 'once upon a time' })
    .populate('_creator')
    .exec(function (err, s) {
        console.log('The creator is %s', s._creator.age);
      
      if (err)
    
       return (err);
      
      // prints "The creator is Aaron"
    });
    
    
    var guille = new Person({ name: 'Guillermo' });
    guille.save(function (err) {
      if (err) return (err);
      
      story1._creator = guille;
      console.log(story1._creator.name);
      // prints "Guillermo" in mongoose >= 3.6
      // see https://github.com/Automattic/mongoose/wiki/3.6-release-notes
      
      story1.save(function (err) {
        if (err) return (err);
        
        Story
        .findOne({ title: /timex/i })
        .populate({ path: '_creator', select: 'name' })
        .exec(function (err, story) {
          if (err) return (err);
          
          console.log('The creator is %s', story1._creator.name)
          // prints "The creator is Guillermo"
        })
      })
    })
    */
};
