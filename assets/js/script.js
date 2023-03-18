



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

prevExerciseButton.addEventListener("click", () => {
    if (currentExerciseIndex > 0) {
        currentExerciseIndex--;
        exerciseTitle.textContent = workoutExercises[currentExerciseIndex];
    }
});

nextExerciseButton.addEventListener("click", () => {
    if (currentExerciseIndex < workoutExercises.length - 1) {
        currentExerciseIndex++;
        updateExercise();
        resetButtons();
    }
});




const completeButtons = document.querySelectorAll(".complete");

const skipButtons = document.querySelectorAll(".skip");

completeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        button.classList.toggle("completed");
    });
});

skipButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        button.classList.toggle("skipped");
    });
});


// script.js

const exercises = ['Exercise 1', 'Exercise 2', 'Exercise 3']; // Replace this with your exercises array
let currentExercise = 0;




const generateSets = () => {

    setsContainer.innerHTML = '';
    for (let i = 1; i <= 3; i++) {









        
        const set = document.createElement('div');
        set.classList.add('set');

        const label = document.createElement('label');
        label.textContent = `Set ${i}:`;

        const repsInput = document.createElement('input');
        repsInput.setAttribute('type', 'number');
        repsInput.setAttribute('placeholder', 'Reps');

        const weightInput = document.createElement('input');
        weightInput.setAttribute('type', 'number');
        weightInput.setAttribute('placeholder', 'Weight');


        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            completeButton.classList.toggle('completed');
            // checkAllSetsMarked();
            checkButtonsState();
        });





        const skipButton = document.createElement('button');
        skipButton.textContent = 'Skip';
        skipButton.classList.add('skip');
        skipButton.addEventListener('click', () => {
            skipButton.classList.toggle('skipped');
            // checkAllSetsMarked();
            checkButtonsState();
        });

        set.appendChild(label);
        set.appendChild(repsInput);
        set.appendChild(weightInput);
        set.appendChild(completeButton);
        set.appendChild(skipButton);
        setsContainer.appendChild(set);
    }
};

const updateExercise = () => {
    exerciseTitle.textContent = workoutExercises[currentExerciseIndex];
    generateSets();
    nextExerciseButton.style.display = "none";
};


// Hide the next button by default
nextExerciseButton.style.display = "none";

// Initialize the first exercise
updateExercise();
