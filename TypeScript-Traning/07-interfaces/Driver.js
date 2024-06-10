"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
var theCoach = [];
theCoach.push(myCricketCoach);
theCoach.push(myGolfCoach);
for (var _i = 0, theCoach_1 = theCoach; _i < theCoach_1.length; _i++) {
    var tempCoach = theCoach_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
