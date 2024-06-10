import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkout(): string {
        return "Hit 100 balls in the golf range"
    }
    
}