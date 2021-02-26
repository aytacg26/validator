> * **Date** : 24/12/2020;
> * **Author** : Aytaç GÜLEY, Nicosia, Cyprus
> * **email** : aytacg26@yahoo.com
> * **version**: 1.1.1
*This package started in 22/12/2020 for this reason, currently it is very small and has very small amount of validation and utility functions*

# validatorutils package 
contains small amount of validation and utility functions, currently 13 functions but will be expanded each day
to use validatorutils in your app, just require("validatorutils");

*Ex :*
const utils = require("validatorutils");
utils will be an object which contains all the below functions
In future versions, because of the newly prepared validation functions especially regarding date manipulation, this
will be converted to a class which will contain different objects serving different area (Number or Array validation and manipulation, Date validation and manipulation, form validation etc.)
and currently, all functions contains console.error() messages in case of any error or in case of any invalid argument, in class version, it will be possible to on/off these messages.

## Functions in Module :
___________________________________________________________________________________________________________________________________________________________________________________________________
**isValidNumberArray(array)** >>>
> it checks if the given argument is a valid Number Array. To this function, argument will be an array and it will check if the given array contains only integer or floating point numbers
If array contains any string value or anything other than a number, it will retrun false.
____________________________________________________________________________________________________________________________________________________________________________________________________
**isValidNumber(number)** >>>
> This function checks if the given argument is a valid number *(integer or floating point number)*. If the given argument is not a valid number it will return false

_____________________________________________________________________________________________________________________________________________________________________________________________________
**isFloatingPointNumber(number)** >>>
> The function checks if the given number is a floating point number. If the given number is an integer or given argument is not a number, it will return false.

_______________________________________________________________________________________________________________________________________________________________________________________________________
**isValidNumVariable(num, minVal = 0, maxVal = Math.pow(2, 53) - 1)** >>>
> The function checks if the given number is in the given expected range. default min value is zero and default max value is the maximum possible value to check in javascript
_______________________________________________________________________________________________________________________________________________________________________________________________________
**isValidObject(obj)** >>>
> The function checks if the given argument is an object with props and functions and it is not an empty object
In any case, an empty object is an object but with this function we just would like to check if we have an object with props in it.
In this function, we prevent to get a true result from an Array Object as it is also an Object which has keys (indexed) and values at each index.

__________________________________________________________________________________________________________________________________________________________________________________________________________
**getPercentageValue(value)** >>>
> Gets the value from % value form string.
* @param {String} value - String representation of percentage value *(ex. %2.0 or 2.25%)*
    if the result is valid, returns the floating point result else returns 0
__________________________________________________________________________________________________________________________________________________________________________________________________________
**addComma(value)** >>>
> This function will add comma to number and return a string representation *(ex : Num is 1000000, function will return 1,000,000)*
* *@param {String || Number} value - Number or string number value to be separated by comma in thousands digit*

___________________________________________________________________________________________________________________________________________________________________________________________________________
**createSet(...values)**  >>>
Instead of using new Set() with an array as an argument, with createSet() we can get a set with unique values by adding all elements to arguments of createSet() function.
*@param {Number || String} values- string or number elements of the target set.*

_____________________________________________________________________________________________________________________________________________________________________________________________________________
**getDistinctValues()** >>>
> This function gets the array and creates a new array which contains distinct values.
* *@param {Array} array - Array with values which may contain more than one same value*

______________________________________________________________________________________________________________________________________________________________________________________________________________
**cloneArray(array)** >>>
> This function clones the given array, the returned array is a clone of given array and it has new reference.
In case of any unexpected error, return array will be an empty array 
* *@param {Array} array - An array which we need the clone of it.*

________________________________________________________________________________________________________________________________________________________________________________________________________________
**isValidArray(array)** >>>
> This function tests if the given agrument is a valid array or not, if the given argument is a valid array 
returns true else will return false.
* *@param {Array} array - The Javascript array to test if it is an array or not*

________________________________________________________________________________________________________
**cloneObject()** >>>
>This function clones the given object, the returned object is a clone of given object and it has new reference. In case of any error or in case of undefined or null argument, the function will return an empty object.
* *@param {Object} obj - A JavaScript Object which we need the clone of it.* 

________________________________________________________________________________________________________
**consistOf(array, testValue)** >>>
> This function checks if the given array consist of given test value, if it has the given value it will return true, else it will return false. In case of any error (undefined or null arguments or unexpected error), function will return false
* *@param {Array} array - Array which we would like to check if it contains the testValue*
* *@param { Number || String} testValue - testValue (String or Number) which we would like to check if it is exists in given array*

________________________________________________________________________________________________________________________________________________________________________________
**makeCapital(text)**
> This function capitalizes the given text *(ex: aytac => Aytac)*
* *@param {String} text - text to be capitalized*
_________________________________________________________________________________________________________________________________________________________________________________
**hasSequence(password)**
> This function checks if there is a sequence of numbers *(for example "01234" or "12345")*, this only checks 5 consequtive numbers and if password contains 5 consequtive numbers returns true, otherwise it returns false
* *@param {String} password - string password or string numbers to check* 
__________________________________________________________________________________________________________________________________________________________________________________
 **isRepetitive(value, checkNumbers = true)**

 >This function checks if the given value/string text contains repetitive characters *(ex : AAAAaaaa or 1111AAACHTD)*, in given value, if we would like to check only letters and 
 exclude the numbers checkNumbers boolean value should be false, otherwise it should be true. Default value of checkNumbers is true, which means in any given value
 function will check if it contains repetitive letters and/or numbers
 * *@param {String || Number} value - value to check if it has repetitive characters or numbers* 
 * *@param {Boolean} checkNumbers - If we would like to check repetitive numbers too checkNumbers must be true, if value has numbers but we would like to exclude numbers from the test, this should be false* 
_____________________________________________________________________________________________________________________________________________________________________________________________________________
**sortNumArray(array, ascending=true)**
> This function sorts the number array in acsending and also descending order, default value of second parameter (ascending) is true, and hence it will
 sort in ascending order, if second parameter set to false, it will sort in descending order.
 * *@param {Array} array - Number array to sort*
 * *@param {Boolean} ascending - Number array can be sort in Ascending Order and Descending Order. Default value is true, that is array values will be sorted in ascending order, if ascending is false, it will sort in descending order*
________________________________________________________________________________________________________________________________________________________________________________________________________________________
**sortStringArray(array, AtoZ=true)**
>This function will sort the string values of the array depending on given sort constraint, if we want to sort from A to Z, we will just put the array to the function
because the defalut sorting is from A to Z, otherwise, second parameter must be set to false to get a Z to A sorting
 * *@param {Array} array - String Array to sort (ex: ["Aytac", "Aslı", "Ziba", "Fatma", "Halil"])* 
 * *@param {Boolean} AtoZ - true or false, if it is true it will sort from A to Z else it will sort from Z to A* 
__________________________________________________________________________________________________________________________________________________________________________________________________________________________
**arrayTotalVal(array, addTo = 0) - Number Array Total Value of Elements**
> This function will calculate the total value of numbers in array and if total value is going to be added on another value, with the help of
addTo argument, it will be possible to get overall total value.
* *@param {Array} array - a number array to calculate total value.* 
* *@param {Number} addTo - addTo is the value which we would like to add total value of numbers in given array. Default value is 0* 
__________________________________________________________________________________________________________________________________________________________________________________________________________________________
**arrayAverageVal(array) - Number Array Average Value of Elements in Array**
>This function takes the average value of numbers in given number array.
 * *@param {Array} array - A number array which the function will take the average value of the numbers in given array* 
___________________________________________________________________________________________________________________________________________________________________________________________________________________________
 **groupArray(array, groupNumber, exactGroups = false)**
  > This function will create array of group of arrays from the given array under the given group number. That is if we would like to group values of array to three
 groupNumber will be three and this will return an array of arrays which each array will have three elements if the main array is divisible to three, if it is not
 last array will have remaining element(s), if we would like to exclude last values, exactGroups should be set true. (Default value of exactGroups is false)
 *Ex: main array = [1,2,3,4,5,6], groupNumber=3, return value will be [[1,2,3], [4,5,6]]*
 * *@param {Array} array - Main array to be grouped in given number*
 * *@param {Number} groupNumber - Number of each group (2,3,4, etc.)*
 * *@param {Boolean} exactGroups - If only exact groups are required and excluding the values which will not create an exact group of given number won't create a problem, value of exactGroups must be true, otherwise should be set to false (Default value is false)*

_________________________________________________________________________________________________________________________________________
# Date Utils and Validators Class - DateUtils

>In validator, to use Date Utilities and Validators, you will require DateUtils of validator ***(ex: const { DateUtils } = require("./validator");)*** 
DateUtils is a Class and when you instantiate the DateUtils class ***(ex : const dateUtils = new DateUtils())***, you will be able to reach following
methods of the class *(The DateUtils class extends Formatter Class and some of the methods comes from Formatter Class)*

**Methods From Formatter Class :**
________________________________________________________________________________________________________________________________________________________
**formatDateNum(num)**
>Get's the number as argument and if it is less than 10, it will return "01", "02" etc. string result else it will return the entered value in String type
* *@param {Number} num - Number to format*
___________________________________________________________________________________________________________________________________________________________
 **isLeapYear(year)**
>This function checks if the given year value is leap year or not. If it is leap year returns true else returns false. In case of any error (Unexpected error or null/undefined)
function will return false.
* *@param {Number} year - year to test if it is leap year or not*
______________________________________________________________________________________________________________________________________________________________
**isValidDate(date)**
>this checks if the given date is a valid Date Object, it is used in some of the metods of child class but can be used for validation processes too.
*@param {Date} date - Date object (ex: new Date(2020, 11, 10))*

_________________________________________________________________________________________________________________________________________________________________
**dateFormat1(date, format = "mm/dd/yyyy", seperator = "/", language = "en")**
>Formats : mm/dd/yyyy, dd/mm/yyyy, yyyy/mm/dd, mdy (MonthString day, Year), dmy (day MonthString Year)
This function formats given date (date object), under the given date format and language conditions, for formats which consists of
seperators, it accepts three options which are "/", "-" and ".", default seperator is "/". In case of any seperator other than
acceptable ones, function will use the default seperator.
* *@param {Date} date - date object to be formatted to a string date representation*
* *@param {String} format - expected date format. Options : mm/dd/yyyy, dd/mm/yyyy, yyyy/mm/dd, mdy (MonthString day, year) and dmy (day MonthString Year)*
* *@param {String} seperator - Expected seperator between date values, possible seperators are "/", "-", "."; Default value is "/"*
* *@param {String} language - ISO Language Code for the months. Default is "en", and this will work for mdy or dmy formats (Currently supports : en, tr, es, de, it, fr, pt)*
>(en - English, tr - Turkish, es - Spanish, de - German, it - İtalian, fr - French, pt - Portugal), languages will be added day by day, I will try to add all languages in following versions.
_______________________________________________________________________________________________________________________________________________________________________
**dateFormat2(day = 1, month = 1, year = 1990, format = "mm/dd/yyyy", seperator = "/", language = "en")** 
 >This function formats the given date from the given day, month and year and according to the given conditions (format, seperator and language)
 This function uses dateFormat1 to get the result. According to the given year, it considers leap year and number of days if the month is February
 In any case, if the given day is not a valid number (any number less than 0 or any number greater than valid number of days in given month), the max
 number of that month will taken by the function. If the entered numbers are completely wrong or if there is any unexpected error or null/undefined
 arguments, function will return "00/00/0000"
 * *@param {Number} day  - day value of the date*
 * *@param {Number} month - month value of the date (1 - January to 12 - December)*
 * *@param {Number} year - year value of the date*
 * *@param {String} format - expected date format. Options : mm/dd/yyyy, dd/mm/yyyy, yyyy/mm/dd, mdy (MonthString day, year) and dmy (day MonthString Year)*
 * *@param {String} seperator -  Expected seperator between date values, possible seperators are "/", "-", "."; Default value is "/"*
 * *@param {String} language -  ISO Language Code for the months. Default is "en", and this will work for mdy or dmy formats (Currently supports : en, tr, es, de, it, fr, pt)*
 __________________________________________________________________________________________________________________________________________________________________________________
 **today = (format = "mm/dd/yyyy", seperator = "/", language = "en")**
>This function gives the today date according to the given format and language. Format and Language options are given below : 
* *@param {String} format - Expected format for the date (today), Options : mm/dd/yyyy, dd/mm/yyyy, yyyy/mm/dd, mdy (MonthString day, year) and dmy (day MonthString Year)*
* *@param {String} seperator - Expected seperator between date values, possible seperators are "/", "-", "."; Default value is "/"*
* *@param {String} language - ISO Language Code for the months. Default is "en", and this will work for mdy or dmy formats (Currently supports : en, tr, es, de, it, fr, pt)*
_____________________________________________________________________________________________________________________________________________________________________________________
 **getDayMonthYear(date, language = "en")**
>This function returns an object which consists of day, month, year, monthName (string) and formattedDate of the given JavaScript Date Object according to
the given language option. In general, language option will only work for monthName property of the returned object, formattedDate property of the date
will have mm/dd/yyyy string format.
* *@param {Date} date - JavaScript Date Object (ex: new Date(2000, 10, 20))*
* *@param {String} language - ISO Language Code for the months. Default is "en", and this will work for mdy or dmy formats (Currently supports : en, tr, es, de, it, fr, pt)*
______________________________________________________________________________________________________________________________________________________________________________________
 **monthName = (month = 1, language = "en")**
 This function returns monthName of given number in given language, currently supported language codes are given below:
 *@param {Number} month - Month number (1-January, 2-February ... 12-December)* 
 *@param {Sting} language -  ISO Language Code for the months. Default is "en", and this will work for mdy or dmy formats (Currently supports : en, tr, es, de, it, fr, pt)*

 ***Currently Supported Languages :***
 * 1- en - English
 * 2- tr - Turkish
 * 3- es - Spanish
 * 4- de - German
 * 5- it - Italian
 * 6- fr - French
 * 7- pt - Portugal

 >In future versions, I will add as much language as possible and these language options will also be used in other possible functions too. For example, for DateUtils Months and Days of the Week
_____________________________________________________________________________________________________________________________________________________________________________________________
**showHour = ()**
>This functions shows the current hour in hh:mm:ss format
_____________________________________________________________________________________________________________________________________________________________________________________________ 

 

  
  

 
 
