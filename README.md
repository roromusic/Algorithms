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

#Linked List

### Reverse Linked List
Reverse a singly linked list.

#### Example:
```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

[Solution](https://github.com/roromusic/Algorithms/blob/master/answers/linked_list/ReverseList.js)