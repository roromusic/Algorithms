Algorithm Questions
==

Questions and Answers for algorithm practice questions.

## Array

### Two Sum
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the same element twice.

#### Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/array/TwoSum.js)

### Best Time to Buy and Sell Stock
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

#### Example 1:
```
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
```
#### Example 2:
```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/array/MaxProfit.js)

## Binary

### Sum of Two Integers
Calculate the sum of two integers _a_ and _b_, but you are **not allowed** to use the operator `+` and `-`.

#### Example:
Given _a_ = 1 and _b_ = 2, return 3.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/binary/GetSum.js)

## Dynamic Programming

### Climbing Stairs
You are climbing a stair case. It takes _n_ steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Note:** Given _n_ will be a positive integer.

#### Example 1:
```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

#### Example 2:
```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/dynamic_programming/ClimbStairs.js)

## Graph

### Clone Graph
Clone an undirected graph. Each node in the graph contains a `label` and a list of its `neighbors`.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/graph/CloneGraph.js)

## Interval

### Insert Interval
Given a set of _non-overlapping_ intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

#### Example 1:
```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

#### Example 2:
```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/interval/Insert.js)

## Linked List

### Reverse Linked List
Reverse a singly linked list.

#### Example:
```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/linked_list/ReverseList.js)

## Math

### Power
Implement `power(x, n)`, which calculates x raised to the power n (xn).

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/math/Power.js)

## Matrix

### Set Matrix Zeroes
Given a _m_ x _n_ matrix, if an element is 0, set its entire row and column to 0. Do it **in-place**.

#### Example 1:
```
Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

#### Example 2:
```
Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/matrix/SetZeroes.js)

## Recursion

### Subsets of Integers
Given a set of **distinct** integers, _nums_, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

#### Example:
```
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/recursion/Subsets.js)

## Sorting

[Selection Sort](https://github.com/roromusic/Algorithms/blob/master/answers/sorting/SelectionSort.js)

## String

### Longest Substring Without Repeating Characters
Given a string, find the length of the **longest substring** without repeating characters.

#### Examples:
Given `"abcabcbb"`, the answer is `"abc"`, which the length is 3.

Given `"bbbbb"`, the answer is `"b"`, with the length of 1.

Given `"pwwkew"`, the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/string/LongestSubstring.js)