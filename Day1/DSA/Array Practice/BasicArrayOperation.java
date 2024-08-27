// package ARRAY IMP CODES;

import java.util.Arrays;

public class BasicArrayOperation {
    void swap(int[] arr, int index1, int index2){
        int temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    int maxElement(int[] arr){
        int maxVal = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] > maxVal){
                maxVal = arr[i];
            }
        }
        return maxVal;
    }

    int minElement(int[] arr){
        int minVal = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] < minVal){
                minVal = arr[i];
            }
        }
        return minVal;
    }
    void reverse(int[] arr){
        int start = 0 ; 
        int end = arr.length-1;
        while(start<end){
            swap(arr, start, end);
            start++;
            end--;
        }
    }
    public static void main(String[] args) {
        int[] arr = {10,20,30,40};
        BasicArrayOperation obj = new BasicArrayOperation();
        obj.swap(arr, 0, 1);
        System.out.println(Arrays.toString(arr));
        System.out.println( obj.maxElement(arr));
        obj.swap(arr, 0, 1);
        obj.reverse(arr);
        System.out.println(Arrays.toString(arr));
    }
}
