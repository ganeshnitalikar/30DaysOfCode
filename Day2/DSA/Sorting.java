package Day2.DSA;

import java.util.Arrays;

public class Sorting {
    static void bubbleSort(int arr[]){
        boolean swapped ;
        for(int i =0 ;i < arr.length ; i++){
            swapped = false;
            for (int j = 1; j < arr.length; j++) {
               if(arr[j] < arr[j-1]){
                int temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp ;
                swapped =true;
               }
            }
            if(!swapped){
                break;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {10,34,53,5,2,3,442,234};
        System.out.println(Arrays.toString(arr));
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
