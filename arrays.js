//Create a array from a string Example:
function arraySplit(str){
    wordsArray = str.split(" ")
    for(i = 0; i<wordsArray.length; i++){
      console.log("Word" , i ,wordsArray[i])
    }
    
}

var str = "I love coding"
arraySplit(str)

var names = ["Kevin", "Austin", "Alyssa"]

// function compare(num1, num2) { 
//   return num1 - num2;
// }
// var nums = [3,1,2,100,4,200]; 
// nums.sort(compare); 
// print(nums); // 1,2,3,4,100,200

// The sort() function uses the compare() 
// function to sort the array elements 
// numerically rather than lexicographically.