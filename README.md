Algorithm Questions
==

Questions and Answers for algorithm practice questions.

## Array

### Binary Search

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/array/BinarySearch.js)

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

### Contains Duplicate
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

#### Example 1:
```
Input: [1,2,3,1]
Output: true
```

#### Example 2:
```
Input: [1,2,3,4]
Output: false
```

#### Example 3:
```
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/array/ContainsDuplicate.js)

## Binary

### Sum of Two Integers
Calculate the sum of two integers _a_ and _b_, but you are **not allowed** to use the operator `+` and `-`.

#### Example:
Given _a_ = 1 and _b_ = 2, return 3.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/binary/GetSum.js)

### Number of 1 Bits
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

#### Example 1:
```
Input: 11
Output: 3
Explanation: Integer 11 has binary representation 00000000000000000000000000001011 
```

#### Example 2:
```
Input: 128
Output: 1
Explanation: Integer 128 has binary representation 00000000000000000000000010000000
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/binary/HammingWeight.js)


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

### Coin Change
You are given coins of different denominations and a total amount of money _amount_. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

#### Example 1:
```
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
```

#### Example 2:
```
Input: coins = [2], amount = 3
Output: -1
```

#### Note:
You may assume that you have an infinite number of each kind of coin.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/dynamic_programming/CoinChange.js)

### Longest Increasing Subsequence
Given an unsorted array of integers, find the length of longest increasing subsequence.

#### Example:
```
Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/dynamic_programming/LengthOfLIS.js)

## Graph

### Clone Graph
Clone an undirected graph. Each node in the graph contains a `label` and a list of its `neighbors`.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/graph/CloneGraph.js)

## Heap

### Merge K Sorted Lists
Merge *k* sorted linked lists and return it as one sorted list.

#### Example:
```
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/heap/MergeKLists.js)

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

[Bubble Sort](https://github.com/roromusic/Algorithms/blob/master/answers/sorting/BubbleSort.js)

[Insertion Sort](https://github.com/roromusic/Algorithms/blob/master/answers/sorting/InsertionSort.js)

[Heap Sort](https://github.com/roromusic/Algorithms/blob/master/answers/sorting/HeapSort.js)

[Counting Sort](https://github.com/roromusic/Algorithms/blob/master/answers/sorting/CountingSort.js)

## String

### Longest Substring Without Repeating Characters
Given a string, find the length of the **longest substring** without repeating characters.

#### Examples:
Given `"abcabcbb"`, the answer is `"abc"`, which the length is 3.

Given `"bbbbb"`, the answer is `"b"`, with the length of 1.

Given `"pwwkew"`, the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/string/LongestSubstring.js)

### Longest Repeating Character Replacement
Given a string that consists of only uppercase English letters, you can replace any letter in the string with another letter at most _k_ times. Find the length of a longest substring containing all repeating letters you can get after performing the above operations.

#### Example 1:
```
Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.
```

#### Example 2:
```
Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/string/CharacterReplacement.js)

## Tree

### Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

#### Example:
Given binary tree `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
```
return its depth = 3.

[Iterative Solution](https://github.com/roromusic/Algorithms/blob/master/answers/tree/MaxDepthIterative.js)

[Recursive Solution](https://github.com/roromusic/Algorithms/blob/master/answers/tree/MaxDepthRecursive.js)


### Same Tree
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

#### Example 1:
```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```

#### Example 2:
```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```

#### Example 3:
```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/tree/IsSameTree.js)

## Trie

### Implement Trie
Implement a trie with `insert`, `search`, and `startsWith` methods.

#### Example:
```
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
```

#### Note:
You may assume that all inputs are consist of lowercase letters `a-z`.
All inputs are guaranteed to be non-empty strings.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/trie/Trie.js)
