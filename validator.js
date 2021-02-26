/**
 * Aytac Guley Says : it checks if the given argument is a valid Number Array
 * @param {Array} array - a number array, numbers can be integer or floating point number,
 */
const isValidNumberArray = (array) => {
    try {
      if (array !== undefined && array !== null) {
        const isArray = Array.isArray(array);
  
        if (isArray) {
          const checkLength = array.length > 0;
  
          if (checkLength) {
            let isNumArr = true;
  
            array.forEach((element) => {
              if (isNaN(element)) {
                isNumArr = false;
              }
            });
  
            return isNumArr;
          } else {
            console.error(
              `Empty Array : The entered array argument is an empty array, it is not a number array.`
            );
            return false;
          }
        } else {
          console.error(
            "Not An Array Error: the argument in isValidNumberArray(array) function is not a valid array."
          );
          return false;
        }
      } else {
        console.error(
          `Null or Undefined : array has not been defined or it is null`
        );
        return false;
      }
    } catch (error) {
      console.error(`Unexpected Error : ${error.message}`);
      return false;
    }
  };



  /**
 * This function will create array of group of arrays from the given array under the given group number. That is if we would like to group values of array to three
 * groupNumber will be three and this will return an array of arrays which each array will have three elements if the main array is divisible to three, if it is not
 * last array will have remaining element(s), if we would like to exclude last values, exactGroups should be set true. (Default value of exactGroups is false)
 * Ex: main array = [1,2,3,4,5,6], groupNumber=3, return value will be [[1,2,3], [4,5,6]]
 * @param {Array} array - Main array to be grouped in given number
 * @param {Number} groupNumber - Number of each group (2,3,4, etc.)
 * @param {Boolean} exactGroups - If only exact groups are required and excluding the values which will not create an exact group of given number won't create a problem, value of exactGroups must be true, otherwise should be set to false (Default value is false)
 */
const groupArray = (array, groupNumber, exactGroups = false) => {
  try {
    if (array !== undefined && array !== null) {
      const isValid = Array.isArray(array) && array instanceof Array;

      if (isValid) {
        if (groupNumber !== null && groupNumber !== undefined) {
          const groupArr = [];
          let checkArr = [];

          for (let i = 0; i < array.length; i++) {
            checkArr.push(array[i]);

            if (checkArr.length === groupNumber) {
              groupArr.push(checkArr);
              checkArr = [];
            }

            if (
              i === array.length - 1 &&
              array.length % groupNumber > 0 &&
              !exactGroups
            ) {
              groupArr.push(checkArr);
            }
          }

          return groupArr;
        }

        return array;
      }
    } else {
      console.error(
        "Null || Undefined : the array argument of groupArray function is null or undefined"
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Unexpected Error : ${error.message} >>> An unexpected error occured in groupArray function`
    );
    return [];
  }
};


/**
 * This function tests if the given agrument is a valid array or not, if the given argument is a valid array 
 * returns true else will return false
 * 
 * @param {Array} array - The Javascript array to test if it is an array or not 
 */
const isValidArray = (array) =>{

  try{

    if(array!==undefined && array!==null){

      const isArray = Array.isArray(array) && array instanceof Array;

      if(isArray){

        return true;

      }else{

        console.error("Entered argument to isValidArray function is not a valid array");
        return false;
      }



    }else{

      console.error("Null || Undefined : The given argument to isValidArray function is null or undefined");
      return false;

    }


  }catch(err){

    console.error(`Unexpected Error / Beklenmedik Hata : ${err.message} >>> An unexpected error occured in isValidArray Function.`);
    return false;

  }


}



  /**
   * This function will calculate the total value of numbers in array and if total value is going to be added on another value, with the help of
   * addTo argument, it will be possible to get overall total value.
   * @param {Array} array - a number array to calculate total value. 
   * @param {Number} addTo - addTo is the value which we would like to add total value of numbers in given array. Default value is 0 
   */
  const arrayTotalVal = (array, addTo = 0) => {
    try {
      if (array !== null && array !== undefined) {
        const isArray = Array.isArray(array) && array instanceof Array;
        const isValidNumArray = isValidNumberArray(array);
        if (isArray && isValidNumArray) {
          const total = array.reduce((acc, el) => {
            return acc + el;
          }, addTo);
  
          return total;
        } else {
          console.error(
            "Not Valid : array argument of totalVal is not a valid array"
          );
          return null;
        }
      } else {
        console.error(
          "Null || Undefined : array argument of totalVal is null or undefined"
        );
        return null;
      }
    } catch (error) {
      console.error(
        `Unexpected Error : ${error.message} >>> An unexpected error occured in totalVal function`
      );
      return null;
    }
  };


  /**
   * This function takes the average value of numbers in given number array.
   * @param {Array} array - A number array which the function will take the average value of the numbers in given array 
   */
  const arrayAverageVal = (array) =>{

      try {
        
        if(array!==undefined && array!==null){

          const isValid = isValidNumberArray(array);

          if(isValid){

            const total = arrayTotalVal(array);
            const averageVal = total/array.length;

            return averageVal;

          }else{

            console.error('Not Valid : the array argument of arrayAverageVal function is not a valid number array');
            return null;

          }


        }else{

          console.error('Null || Undefined : the array argument of arrayAverageVal function is null or undefined');
          return null;

        }


      } catch (error) {
        console.error(`Unexpected Error : ${error.message} >>> An unexpected error occured in arrayAverageVal function.`);
        return null;
      }


  }



/**
 * Aytac Guley Says : This function checks if the given argument is a number
 * @param {Number} num - number
 */
const isValidNumber = (num) => {
    try {
      if (num !== null && num !== undefined) {
        if (!isNaN(num) && !Array.isArray(num) && isFinite(num)) {
          return true;
        }
        return false;
      } else {
        console.error(
          "Null or Undefined: parameter num argument is null or undefined"
        );
      }
    } catch (error) {
      console.error(`An unexpected error occured : ${error.message}`);
    }
  };

/**
 * Aytac Guley Says : The function checks if the given number is a floating point number.
 * @param {Number} num - Floating Point Number
 */
const isFloatingPointNumber = (num) => {
    if (num !== undefined && num !== null) {
      const isValidNum = isValidNumber(num);
  
      if (isValidNum) {
        const stringVal = num.toString();
  
        const numFloatTestArray = stringVal.split(".");
        const hasTwoElements = numFloatTestArray.length >= 2;
  
        if (hasTwoElements) {
          return true;
        }
  
        return false;
      } else {
        console.error("Entered argument is not a valid number");
        return false;
      }
    } else {
      console.error(
        `Null or Undefined : parameter num argument is null or undefined`
      );
      return false;
    }
  };

/**
 * Aytac Guley Says : The function checks if the given number is in the given expected range.
 * @param {Number} num - Number to Check if it is in given valid range
 * @param {Number} minVal - minimum value for the expected range (included) (Optional but default value is 0)
 * @param {Number} maxVal - maximum value for the expected range (included) (Optional but default value is maximum integer number in JavaScript)
 */
const isValidNumVariable = (num, minVal = 0, maxVal = Math.pow(2, 53) - 1) => {
    if (num !== null && num !== undefined) {
      let testVal = parseFloat(num);
  
      const isValidNum = isValidNumber(testVal);
  
      if (isValidNum) {
        const isInRange = testVal >= minVal && testVal <= maxVal;
  
        return isInRange;
      } else {
        console.error(
          `Not a valid number : the num parameter agrument of isValidNumVariable function is not a valid number.`
        );
        return false;
      }
    } else {
      console.error(
        `Undefiend or Null : in isValidNumVariable function number is null or undefined`
      );
      return false;
    }
  };

/**
 * Aytac Guley Says : The function checks if the given argument is an object with props and functions and it is not an empty object
 * In any case, an empty object is an object but with this function we just would like to check if we have an object with props in it.
 * In this function, we prevent to get a true result from an Array Object as it is also an Object which has keys (indexed) and values at each index.
 * @param {Object} obj - an object with props and functions
 */
const isValidObject = (obj) => {
    if (obj !== null && obj !== undefined) {
      const isObject = obj instanceof Object;
  
      if (isObject) {
        const keys = Object.keys(obj);
        const values = Object.values(obj);
        const isArray = Array.isArray(obj);
        const areEqual = keys.length === values.length;
        const hasKeys = keys.length > 0;
        const hasValues = values.length > 0;
  
        return areEqual && hasKeys && hasValues && !isArray;
      } else {
        console.error(
          `the obj parameter of isValidObject() function is null or undefined.`
        );
        return false;
      }
    }
  };

/**
 * Gets the value from string % value form. This is a function for the project but can be used in same situations
 * @param {string} value - String representation of percentage value (ex. %2.0 or 2.25%)
 * this function will return an object {isValidResult:boolean, message:"", result:Number}
 * This will be a private function in module.
 */
const getValueFromPercentage = (value) => {
    try {
      if (value !== null && value !== undefined && value !== "") {
        const valArr = value.split("%"); //if the value is an % value, this will give an array with value and empty string. ex: [val, ""] or ["", val];
  
        if (valArr.length === 1) {
          const isValidNum = isValidNumber(valArr[0]);
  
          if (isValidNum) {
            return {
              isValidResult: true,
              message: `For numbers please use parseFloat() or parseInt()`,
              result: value,
            };
          }
        }
  
        //there is possibility that if the given value is a standart string or a value like 2%5 or %2%6%, there will be valid arrays which we do not want as a result.
        //in case the value is something like 2%5 or %2%6 or %2%2%6 it will be easy to understand from length but if it is something like "run", "<p>" etc. we will have an
        // an array with a length of 1. Plus we do not want to give a result for string numbers like "1" or "10", for such nums it is possible to use parseInt() or parseFloat();
  
        if (valArr.length === 2) {
          const floatNumArr = valArr.filter((v) => {
            return v !== "" && v !== undefined && v !== null;
          });
  
          const lenOfArray = floatNumArr.length;
  
          if (lenOfArray === 1) {
            const isValidNum = isValidNumber(floatNumArr[0]);
  
            if (isValidNum) {
              const result = parseFloat(floatNumArr[0]);
  
              return {
                isValidResult: true,
                message: `Value in % string has been taken successfully.`,
                result,
              };
            } else {
              console.error(
                `Not a Valid Number : The entered value in getValueFromPercentage(value) function is not a valid number`
              );
              return {
                isValidResult: false,
                message: "The entered value is not a number.",
                result: 0,
              };
            }
          } else {
            console.error(
              `Not a Valid Value : The entered value in getValueFromPercentage(value) function is not a valid percentage string`
            );
  
            return {
              isValidResult: false,
              message:
                "Not Valid Value : The entered value is not a valid percentage string, expected value : num% or %num",
              result: 0,
            };
          }
        } else {
          if (valArr.length > 2) {
            return {
              isValidResult: false,
              message:
                "Not a valid argument: The entered argument is not a valid percentage string",
              result: 0,
            };
          } else if (valArr.length === 1) {
            const isValidNum = isValidNumber(valArr[0]);
  
            if (isValidNum) {
              console.error(
                `For ${valArr[0]} please use parseInt() or parseFloat()`
              );
              return {
                isValidResult: false,
                message: `Please use parseInt() or parseFloat() for numbers.`,
                result: valArr[0],
              };
            } else {
              return {
                isValidResult: false,
                message: `Not a valid argument: The entered argument is not a valid percentage string`,
                result: 0,
              };
            }
          }
        }
      }
  
      console.error(
        `Undefined or Null Error : No value entered to getValueFromPercentage(value) function.`
      );
  
      return {
        isValidResult: false,
        message:
          "Undefined or Null Error : No value entered to parameter as an argument",
        result: 0,
      };
    } catch (error) {
      console.error(
        `Unexpected Error : ${error.message} >>> An unexpected error occured in getValueFromPercentage(value) function.`
      );
      return {
        isValidResult: false,
        message: `An expected error occured in getValueFromPercentage(value) function >>> ${error.message}`,
        result: 0,
      };
    }
  };

/**
 * Gets the value from % value form string.
 * @param {String} value - String representation of percentage value (ex. %2.0 or 2.25%)
 * if the result is valid, returns the floating point result else returns 0
 */
const getPercentageValue = (value) => {
    const resultObj = getValueFromPercentage(value);
    const isValid = resultObj.isValidResult;
    const result = resultObj.result;
  
    if (isValid) {
      return result;
    }
  
    return 0;
  };


/**
 * Girilen sayı veya string sayı değerini binler basamağına göre virgül ile ayırır.
 * This function will add comma to number and return a string representation (ex : Num is 1000000, function will return 1,000,000)
 * @param {String || Number} value - Virgül ile binler basamağına göre ayrılacak, sayı veya string sayı değeri (
    Number or string number value to be separated by comma in thousands digit)
 */
const addComma = (value) => {
    try {
      if (value !== "" && value !== null && value !== undefined) {
        const isValid = isValidNumber(value);
  
        if (isValid) {
          /*
          Girilen değerin floatingPoint mi yoksa integer mi olduğu incelensin. Eğer floating point ise, noktadan sonraki rakam floatingPoint array'ine eklensin
          ardından geri kalan bölüm için integer sayı için de uygulanacak işlem uygulansın :
          İşlem (floating point ve integer rakama uygulanacak):
  
          */
          const isFloating = isFloatingPointNumber(value);
          const floatingPart = []; //we will save floating part if any in here...
          const stringVal = value.toString();
          let val = "";
  
          if (isFloating) {
            const valArr = stringVal.split(".");
            floatingPart.push(valArr[1]);
            val = valArr[0]; //This is the integer part
          } else {
            val = stringVal; //This is the integer part
          }
  
          //Now we will seperate the values of the val to array
          const intValsArr = val.split(""); //This will create something like ["1", "0", "0", "0", "0", "0"] (from first value to end value);
          const cloneArr = [...intValsArr];
          cloneArr.reverse();
          const lengthOfArr = cloneArr.length;
          let reverseResultArr = [];
  
          if (lengthOfArr >= 4) {
            const cloneLen = cloneArr.length;
            cloneArr.forEach((val, index) => {
              if (index % 3 === 0) {
                reverseResultArr.push(`${val},`);
              } else {
                reverseResultArr.push(val);
              }
            });
  
            let correctedFirstElement = reverseResultArr[0].replace(",", "");
            reverseResultArr[0] = correctedFirstElement;
  
            reverseResultArr.reverse();
            let stringResult = "";
  
            reverseResultArr.forEach((val) => {
              stringResult += val;
            });
  
            if (floatingPart.length === 1) {
              stringResult += `.${floatingPart[0]}`;
  
              return stringResult;
            } else {
              return stringResult;
            }
          } else {
            return value;
          }
        } else {
          console.error(
            "Not Valid : Girilen arguman geçerli bir rakam değildir. The argument is not a valid argument"
          );
          return 0;
        }
      } else {
        console.error(
          `Null || Undefined : dynamicUtils modülü, addComma() fonksiyonuna girilen arguman boş (null) veya tanımlanmamıştır (undefined). Null or undefined argument`
        );
        return 0;
      }
    } catch (error) {
      console.error(
        `Beklenmedik Hata / Unexpected Error : ${error.message} >>> dynamicUtils modülü, addComma() fonksiyonunda beklenmedik bir hata oluştu. An unexpected error occured in addComma() function`
      );
      return 0;
    
    }
  };


/**
 * Instead of using new Set() with an array as an argument, with createSet() we can get a set with unique values by adding all elements to arguments of createSet()
 * @param {Number || String} values- string or number elements of the target set.
 */
const createSet = (...values) => {
  const newSet = new Set();

  values.forEach((value) => {
    newSet.add(value);
  });

  return newSet;
};

/**
 * This function gets the array and creates a new array which contains distinct values
 *
 * @param {Array} array - Array with values which may contain more than one same value
 */
const getDistinctValues = (array) => {
  const valsSet = createSet(...array);
  const distArr = [...valsSet];

  return distArr;
};


/**
 * This function clones the given array, the returned array is a clone of given array and it has new reference.
 * In case of any unexpected error, return array will be an empty array
 *
 * @param {Array} array - An array which we need the clone of it.
 */
const cloneArray = (array) => {
    try{

      if(array!==null && array!==undefined){

        const isArray = isValidArray(array);

        if(isArray){

          const newArray = [];

            array.forEach((el) => {
              newArray.push(el);
            });

            return newArray;



        }else{

          console.error(`In cloneArray function, entered argument is not a valid array to clone`);
          return []

        }


      }else{

          console.error("Null || Undefined : in cloneArray function entered argument is null or undefined");
          return [];

      }




    }catch(err){

      console.error(`Unexpected Error || Beklenmeyen Hata : ${err.message} >>> An unexpected error occured in cloneArray function`)
      return [];

    }
};


/**
 * This function clones the given object, the returned object is a clone of given object and it has new reference.
 * In case of any error or in case of undefined or null argument, the function will return an empty object.
 * @param {Object} obj - A JavaScript Object which we need the clone of it. 
 */
const cloneObject = (obj) => {
  try {
    
    if(obj!==null && obj!==undefined){

      const isObj = isValidObject(obj);

      if(isObj){

        const keys = Object.keys(obj);
        const newObj = {};
      
        keys.forEach((key) => {
          newObj[key] = obj[key];
        });
      
        return newObj;

      }else{

        console.error(`Not a Valid Object : In cloneObject function entered argument is not a valid object`);
        return {};

      }

    }else{

      console.error("Null || Undefined : In cloneObject function entered argument is null or undefined");
      return {};

    }





  } catch (error) {
    
    console.error(`Unexpected Error : ${error.message} >>> in cloneObject function an unexpected error occured.`)
    return {};

  }
};

/**
 * This function checks if the given array consist of given test value, if it has the given value it will return true, else 
 * it will return false. In case of any error (undefined or null arguments or unexpected error), function will return false
 * @param {Array} array - Array which we would like to check if it contains the testValue
 * @param { Number || String} testValue - testValue (String or Number) which we would like to check if it is exists in given array
 */
const consistOf = (array, testValue) =>{

  try {

    const isArrayExists = array!==null && array!==undefined;
    const isTestValExists = testValue!==null && testValue!==undefined;
    const hasValidArgs = isArrayExists && isTestValExists;

    if(hasValidArgs){

      const isArray = isValidArray(array);

      if(isArray){

        const values = createSet(...array);

        return values.has(testValue);

      }else{

        console.error("Not a Valid Array : In consistOf function the given array argument is not a valid array");
        return false;

      }

    }else{

      console.error("Null || Undefined : In consistOf function, one of the arguments or both are null or undefined");
      return false;

    }
    
  } catch (error) {
    
    console.error(`Unexpected Error : ${error.message} >>> in consistOf function an unexpected error occured`);
    return false;

  }



}


/**
 * This function capitalizes the given text (ex: aytac => Aytac)
 * @param {String} text - text to be capitalized
 */
const makeCapital = (text) => {

  try {

      if (text !== null && text!==undefined) {

          const isValid = isNaN(text) && typeof text === "string";

          if(isValid){
              const initialChar = text.substr(0, 1).toUpperCase();
              const remaining = text.substr(1).toLowerCase();
      
      
              return initialChar + remaining;
          }else{

              console.error("Not Valid : The argument of makeCapital function is not a valid string text");
              return "";

          }




      }else{

          console.error("Null || Undefined : The argument of makeCapital function is null or undefined");
          return "";

      }



      
  } catch (error) {
      
      console.error(`Unexpected Error : ${error.message} >>> In makeCapital function an unexpected error occured.`);
      return "";


  }

}

/**
* This function checks if there is a sequence of numbers (for example "01234" or "12345")
* this only checks 5 consequtive numbers and if password contains 5 consequtive numbers returns true, otherwise it returns false
* @param {String} password - string password or string numbers to check 
*/
const hasSequence= (password) => {

  try {

      if(password!==null && password!==undefined){

          const testPass = password.toString();
          const sequences = [
              "01234", "12345",
              "23456", "34567",
              "45678", "56789",
              "98765", "87654",
              "76543", "65432",
              "54321", "43210"
          ];
          let hasSequence = false;

          sequences.forEach(sq => {

              if (testPass.includes(sq)) {

                  hasSequence = true;
              }

          });

          return hasSequence;



      }else{

          console.error("Null || Undefined : the argument of hasSequence function is null or undefined");
          return false;

      }
      
  } catch (error) {
      
      console.error(`Unexpected Error: ${error.message} >>> In hasSequence function, an unexpected error occured.`);
      return false;
  }





}


/**
 * This function checks if the given value/string text contains repetitive characters (ex : AAAAaaaa or 1111AAACHTD), in given value, if we would like to check only letters and 
 * exclude the numbers checkNumbers boolean value should be false, otherwise it should be true. Default value of checkNumbers is true, which means in any given value
 * function will check if it contains repetitive letters and/or numbers
 * @param {String || Number} value - value to check if it has repetitive characters or numbers 
 * @param {Boolean} checkNumbers - If we would like to check repetitive numbers too checkNumbers must be true, if value has numbers but we would like to exclude numbers from the test, this should be false 
 */
const isRepetitive = (value, checkNumbers = true) => {


  try {
      
      if(value!==null && value!==undefined){


              let consecutivePattern;

              if (checkNumbers) {

                  consecutivePattern = /([0-9a-zA-Z])\1{3}/;

              } else {

                  consecutivePattern = /([a-zA-Z])\1{3}/;
              }

              const regex = new RegExp(consecutivePattern);

              const isRepetitive = regex.test(value.toString());

              const message = isRepetitive?"The entered value has repetitive characters or numbers":"The value does not have repetitive characters or numbers"

              return {result:isRepetitive, message};




      }else{

          console.error("Null || Undefined : The value argument of isRepetitive function is null or undefined");
          return {result:"", message:"NU : Null or Undefined - The value of argument of isRepetitive function is null or undefined"}

      }
  } catch (error) {
      
      console.error(`Unexpected Error : ${error.message} In isRepetitive function, an unexpected error occured.`)
      return {result:"", message:"Unexpected: Unexpected error occured."};
  }



}


const swapItems = (items, leftIndex, rightIndex) => {

  const temporaryFile = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temporaryFile;

}

const partition = (items, left, right) => {

  let pivot = items[Math.floor((right + left) / 2)]; //middle element
  let i = left; //left pointer
  let j = right; //right pointer

  while (i <= j) {

      while (items[i] < pivot) {
          i++;
      }

      while (items[j] > pivot) {
          j--;
      }

      if (i <= j) {

          swapItems(items, i, j);
          i++;
          j--;

      }

  }

  return i;

}

const quickSort = (items, left, right) => {

  let index;

  if (items.length > 1) {

      index = partition(items, left, right);

      if (left < index - 1) {
          //more elements on the left side of the pivot
          quickSort(items, left, index - 1);

      }

      if (index < right) {
          //more elements on the right side of the pivot
          quickSort(items, index, right);

      }



  }

  return items;


}


const ascSort = (array)=>{

        //This will sort from smallest to highest size:
        //Quick Sort Algorithm used
        const unsortedItems = []; //items


        //First create the array
        for (let i = 0; i < array.length; i++) {

            unsortedItems.push(array[i]);

        }



        const left = 0;
        const right = unsortedItems.length - 1;
        let sortedItems = [];
      

        if (unsortedItems.length > 1) {


            sortedItems = quickSort(unsortedItems, left, right);

            return sortedItems;

        }


        return unsortedItems;

}

const desSort = (array) => {

  const ascendSort = ascSort(array);
  const desSort = [];
  for(let i=ascendSort.length-1; i>=0; i--){

      desSort.push(ascendSort[i]);

  }


  return desSort;


}


/**
 * This function sorts the number array in acsending and also descending order, default value of second parameter (ascending) is true, and hence it will
 * sort in ascending order, if second parameter set to false, it will sort in descending order.
 * @param {Array} array - Number array to sort
 * @param {Boolean} ascending - Number array can be sort in Ascending Order and Descending Order. Default value is true, that is array values will be sorted in ascending order, if ascending is false, it will sort in descending order
 */
const sortNumArray = (array, ascending=true)=>{

  if(ascending){

    return ascSort(array)

  }else{

    return desSort(array);

  }


}




const sortStrAZ = (a,b) =>{

  a = a.toLowerCase();
  b = b.toLowerCase();
 
  return a>b?1:a<b?-1:0;  

    
}

const sortStrZA = (a,b) =>{
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a>b?-1:a<b?1:0;   
}


/**
 * This function will sort the string values of the array depending on given sort constraint, if we want to sort from A to Z, we will just put the array to the function
 * because the defalut sorting is from A to Z, otherwise, second parameter must be set to false to get a Z to A sorting
 * @param {Array} array - String Array to sort (ex: ["Aytac", "Aslı", "Ziba", "Fatma", "Halil"]) 
 * @param {Boolean} AtoZ - true or false, if it is true it will sort from A to Z else it will sort from Z to A 
 */
const sortStringArray = (array, AtoZ=true) =>{

  try {

    if(array!==null && array!==undefined){

      const isValid = isValidArray(array);
      const isNumArr = isValidNumberArray(array);

      if(isValid && !isNumArr){

        return AtoZ?array.sort(sortStrAZ):array.sort(sortStrZA);

      }else if(isValid && isNumArr){

        return sortNumArray(array, AtoZ);


      }else{

        console.error('Not Valid : The array parameter of sortString function is not a valid array');
        return [];
      }

    }else{
      console.error('Null || Undefined : The array parameter of the sortString function is Null or Undefined');
      return [];

    }

    
  } catch (error) {
    console.error(`Unexpected Error : ${error.message} >>> An unexpected error occured at sortingString function`);
    return [];
  }


 

}





/**
 * Bu projede, addComma() fonksiyonu ile, integer veya floating point sayının virgüllü hale çevrilmesinden sonra, ilgili sayının kullanımında
 * string değeri tekrardan integer veya floating point değere çevirmemizi sağlayacaktır. Sonuç yine string olacaktır ancak bu sefer virgüllerin
 * kaldırıldığı bir değer elde edeceğiz. String olmasının sebebi, virgüllü sayının sonunda yer alan TL işaretini yine yerleştirmesidir. Amaç getTLValue()
 * fonksiyonunun işleyişini bozmamak. Daha sonradan bu iki fonksiyon birleştirilecektir.
 * 
 * It will allow us to convert the string value back to an integer or floating point value. For example we have a string value which we get from addComma() as $2,345,300
 * with the help of getValueFromCommaAddedValue() function we will have an integer result of 2345300 or if it is a floating point number we will have a result of floating point number
 * 
 * @param {string} stringValue - string value which has commas and created by addComma Function (Ex : $2,350,985 or $2,879,550.23)
 */
const getValueFromCommaAddedValue = (stringValue)=>{

      //Virgüllü değerlerimiz iki türlü olabilir. Birincisi tamamen integer değere virgül eklenmesi durumu, ikincisi ise floating point değere virgül eklenmesi durumudur.
  //Bu sebeple yapının her iki durumunu da göz önünde bulundurmamız gerekecektir. (1- 2,350,000 TL , 2- 2,350,000.35 TL)

  if (stringValue !== null && stringValue !== undefined && stringValue !== "") {
    //TL işaretini ayır :
    const degerİlkParcaArr = stringValue.split(" ");
   
    const virgulluSayiDegeri = degerİlkParcaArr[0];
    const sayiDegeri = parseFloat(virgulluSayiDegeri.replaceAll(",", ""));
    let sonuc = "";

    if (degerİlkParcaArr.length === 2) {
      sonuc = `${sayiDegeri} ${degerİlkParcaArr[1]}`;
    } else {
      sonuc = `${sayiDegeri}`;
    }

    return sonuc;

  } else {
    //Burası revize edilebilir.
    return 0;
  }



}


class Formatters {
  constructor() {
    this.months = {
      en: [
        "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      tr: [
        "",
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
      ],
      de: [
        "",
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ],
      fr: [
        "",
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ],
      it: [
        "",
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre",
      ],
      es: [
        "",
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      pt: [
        "",
        "Janeiro",
        "Fevereiro",
        "Marco",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
    };

    this.days = {
      en: [
        "",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      tr: [
        "",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
        "Pazar",
      ],
      de: [
        "",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag",
      ],
      fr: [
        "",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
      ],
      it: [
        "",
        "Lunedi",
        "Martedi",
        "Mercoledi",
        "Giovedi",
        "Venerdi",
        "Sabato",
        "Domenica",
      ],
      es: [
        "",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ],
      pt: [
        "",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sàbado",
        "Domingo",
      ],
    };

    this.dayNumInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    this.formatDateNum = this.formatDateNum.bind(this);
    this.dateFormat1 = this.dateFormat1.bind(this);
    this.dateFormat2 = this.dateFormat2.bind(this);
  }

  /**
   * Get's the number as argument and if it is less than 10, it will return "01", "02" etc. string result else it will return the entered value in String type
   * @param {Number} num - Number to format
   */
  formatDateNum(num) {
    try {
      if (num !== null && num !== undefined) {
        const isNum = typeof parseInt(num) === "number" && !isNaN(num);

        if (isNum) {
          if (num < 10) {
            return `0${num}`;
          } else if (num >= 10) {
            return `${num}`;
          }
        } else {
          console.log(
            "Not a Valid Number : In Formatters Class, argument of formatDateNum function is not a valid number"
          );
          return `00`;
        }
      } else {
        console.error(
          "Null || Undefined : In Formatters Class, argument of formatDateNum function is null or undefined"
        );
        return `00`;
      }
    } catch (error) {
      console.error(
        `Unexpected Error : ${error.message} >>> in Formatters Class, an unexpected error occured at formatDateNum function`
      );
      return `00`;
    }
  }

  /**
   * This function checks if the given year value is leap year or not. If it is leap year returns true else returns false. In case of any error (Unexpected error or null/undefined)
   * function will return false.
   * @param {Number} year - year to test if it is leap year or not
   */
  isLeapYear(year) {
    try {
      if (year !== null && year !== undefined) {
        const isNum = typeof parseInt(year) === "number" && !isNaN(year);

        if (isNum) {

          const divisibleBy4 = parseInt(year)%4===0;
          const divisibleBy100 = parseInt(year)%100===0;
          const divisibleBy400 = parseInt(year)%400===0;

          if(divisibleBy4 && !divisibleBy100){

            return true;

          }else if(divisibleBy4 && divisibleBy100 && divisibleBy4){

            return true;

          }else{

            return false;

          }



        } else {
          console.error(
            "Not a valid number : The entered argument to isLeapYear function in Formatters Class is not a valid number"
          );
          return false;
        }
      } else {
        console.error(
          "Null || Undefined : The argument in isLeapYear function of Formatters Class is null or undefined"
        );
        return false;
      }
    } catch (error) {
      console.error(
        `Unexpected Error : ${error.message} >>> An unexpected error occured while testing the leap year in isLeapYear function of Formatters Class`
      );
      return false;
    }
  }

  /**
   * this checks if the given date is a valid Date Object, it is used in some of the metods of child class but can be used for validation processes too.
   * @param {Date} date - Date object (ex: new Date(2020, 11, 10)), 
   */
  isValidDate(date) {
    try {
      if (date !== null && date !== undefined) {
        const isValidDateObject =
          date instanceof Date && typeof date === "object" && !isNaN(date);

        if (isValidDateObject) {
          return isValidDateObject;
        } else {
          console.error(
            "Not Valid Date : In isValidDate function of Formatters Class, the entered argument is not a valid date"
          );
          return false;
        }
      } else {
        console.error(
          "Null || Undefiend : In isValidDate function of Formatters Class date argument is null or undefined"
        );
        return false;
      }
    } catch (error) {
      console.error(
        `Unexpected Error : ${error.message} >>> In isValidDate function of Formatters Class an unexpected error occured.`
      );
      return false;
    }
  }

  //Formats : mm/dd/yyyy, dd/mm/yyyy, yyyy/mm/dd, mdy (MonthString day, Year), dmy (day MonthString Year)
  /**
   * This function formats given date (date object), under the given date format and language conditions, for formats which consists of
   * seperators, it accepts three options which are "/", "-" and ".", default seperator is "/". In case of any seperator other than
   * acceptable ones, function will use the default seperator.
   * @param {Date} date - date object to be formatted to a string date representation
   * @param {String} format - expected date format. Options : mm/dd/yyyy, dd/mm/yyyy, yyyy/mm/dd, mdy (MonthString day, year) and dmy (day MonthString Year)
   * @param {String} seperator - Expected seperator between date values, possible seperators are "/", "-", "."; Default value is "/"
   * @param {String} language - ISO Language Code for the months. Default is "en", and this will work for mdy or dmy formats (Currently supports : en, tr, es, de, it, fr, pt)
   */
  dateFormat1(date, format = "mm/dd/yyyy", seperator = "/", language = "en") {
    try {
      if (date !== null && date !== undefined) {
        const isValidDate = date instanceof Date;

        if (isValidDate) {
          const possibleSeperators = ["/", "-", "."];

          //check if given seperator is in possible seperators, if not use "/";
          const isValidSeperator = possibleSeperators.includes(seperator);
          const sepToUse = isValidSeperator ? seperator : "/";

          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          const formattedDay = this.formatDateNum(day);
          const formattedMonth = this.formatDateNum(month);
          const monthString = this.months[language][month];

          switch (format) {
            case "mm/dd/yyyy":
              return `${formattedMonth}${sepToUse}${formattedDay}${sepToUse}${year}`;
            case "dd/mm/yyyy":
              return `${formattedDay}${sepToUse}${formattedMonth}${sepToUse}${year}`;
            case "yyyy/mm/dd":
              return `${year}${sepToUse}${formattedMonth}${sepToUse}${formattedDay}`;
            case "mdy":
              return `${monthString} ${formattedDay}, ${year}`;
            case "dmy":
              return `${formattedDay} ${monthString} ${year}`;
            default:
              return "00/00/0000";
          }
        } else {
          console.error(
            "Not a Valid Date : The entered date argument in dateFormat1 function of Formatters Class is not a valid date"
          );
          return "00/00/0000";
        }
      } else {
        console.error(
          "Null || Undefined : date argument in dateFormat1 function of Formatters Class is null or undefined"
        );
        return "00/00/0000";
      }
    } catch (error) {
      console.error(
        `Unexpected Error : ${error.message} >>> An unexpected error occured in dateFormat1 function of Formatters Class`
      );
      return `00/00/0000`;
    }
  }

  /**
   * This function formats the given date from the given day, month and year and according to the given conditions (format, seperator and language)
   * This function uses dateFormat1 to get the result. According to the given year, it considers leap year and number of days if the month is February
   * In any case, if the given day is not a valid number (any number less than 0 or any number greater than valid number of days in given month), the max
   * number of that month will taken by the function. If the entered numbers are completely wrong or if there is any unexpected error or null/undefined
   * arguments, function will return "00/00/0000"
   *
   * @param {Number} day  - day value of the date
   * @param {Number} month - month value of the date (1 - January to 12 - December)
   * @param {Number} year - year value of the date
   * @param {String} format - expected date format. Options : mm/dd/yyyy, dd/mm/yyyy, yyyy/mm/dd, mdy (MonthString day, year) and dmy (day MonthString Year)
   * @param {String} seperator -  Expected seperator between date values, possible seperators are "/", "-", "."; Default value is "/"
   * @param {String} language -  ISO Language Code for the months. Default is "en", and this will work for mdy or dmy formats (Currently supports : en, tr, es, de, it, fr, pt)
   */
  dateFormat2(
    day = 1,
    month = 1,
    year = 1990,
    format = "mm/dd/yyyy",
    seperator = "/",
    language = "en"
  ) {
    try {
      //Check Leap Year and Check if it is February or Not.
      const monthToUse = month - 1;
      const isLeapY = this.isLeapYear(year);
      const numOfDaysToTest =
        isLeapY && monthToUse === 1 ? 29 : this.dayNumInMonth[monthToUse];
      const isValidMonthNum = monthToUse >= 0 && monthToUse <= 11;
      const isValidDay = day >= 1 && day <= numOfDaysToTest;

      if (isValidMonthNum && isValidDay) {
        const dateToUse = new Date(year, monthToUse, day);
        return this.dateFormat1(dateToUse, format, seperator, language);
      } else if (isValidMonthNum && !isValidDay) {
        const dayToUse = this.dayNumInMonth[monthToUse];
        const dateToUse = new Date(year, monthToUse, dayToUse);
        return this.dateFormat1(dateToUse, format, seperator, language);
      } else {
        console.error(
          "Not Valid : one or more of the entered arguments in dateFormat2 function of Formatter Class is not valid"
        );
        return "00/00/0000";
      }
    } catch (error) {
      console.error(
        `Unexpected Error : ${error.message} >>> an unexpected error occured in dateFormat2 function of Formatter Class`
      );
      return "00/00/0000";
    }
  }
}

class AGDate extends Formatters {
  constructor() {
    super();
    this.todayDate = {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      hour: new Date().getHours(),
      min: new Date().getMinutes(),
      sec: new Date().getSeconds(),
    };
    this.getDayMonthYear = this.getDayMonthYear.bind(this);
  }

  /**
   * This function gives the today date according to the given format and language. Format and Language options are given below : 
   * @param {String} format - Expected format for the date (today), Options : mm/dd/yyyy, dd/mm/yyyy, yyyy/mm/dd, mdy (MonthString day, year) and dmy (day MonthString Year)
   * @param {String} seperator - Expected seperator between date values, possible seperators are "/", "-", "."; Default value is "/"
   * @param {String} language - ISO Language Code for the months. Default is "en", and this will work for mdy or dmy formats (Currently supports : en, tr, es, de, it, fr, pt)
   */
  today = (format = "mm/dd/yyyy", seperator = "/", language = "en") => {
    return this.dateFormat2(
      this.todayDate.day,
      this.todayDate.month,
      this.todayDate.year,
      format,
      seperator,
      language
    );
  };

  /**
   * This function returns an object which consists of day, month, year, monthName (string) and formattedDate of the given JavaScript Date Object according to
   * the given language option. In general, language option will only work for monthName property of the returned object, formattedDate property of the date
   * will have mm/dd/yyyy string format.
   * @param {Date} date - JavaScript Date Object (ex: new Date(2000, 10, 20))
   * @param {String} language - ISO Language Code for the months. Default is "en", and this will work for mdy or dmy formats (Currently supports : en, tr, es, de, it, fr, pt)
   */
  getDayMonthYear(date, language = "en") {
    try {
      if (date !== null && date !== undefined) {
        const isValid = this.isValidDate(date);

        if (isValid) {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const monthName = this.months[language][month];
          const formattedDate = this.dateFormat1(date);

          return { day, month, year, monthName, formattedDate };
        } else {
          console.error(
            "Not Valid : In getDayMonthYear() function of AGDate Class, entered date argument is not a valid date"
          );
          return {
            day: "",
            month: "",
            year: "",
            monthName: "",
            formattedDate: "",
          };
        }
      } else {
        console.error(
          "Null || Undefined : In getDayMonthYear function of AGDate Class entered date argument is null or undefined"
        );
        return {
          day: "",
          month: "",
          year: "",
          monthName: "",
          formattedDate: "",
        };
      }
    } catch (error) {
      console.error(
        `Unexpected Error : ${error.message} >>> In getDayMonthYear function of AGDate Class an unexpected error occured`
      );
      return { day: "", month: "", year: "", monthName: "", formattedDate: "" };
    }
  }

  /**
   * This function returns monthName of given number in given language, currently supported language codes are given below:
   * @param {Number} month - Month number (1-January, 2-February ... 12-December) 
   * @param {Sting} language -  ISO Language Code for the months. Default is "en", and this will work for mdy or dmy formats (Currently supports : en, tr, es, de, it, fr, pt)
   */
  monthName = (month = 1, language = "en") => {
    return this.months[language][month];
  };

  /**
   * This functions shows the current hour in hh:mm:ss format
   */
  showHour = () => {
    return `${this.todayDate.hour}:${this.todayDate.min}:${this.todayDate.sec}`;
  };


}






module.exports = {
  isValidNumberArray, 
  isValidNumber, 
  isFloatingPointNumber, 
  isValidNumVariable, 
  isValidObject, 
  getPercentageValue, 
  addComma, 
  createSet, 
  getDistinctValues, 
  cloneArray, 
  isValidArray, 
  cloneObject,
  consistOf,
  makeCapital,
  hasSequence,
  isRepetitive,
  arrayTotalVal,
  arrayAverageVal,
  groupArray,
  sortNumArray,
  sortStringArray
}

module.exports.DateUtils = AGDate;