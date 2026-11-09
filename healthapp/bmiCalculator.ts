interface bmiData {
  height: number;
  weight: number;
}

const calculateBmi = (height: number, weight: number):string => {
  height = height / 100;
  const score =  weight / (height * height);
  if(score<16.0){
    return "Underweight(Severe thinness)";
  }
  if(score<17.0){
    return "Underweight(Moderate thinness)";
  }
  if(score<18.5){
    return "Underweight(Mild thinness)";
  }
  if(score<25.0){
    return "Normal range";
  }
  if(score<30.0){
    return "Overweight(Pre-obese)";
  }
  if(score<35.0){
    return "Obese(Class I)";
  }
  if(score<40.0){
    return "Obese(Class II)";
  }
  return "Obese(Class III)";
}

const parseArguments = (args: string[]): bmiData => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

try {
  if (process.argv[1] === import.meta.filename) {
    const { height, weight } = parseArguments(process.argv);
    console.log(calculateBmi(height, weight));
  }
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
export default calculateBmi;