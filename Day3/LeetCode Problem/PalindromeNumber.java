/*Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
  */

public class PalindromeNumber {

    static boolean palindrome(int x ){
        int temp = x;
        int rev = 0;

        while(temp!=0){
           rev = rev*10 + temp%10;
           temp = temp/10;
        }
        if(x<0){
            rev = -rev;
        }
        if(rev==x){
            return true;
        }else{
            return false;
        }

       

    }
    public static void main(String[] args) {
        
    }
}
