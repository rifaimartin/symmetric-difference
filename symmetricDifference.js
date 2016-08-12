
function sym(args) {

  var argus = Array.prototype.slice.call(arguments); //creates an array of the arguments

  function symDiff(arr1, arr2) { //function to return the symmetric difference of two arrays
    var total = []; //sets an empty array

    for (var i = 0; i < arr1.length; i++) { //for loop to cycle through first array
      if (arr2.indexOf(arr1[i]) === -1 && total.indexOf(arr1[i]) === -1) { //checks if the number is in arr2 and the final array
        total.push(arr1[i]); //if it is in neither, then the number is pushed to the final array
      }
    }

    for (var j = 0; j < arr2.length; j++) { //for loop to cycle through the second array, repeating the same process
      if (arr1.indexOf(arr2[j]) === -1 && total.indexOf(arr2[j]) === -1) {
        total.push(arr2[j]);
      }
    }

    return total; //returns the symmetric difference array between two arrays

  }

  return argus.reduce(symDiff); //returns the array between all arrays by reducing all arrays

}


sym([1, 2, 3], [5, 2, 1, 4]);
