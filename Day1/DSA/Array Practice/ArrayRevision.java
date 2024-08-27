import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

class ArrayRevision{
    static void updateArray(int[] arr){
        System.out.println("Identity Hash Code of 0th element of arr in update method: " + System.identityHashCode(arr[0]));
        arr[0] = 10000;
    }

    public static void main(String args[]) throws IOException{
        BufferedReader br = new BufferedReader(new  InputStreamReader(System.in));
        //declcaration
        int[] arr1 = {10,20,30};
        int[] arr2 = new int[3];
        int[] arr4 = new int[]{1,2,3,4};
        int[] arr; // here arr is declared but not initialized. Hence we cannot use it unless it is initialized.
        //intializing 
        arr2[0] = 10;
        arr2[1] = 20;
        arr2[2] = 30;

        //.length property to check array length. array index starts from 0 so last element in array is at (array.length -1) index
        System.out.println("Length of arr1" + arr1.length);
        System.out.println("Length of arr1"+arr2.length);
        System.out.println("Length of arr1"+arr4.length);
        //System.out.println(arr.length);
        //initializing arr 
        arr = new int[]{10,20,30};
        // arr = new int[2];
        // arr2[0] = 10;
        // arr2[1] = 20;

        System.out.println(arr.length);

        //looping through array 
        for(int i = 0 ; i < arr1.length ; i++){
            System.out.print(arr1[i]);
        }
        //special for loop for array iterations 
        for(int x : arr1){
            System.out.print(x);
        }
        System.out.println();
        System.out.println("Identity Hash Code of 0th element of arr in main method: " + System.identityHashCode(arr[0]));
        updateArray(arr);
        System.out.println(arr[0]); // method updated the first element



        System.out.println("Integer Array" + arr1.getClass());
        String[] strArr = new String[]{"Ganesh", "Nitalikar"};
        System.out.println("String array" + strArr.getClass());
        boolean[] boolArr = {true , false ,false};
        System.out.println("Boolean Array"+ boolArr.getClass());

        //cloning array
        System.out.println(System.identityHashCode(boolArr));
        System.out.println(System.identityHashCode(boolArr.clone()));

        //multi-dimensional arrays 
        //2-d array 
        int twoDArray[][]  = new int[3][3];

        twoDArray[0][0] = 10;
        twoDArray[0][1] = 20;
        twoDArray[0][2] = 30;
        twoDArray[1][0] = 40;
        twoDArray[2][0] = 50;

        System.out.println(Arrays.toString(twoDArray)); //this returns the array of 
System.out.println(twoDArray[0][0]);

// int[][] jaggedArray = new int[4][];
int[][] jaggedArray = {{10,20,30}, {40,50}, {60}};
for (int i = 0; i < jaggedArray.length; i++) {
    for(int j = 0 ; j < jaggedArray[i].length ; j++){

        jaggedArray[i][j] = Integer.parseInt(br.readLine());
    }
}

    System.out.println(Arrays.toString(jaggedArray));



        /* 
         * Arrays are the linear datastructures which holds homogenous data.
         * arrays can store primitive type data such as int, float, boolean,etc
         * arrays can also used to store objects 
         * In java size of array in fixed. 
         * array is passed to method internally address of that array is passed and changes done by that method on that address also change original array.(Passing by reference)
         *multidimensional array is array of arrays 
         *  int[][] arr = new int[row size][column size];
         * jagged array is special type of 2d array where the size of coloumn can be different
         * e.g {1   2    3}
         *     {4   5}
         *     {6}
         * methods on array 
         * .length ------- property returns the length of array
         * .clone() ------- returns a copy of given array
         * .getClass() ------ returns the datatype class of array 
         */
    }

}