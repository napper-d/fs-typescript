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

console.log(calculateBmi(180, 74))
export default calculateBmi;