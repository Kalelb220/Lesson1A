//lab 1 
calculateRectangleArea=(length, width)=>length*width;
console.log(calculateRectangleArea(5, 10)); // 50

calculateCircleArea=(radius)=>{
    return Math.PI*radius*radius;
}
console.log(calculateCircleArea(3)); // 28.27 (approx)

//Lab 2 
Let grade= ” ”;
if(score >= 90){
grade = “A”;
}
else if(score >= 80){
grade = "B";
}
else if (score >= 70){
grade = "C";
}
else if (score >=60){
grade = "D";
}
else {

grade = "F";

return grade;
}
console.log(gradeCategory(95)); // "A"
console.log(gradeCategory(72)); // "C"
console.log(gradeCategory(58)); // "F"
 
//lab 4 

doubleNumbers=(numbers)=>{
    for (let i = 0; 1 ‹ numbers.length; i++){
    numbers[i] = numbers[i]*2;
    }
    return numbers;
    }
    console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
    console.log(doubleNumbers([-1, 0, 5])); // [-2, 0, 10]

    //Lab 5
    fahrenheitToCelsius=(f)=>{
        return f = (f -32 )*(5/9);
        }
        describeTemperature=(f) =>{
        f = fahrenheitToCelsius(f);
        let temp = “”;
        if (f >30){
        temp = "Hot";
        }
        else if (f >= 21){
         temp = "Warm";
        }
        else if (f >= e){
        temp = "Cold";
        }
        else {
        temp = "Freezing";
        }
        return temp;
        }
        console.log(describeTemperature(32)); // "Freezing!"
        console.log(describeTemperature(68)); // "Cold"
        console.log(describeTemperature(95)); // "Hot"
        

