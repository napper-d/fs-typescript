const CalculateExercises = (exercise_hours : number[], target_hours: number) => {
  let period_length = exercise_hours.length;
  let training_days = exercise_hours.reduce((acc, cur) => acc + (cur > 0 ? 1 : 0), 0);
  let average_hours = exercise_hours.reduce((acc, cur) => acc + cur, 0) / period_length;
  let success = average_hours >= target_hours;
  let rating; 
  if(average_hours < target_hours/2){
    rating = 1;
  }else if(average_hours < target_hours){
    rating = 2;
  }else{
    rating = 3;
  }
  const rating_descriptions = ["too bad", "not too bad but could be better", "Good job"];
  let rating_description = rating_descriptions[rating-1];
  return {
    periodLength: period_length,
    trainingDays: training_days,
    success: success,
    rating: rating,
    ratingDescription: rating_description,
    target: target_hours,
    average: average_hours,
  }
}

const test = {
  exerciseHours: [3, 0, 2, 4.5, 0, 3, 1],
  targetHours: 2,
}

console.log(CalculateExercises(test.exerciseHours, test.targetHours));

export default CalculateExercises;
