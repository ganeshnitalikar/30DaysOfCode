// WAP TO TAKE SIZE OF ARRAY FROM USER AND TAKE INTEGER ELEMENTS FROM USER AND PRINT SUM OF ELEMENTS 

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class SumOfArrayElements {
    void sumOfOdd(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0) {
                sum = sum + arr[i];
            }

        }
        System.out.println("Sum of Odd Elements Of Array is : " + sum);
    }

    void sumOfEven(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                sum = sum + arr[i];
            }

        }
        System.out.println("Sum of Even Elements Of Array is : " + sum);
    }

    void sum(int[] arr) {
        int sum = 0;
        for (int x : arr) {
            sum = sum + x;
        }
        System.out.println("Sum of Elements Of Array is : " + sum);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // take size of array from user
        System.out.println("Enter Size of Array");
        int size = Integer.parseInt(br.readLine());
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            System.out.println("Enter " + (i + 1) + " Element");
            arr[i] = Integer.parseInt(br.readLine());
        }
        SumOfArrayElements obj = new SumOfArrayElements();
        obj.sum(arr);
        obj.sumOfEven(arr);
        obj.sumOfOdd(arr);

    }
}