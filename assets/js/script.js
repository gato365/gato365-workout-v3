



// Print current date and time in console
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_FULL));


document.getElementById("date-time").textContent = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Page 1
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Get Today's workout
const today = DateTime.now().weekdayLong;
const workout = getWorkoutByDay(dailyWorkouts, today);
console.log(today);


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




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Page 2
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



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
    saveExerciseData();
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


let currentExercise = 0;


let prevWeightRepInput = { "rep": "Reps", "weight": "Weight" };

console.log(prevWeightRepInput.rep);
console.log("Reps");

const generateSets = () => {

    setsContainer.innerHTML = '';

    if (workoutExercises[currentExerciseIndex].toLowerCase() === "bicycle") {
        const caloriesInput = document.createElement('input');
        caloriesInput.setAttribute('type', 'number');
        caloriesInput.setAttribute('placeholder', 'Calories');
        caloriesInput.style.width = '100px';
        caloriesInput.style.height = '40px';
        caloriesInput.style.fontSize = '16px';
        const caloriesLabel = document.createElement('label');
        caloriesLabel.textContent = 'Calories:';
        caloriesLabel.style.fontSize = '16px';

        const distanceInput = document.createElement('input');
        distanceInput.setAttribute('type', 'number');
        distanceInput.setAttribute('placeholder', 'Distance');
        distanceInput.style.width = '100px';
        distanceInput.style.height = '40px';
        distanceInput.style.fontSize = '16px';
        const distanceLabel = document.createElement('label');
        distanceLabel.textContent = 'Distance:';
        distanceLabel.style.fontSize = '16px';

        const timeInput = document.createElement('input');
        timeInput.setAttribute('type', 'number');
        timeInput.setAttribute('placeholder', 'Time');
        timeInput.style.width = '100px';
        timeInput.style.height = '40px';
        timeInput.style.fontSize = '16px';
        const timeLabel = document.createElement('label');
        timeLabel.textContent = 'Time:';
        timeLabel.style.fontSize = '16px';

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            completeButton.classList.toggle('completed');
            checkAllSetsMarked();
            // checkButtonsState();
        });





        const skipButton = document.createElement('button');
        skipButton.textContent = 'Skip';
        skipButton.classList.add('skip');
        skipButton.addEventListener('click', () => {
            skipButton.classList.toggle('skipped');
            checkAllSetsMarked();
            // checkButtonsState();
        });


        setsContainer.appendChild(caloriesLabel);
        setsContainer.appendChild(caloriesInput);
        setsContainer.appendChild(distanceLabel);
        setsContainer.appendChild(distanceInput);
        setsContainer.appendChild(timeLabel);
        setsContainer.appendChild(timeInput);
        setsContainer.appendChild(caloriesInput);
        setsContainer.appendChild(distanceInput);
        setsContainer.appendChild(timeInput);
    } else {
        for (let i = 1; i <= 3; i++) {


            const set = document.createElement('div');
            set.classList.add('set');

            const label = document.createElement('label');
            label.textContent = `Set ${i}:`;
            label.style.fontSize = '25px'; // Adjust the width as needed

            const repsInput = document.createElement('input');
            repsInput.setAttribute('type', 'number');
            repsInput.setAttribute('placeholder', "Reps");
            repsInput.style.width = '100px'; // Adjust the width as needed
            repsInput.style.height = '40px'; // Adjust the height as needed
            repsInput.style.fontSize = '16px'; // Adjust the font size as needed

            const weightInput = document.createElement('input');
            weightInput.setAttribute('type', 'number');
            weightInput.setAttribute('placeholder', prevWeightRepInput.weight);
            weightInput.style.width = '100px'; // Adjust the width as needed
            weightInput.style.height = '40px'; // Adjust the height as needed
            weightInput.style.fontSize = '16px'; // Adjust the font size as needed

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.classList.add('complete');


            completeButton.addEventListener('click', () => {
                completeButton.classList.toggle('completed');
                // checkAllSetsMarked();
                checkButtonsState1();
            });





            const skipButton = document.createElement('button');
            skipButton.textContent = 'Skip';
            skipButton.classList.add('skip');
            skipButton.addEventListener('click', () => {
                skipButton.classList.toggle('skipped');
                // checkAllSetsMarked();
                checkButtonsState1();
            });

            set.appendChild(label);
            set.appendChild(repsInput);
            set.appendChild(weightInput);
            set.appendChild(completeButton);
            set.appendChild(skipButton);
            setsContainer.appendChild(set);
        }
    }
};
// Add event listener to "Complete Workout" button
completeWorkoutButton.addEventListener("click", saveWorkoutData(today));

const updateExercise = () => {


    // Update exercise title
    exerciseTitle.textContent = workoutExercises[currentExerciseIndex];


    // Generate sets
    generateSets();



    // Display the next button
    nextExerciseButton.style.display = "none";


    // Save exercise data
    saveExerciseData();

    // Display "Complete Workout" button on the last exercise
    if (currentExerciseIndex === workoutExercises.length - 1) {
        completeWorkoutButton.style.display = "inline-block";
    } else {
        completeWorkoutButton.style.display = "none";
    }

};




// Hide the next button by default
nextExerciseButton.style.display = "none";

// Initialize the first exercise
updateExercise();
