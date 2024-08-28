/* 
 * 
136. Single Number
Easy

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
 */

import java.util.Arrays;

public class SingleNumber {
    static int solution(int[] nums){
        //Brute force approach
        //each element is compared with every other element 
        //isTwice flag used to handle conditions
        //time complexity O(n^2)
        boolean isTwice = false;
        for(int i = 0 ;i<nums.length ; i++){
            isTwice = false;
            for(int j = 0 ; j< nums.length ;j++){
                if(isTwice) break;
                if(i != j ){
                    if(nums[i] == nums[j]){
                        isTwice = true;
                    }

                }
                if(!isTwice){
                    return nums[i];
                }
            }
        }
        return nums[nums.length- 1];


        //Approach 2 
        //sort the given array
        //compare adjacent elements if same increse i by 2, until i is less than second last element
        //time complexity O(nlogN)
        //      Arrays.sort(nums);
        //    int i = 0;
        //    while(i<nums.length-2){
        //     if(nums[i]==nums[i+1]){
        //         i = i + 2;
        //     }else{
        //         return nums[i];
        //     }
        //    }
        //    return nums[nums.length-1];
    }
}
