
const dailyWorkouts =
{

    "workout_1": {
        "day": "Monday",
        "area1": "Chest",
        "area2": "Back",
        "area3": "Cardio"
    },

    "workout_2": {
        "day": "Tuesday",
        "area1": "Core",
        "area2": "Legs",
        "area3": "Cardio"
    },

    "workout_3": {
        "day": "Wednesday",
        "area1": "Arms",
        "area2": "Chest",
        "area3": "Cardio"
    },
    "workout_4": {
        "day": "Thursday",
        "area1": "Legs",
        "area2": "Core",
        "area3": "Cardio"
    },
    "workout_5": {
        "day": "Friday",
        "area1": "Back",
        "area2": "Chest",
        "area3": "Cardio"
    },

    "workout_6": {
        "day": "Saturday",
        "area2": "Arms",
        "area3": "Cardio"
    }
}

const workoutLevels = {
    "Heavy-1": "35 - 15",
    "Heavy-2": "35 - 10",
    "Heavy-3": "35 - 5",
    "Middle-1": "25 - 15",
    "Middle-2": "25 - 10",
    "Middle-3": "25 - 5",
    "Lite-1": "20 - 20",
    "Lite-2": "20 - 10",
    "Lite-3": "20 - 5"
}

const workoutRegions = {
    "Arms": {
        "type1": "Hammer Curls",
        "type2": "Curl Dumb Bell",
        "type3": "Tricep Dips",
        "type4": "Shoulder Press",
        "type5": "Push Ups",
        "type6": "Overhead Tricep Extension Dumb Bell"
    },
    "Chest": {
        "type1": "Bench Press Dumb Bell",
        "type2": "Incline Bench Press",
        "type3": "Bent Over Fly"

    },
    "Back": {
        "type1": "Single Arm Row",
        "type2": "Deadlift"
    },
    "Legs": {
        "type1": "Squats",
        "type2": "Calf Raises"
    },
    "Core": {
        "type1": "Leg Raise",
        "type2": "Bicycle Crunch",
        "type3": "Sit Ups",
        "type4": "Plank & Push Ups",
        "type5": "Russian Twist",
        "type6": "Superman"
    },
    "Cardio": {
        "type1": "Bicycle"
    }
}

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 03/17/2023
// Date Modified: 03/17/2023
// Name: extractAreas
// Purpose: Extracts the areas from the workout object
// Input: workout
// Output: Appropriate areas
// Notes: NA
// -----------------Function Definitions--------------------

const extractAreas = (workout) => {
    let areas = [];
    for (const key in workout) {
        if (key.includes("area")) {
            areas.push(workout[key]);
        }
    }
    return areas;
};

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 03/17/2023
// Date Modified: 03/17/2023
// Name: getExercisesByRegion
// Purpose: Extracts the exercises from the workout object
// Input: regions, regionName
// Output: Appropriate exercises
// Notes: NA
// -----------------Function Definitions--------------------
const getExercisesByRegion = (regions, regionName) => {
    const region = regions[regionName];
    if (!region) {
        console.log("Invalid region name");
        return [];
    }

    const exercises = [];
    for (const key in region) {
        exercises.push(region[key]);
    }
    return exercises;
};


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 03/17/2023
// Date Modified: 03/17/2023
// Name: getWorkoutByDay
// Purpose: Extracts the workout by day from the workout object
// Input: workouts, day
// Output: Appropriate workout
// Notes: NA
// -----------------Function Definitions--------------------
const getWorkoutByDay = (workouts, day) => {
    for (const workout in workouts) {
        if (workouts[workout].day === day) {
            return workouts[workout];
        }
    }
    return null;
};


