/**
 * Created by Rudik on 29.02.2016.
 */

function deepSearch(arr, n){

    for (var i=0; i<arr.length; i++) {

        if (Array.isArray(arr[i])) {
            return deepSearch(arr[i], n);
        }

        else if (arr[i]==n) {
            return true;
        }

    }

    return false;
}
console.log(deepSearch([1, 2, [1, [7,5]], 4], 5));
