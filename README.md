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

### Product of Array Except Self
Given an array `nums` of _n_ integers where _n_ > 1,  return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

#### Example:
```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/array/ProductExceptSelf.js)

### Maximum Subarray
Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

#### Example:
```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/array/MaxSubArray.js)

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

### Counting Bits
Given a non negative integer number _num_. For every numbers _i_ in the range `0 ≤ i ≤ num` calculate the number of 1's in their binary representation and return them as an array.

#### Example:
```
Input: 5
Output: [0,1,1,2,1,2]
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/binary/CountBits.js)

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


### Longest Common Subsequence
Given two sequences, find the length of longest subsequence present in both of them. Both the strings are of uppercase.

#### Example:
```
Input: x = "ABCDGH", y = "AEDFHR"
Output: 3
Explanation: LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/dynamic_programming/LCS.js)

### Word Break
Given a **non-empty** string _s_ and a dictionary _wordDict_ containing a list of **non-empty** words, determine if _s_ can be segmented into a space-separated sequence of one or more dictionary words.

**Note:**

- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.

#### Example 1:
```
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

#### Example 2:
```
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
```

#### Example 3:
```
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/dynamic_programming/WordBreak.js)

### Combination Sum
Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

#### Example: 
```
nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/dynamic_programming/CombinationSum.js)

## Graph

[Breadth First Search](https://github.com/roromusic/Algorithms/blob/master/answers/graph/breadthFirstSearch.js)

[Depth First Search](https://github.com/roromusic/Algorithms/blob/master/answers/graph/depthFirstSearch.js)

### Clone Graph
Clone an undirected graph. Each node in the graph contains a `label` and a list of its `neighbors`.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/graph/CloneGraph.js)

### Course Schedule
There are a total of _n_ courses you have to take, labeled from `0` to `n-1`.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: `[0,1]`

Given the total number of courses and a list of prerequisite **pairs**, is it possible for you to finish all courses?


#### Example 1:
```
Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
```

#### Example 2:
```
Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
```

**Note:**

1. The input prerequisites is a graph represented by **a list of edges**, not adjacency matrices.
2. You may assume that there are no duplicate edges in the input prerequisites.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/graph/CanFinish.js)

### Pacific Atlantic Water Flow

Given an `m x n` matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

#### Note:
The order of returned grid coordinates does not matter.
Both m and n are less than 150.

#### Example:
```
Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/graph/PacificAtlantic.js)

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

### Merge Intervals
Given a collection of intervals, merge all overlapping intervals.

#### Example 1:
```
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

#### Example 2:
```
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/interval/Merge.js)

## Linked List

### Reverse Linked List
Reverse a singly linked list.

#### Example:
```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/linked_list/ReverseList.js)

### Linked List Cycle
Given a linked list, determine if it has a cycle in it.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/linked_list/HasCycle.js)

### Merge Two Sorted Lists
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

#### Example: 
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/linked_list/MergeTwoLists.js)

## Math

### Power
Implement `power(x, n)`, which calculates x raised to the power n (xn).

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/math/Power.js)

### Sqrt(x)
`Implement int sqrt(int x).`

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

#### Example 1:
```
Input: 4
Output: 2
```

#### Example 2:
```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/math/MySqrt.js)

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

### Spiral Matrix
Given a matrix of _m_ x _n_ elements (m rows, n columns), return all elements of the matrix in spiral order.

#### Example 1:
```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
```

#### Example 2:
```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/matrix/SpiralMatrix.js)

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


### Minimum Window Substring
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

#### Example:
```
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
```
**Note:**
- If there is no such window in S that covers all characters in T, return the empty string `""`.
- If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/string/MinWindow.js)

### Valid Anagram
Given two strings _s_ and _t_ , write a function to determine if _t_ is an anagram of _s_.

#### Example 1:
```
Input: s = "anagram", t = "nagaram"
Output: true
```

#### Example 2:
```
Input: s = "rat", t = "car"
Output: false
```

**Note:**
You may assume the string contains only lowercase alphabets.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/string/IsAnagram.js)

### Group Anagrams
Given an array of strings, group anagrams together.

#### Example: 
```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

#### Note:
- All inputs will be in lowercase.
- The order of your output does not matter.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/string/GroupAnagrams.js)

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

### Invert Binary Tree
Invert a binary tree.

#### Example:
Input:

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

Output:

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1

```

[Iterative Solution](https://github.com/roromusic/Algorithms/blob/master/answers/tree/InvertTreeIterative.js)

[Recursive Solution](https://github.com/roromusic/Algorithms/blob/master/answers/tree/InvertTreeRecursive.js)

### Binary Tree Maximum Path Sum
Given a **non-empty** binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain **at least one node** and does not need to go through the root.

#### Example 1:
```
Input: [1,2,3]

       1
      / \
     2   3

Output: 6
```

#### Example 2:
```
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/tree/MaxPathSum.js)


### Binary Tree Level Order Traversal
Given a binary tree, return the _level order_ traversal of its nodes' values. (ie, from left to right, level by level).

#### Example:
Given binary tree `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
```
return its level order traversal as:
```
[
  [3],
  [9,20],
  [15,7]
]
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/tree/LevelOrder.js)


### Serialize and Deserialize Binary Tree
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

#### Example:
```
You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
```

[Serialize](https://github.com/roromusic/Algorithms/blob/master/answers/tree/Serialize.js)

[Deserialize](https://github.com/roromusic/Algorithms/blob/master/answers/tree/Deserialize.js)

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

### Add and Search Word
Design a data structure that supports the following two operations:

```
void addWord(word)
bool search(word)
```

search(word) can search a literal word or a regular expression string containing only letters `a-z` or `.`. A `.` means it can represent any one letter.

#### Example:
```
addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
```

#### Note:
You may assume that all words are consist of lowercase letters `a-z`.

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/trie/WordDictionary.js)