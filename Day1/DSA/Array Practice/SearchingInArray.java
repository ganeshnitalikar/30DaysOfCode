import java.util.Arrays;

public class SearchingInArray {
    static int[] searchIn2DArray(int[][] arr , int target){
            for(int row = 0 ; row<arr.length ; row++){
                for(int col = 0 ; col< arr[0].length ; col++){
                    if(arr[row][col]==target){
                        return new int[]{row,col};
                    }
                }
            }
            return new int[]{-1,1};
    }
    static int binarySearch(int[] arr, int target){
        int start = 0 ;
        int end = arr.length -1;
        
       while(start<=end) {
        int mid = (start+end)/2;
        // int mid = start + (start - end)/2;

        if(target <arr[mid]){
            end = mid-1 ;
        }else if(target > arr[mid]){
            start = mid + 1;
        }else{
            return mid;
        }}
        return -1;
        
    }
    int linearSearch(int[] arr, int target){
        if(arr.length == 0){
            return -1;
        }
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] == target){
                return i;
            }
        }
        return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,50,60};
        SearchingInArray obj = new SearchingInArray();
        System.out.println("Element found at " + obj.linearSearch(arr, 40) + " Index");
        System.out.println("Element found at " + binarySearch(arr, 40) + " Index");
        

        int[][] twoDArray = {{23,4,1},
    {18,12,3,9},{78,99,34,56},{18,12}};

    System.out.println(Arrays.toString(twoDArray));
    System.out.println(Arrays.toString(searchIn2DArray(twoDArray, 4)));

    }
}
