/*Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
  */

import java.util.HashSet;

public class FindTheDuplicateNumber {
    public int findDuplicate(int[] nums) {

        //Appraoch 1 
        //problem is solved by contains duplicate solution 
        //all elements are added to set 
        //repeated element will not be added in set and hence add method will return false 
        //time complexity o(n)
        HashSet<Integer> set = new HashSet<>();

        for(int i : nums){
            if(!set.add(i)){ //if element is already present in set, add method returns false. 
                return i;
            }
        }
        return -1;
    }
}
