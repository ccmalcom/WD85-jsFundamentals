//! the splice method changes the contents of an array by removing or replacing elements and/or adding new elements in its place

const months = ['Jan', 'March', 'April', 'June'];

                //1
months.splice(1, 0, "Feb")
//this will put Feb at index 1(the second position) of the array

console.log(months);
            //2
months.splice(4, 1, "May");
console.log(months);
//3
months.splice(5, 0, "June", 'July', 'Aug');

console.log(months);

/* 
!1 => The three parameters in the splice method are(in order)
    -The index of the array that will be affected
    -The number of elements that will be removed (0 if none will be removed)
    -The elements to add to the array, starting at the index specified

!2 => This is saying that we will target index 4, remove one element("June") and then replae it with "may"
!3 => This is showing that you can add multiple elements to the array
*/