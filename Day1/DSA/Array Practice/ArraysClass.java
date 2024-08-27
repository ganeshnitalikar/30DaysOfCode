import java.lang.reflect.Array;
import java.util.Arrays;

public class ArraysClass {
   
    public static void main(String[] args) {
        int[] arr = {10,20,30};
        System.out.println(Arrays.toString(arr)); //returns array as formated string
        int[] newArr = {234,42342,23,23,4,1,34,43,5};
        Arrays.sort(newArr); //Sorts the specified array into ascending numerical order.
        System.out.println(Arrays.toString(newArr)); 
    }
}
