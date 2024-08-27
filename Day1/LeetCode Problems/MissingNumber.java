/*
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
 
 */

import java.util.Arrays;
import java.util.HashSet;

public class MissingNumber {
    
        public int missingNumber(int[] nums) {
            //Approach 1 
            //calculate the sum of the all elements in given array 
            //also calculate the sum of all numbers from 0 to the length of array 
            //difference between these two sums is the missing number 
            //missing number is replaced by 0 in given number so this method works, its time complexity  is O(n)
            // int expectedSum = 0;
            // int actualSum = 0;
    
            // for(int i = 0 ; i<=nums.length ; i++){
            //     expectedSum += i;
            // }
            // for(int i = 0 ; i<nums.length ; i++){
            //     actualSum += nums[i];
            // }
            // return expectedSum-actualSum;


            //Approach 2
            //put all the elements in hashset 
            //now the repeated element is not there i.e 0 is only one time 
            //now check whether the set contains the numbers from  range 0 to n(length of array). return the i which is absent 
            //O(n) time complexity
            // HashSet<Integer> set = new HashSet<>();

            // for (int i = 0; i < nums.length; i++) {
            //     set.add(nums[i]);
            // }

            // for(int i = 0; i<= nums.length ; i++){
            //     if(!set.contains(i)){
            //         return i;
            //     };
            // }

            //Approach 3 
            //sort the array using Arrays.sort
            //now just compare the index with nums[i].
            //0 to n-1 comparisons happen. if all the elements match corresponding index. then our missing number is at n(nums.length).
            //simple approach with O(n) time complexity

            Arrays.sort(nums);
            for (int i = 0; i < nums.length; i++) {
                if(nums[i] != i){
                    return i;
                }
            }
            return nums.length;
        }
    
}
