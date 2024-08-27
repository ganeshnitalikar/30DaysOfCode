// 217. Contains Duplicate
// Attempted
// Easy
// Topics
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

import java.util.HashSet;

public class ContainsDuplicate{
    public boolean containsDuplicate(int[] nums) {

        //brute force approach works for 70/76 time complexity 0(n^2)
        // for(int i = 0 ; i<nums.length ; i++){
        //     for(int j = i+1 ; j<nums.length ;j++){
        //         if(nums[i]==nums[j]){
        //             return true;
        //         }
        //     }
        // }
        // return false;

        /* OPTIMIZED APPROACH USING HASHSET. SET CONTAINS ONLY UNIQUE VALUES SO WHEN WE ADD ELEMENTS FROM ARRAY.IF CONTAINS DUPLICATE IT CANNOT BE ADDED IN ARRAY RETURN TRUE */

        HashSet<Integer> set = new HashSet<>();

        for(int i : nums){
            if(!set.add(i)){ //if element is already present in set, add method returns false. 
                return true;
            }
        }
        return false;

    }
    public static void main(String[] args) {
        
    }
}