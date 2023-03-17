const DateTime = luxon.DateTime;
// const {dailyWorkouts, workoutLevels, workoutRegions } = require('./data/data.js');






// Print current date and time in console
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_FULL));


document.getElementById("date-time").textContent = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);

// load dailyworjout.json file into workouts variable
// let workouts;
// fetch("./data/dailyWorkouts.json")
//     .then((response) => response.json())
//     .then((data) => {
//         workouts = data;
//         console.log(workouts)
//     });



// Load workoutRegions_home.json file into exercises variable
// let exercises;
// fetch("./data/workoutRegions_home.json")
//     .then((response) => response.json())
//     .then((data) => {
//         exercises = data;
//     });

// // Load workoutlevels.json file into levels variable
// let levels;
// fetch("./data/workout_levels.json")
//     .then((response) => response.json())
//     .then((data) => {
//         levels = data;
//     });



// Workout logic
// const today = DateTime.now().weekdayLong;
// let workout;
// for (const key in workouts) {
//     if (workouts[key].day === today) {
//         workout = workouts[key];
//         break;
//     }
// }
// console.log(workouts)

// if (workout) {
//     document.getElementById("workout-info").innerHTML = `Today's workout: ${workout.area1}, ${workout.area2}, ${workout.area3}`;
//     document.getElementById("cardio-info").innerHTML = `Cardio: ${exercises.Cardio.type1} for 30 minutes`;
//     document.getElementById("duration-info").innerHTML = `Anticipated workout duration: 1 hour 30 minutes`;
// } else {
//     document.getElementById("workout-info").innerHTML = "No workout scheduled for today";
// }

// const startWorkoutBtn = document.getElementById("start-workout");
// const page1 = document.getElementById("page1");
// const page2 = document.getElementById("page2");
// const exerciseTitle = document.getElementById("exercise-title");
// const previousBtn = document.getElementById("previous");
// const nextBtn = document.getElementById("next");

// let currentExerciseIndex = 0;
// let workoutExercises = [];

// if (workout) {
//     workoutExercises = [exercises[workout.area1].type1, exercises[workout.area2].type1, exercises[workout.area3].type1];
// }

// startWorkoutBtn.addEventListener("click", () => {
//     if (workout) {
//         page1.style.display = "none";
//         page2.style.display = "block";
//         exerciseTitle.textContent = workoutExercises[currentExerciseIndex];
//     }
// });

// previousBtn.addEventListener("click", () => {
//     if (currentExerciseIndex > 0) {
//         currentExerciseIndex--;
//         exerciseTitle.textContent = workoutExercises[currentExerciseIndex];
//     }
// });

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
