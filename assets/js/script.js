const DateTime = luxon.DateTime;
const startWorkoutBtn = document.getElementById("start-workout");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const exerciseTitle = document.getElementById("exercise-title");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const workoutInfoElement = document.getElementById("workout-info");
const cardioInfoElement = document.getElementById("cardio-info");
const durationInfoElement = document.getElementById("duration-info");


// Print current date and time in console
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_FULL));


document.getElementById("date-time").textContent = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);





// Get Today's workout
const today = DateTime.now().weekdayLong;
const workout = getWorkoutByDay(dailyWorkouts, today);



// If workout is found, display workout info, else display no workout found
let exercisesByArea = {};
if (workout) {
  
    workoutInfoElement.innerHTML = `Today's workout: ${workout.area1} & ${workout.area2}`;
    cardioInfoElement.innerHTML = `Cardio: ${workout.area3} for 30 minutes`;
    durationInfoElement.innerHTML = `Anticipated workout duration: 1 hour 30 minutes`;
    const areas = extractAreas(workout)
    areas.forEach((area) => {
        exercisesByArea[area] = getExercisesByRegion(workoutRegions, area);
    });

    console.log("Exercises for", today);
    console.log(exercisesByArea);


} else {
    document.getElementById("workout-info").innerHTML = "No workout scheduled for today";
    console.log("No workout found for", today);
}
  





let currentExerciseIndex = 0;
let workoutExercises = [];

if (workout) {
    for (const key in exercisesByArea) {
        workoutExercises = workoutExercises.concat(exercisesByArea[key]);
    }
    
}

startWorkoutBtn.addEventListener("click", () => {
    if (workout) {
        page1.style.display = "none";
        page2.style.display = "block";
        exerciseTitle.textContent = workoutExercises[currentExerciseIndex];
    }
});

previousBtn.addEventListener("click", () => {
    if (currentExerciseIndex > 0) {
        currentExerciseIndex--;
        exerciseTitle.textContent = workoutExercises[currentExerciseIndex];
    }
});

// nextBtn.addEventListener("click", () => {
//     if (currentExerciseIndex < workoutExercises.length - 1) {
//         currentExerciseIndex++;
//         exerciseTitle.textContent = workoutExercises[currentExerciseIndex];
//     }
// });

// const completeButtons = document.querySelectorAll(".complete");
// const skipButtons = document.querySelectorAll(".skip");

// completeButtons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//         button.classList.toggle("completed");
//     });
// });

// skipButtons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//         button.classList.toggle("skipped");
//     });
// });
