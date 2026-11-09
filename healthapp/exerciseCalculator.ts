interface exerciseData {
  exerciseHours: number[];
  targetHours: number;
}

const CalculateExercises = (exercise_hours : number[], target_hours: number) => {
  const period_length = exercise_hours.length;
  const training_days = exercise_hours.reduce((acc, cur) => acc + (cur > 0 ? 1 : 0), 0);
  const average_hours = exercise_hours.reduce((acc, cur) => acc + cur, 0) / period_length;
  const success = average_hours >= target_hours;
  let rating: number; 
  if(average_hours < target_hours/2){
    rating = 1;
  }else if(average_hours < target_hours){
    rating = 2;
  }else{
    rating = 3;
  }
  const rating_descriptions = ["too bad", "not too bad but could be better", "Good job"];
  const rating_description = rating_descriptions[rating-1];
  return {
    periodLength: period_length,
    trainingDays: training_days,
    success: success,
    rating: rating,
    ratingDescription: rating_description,
    target: target_hours,
    average: average_hours,
  };
};

const parseArguments = (args: string[]): exerciseData => {
   if (args.length < 4) {
     throw new Error('Not enough arguments!');
   }
   const targetHours = Number(args[2]);
   const exerciseHours = args.slice(3).map(Number);
   if (isNaN(targetHours) || exerciseHours.some((h) => isNaN(h))) {
     throw new Error('Provided values were not numbers!');
   }
   return { targetHours, exerciseHours };
};

try {
  if (process.argv[1] === import.meta.filename) {
    const {targetHours, exerciseHours} = parseArguments(process.argv);
    console.log(CalculateExercises(exerciseHours, targetHours));
  }
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}

export default CalculateExercises;
