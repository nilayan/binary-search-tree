# binary-search-tree
Binary search tree implementation using recursion for insertion, search, and traversal.

## Sample run
Starting with root value 4, then inserting values 2, 1, 5, 3

```
New BST 4
Insert 2 <= 4 Go LEFT
Insert 4.left is 2
New BST 2
Insert 1 <= 4 Go LEFT
Insert 4.left subtree
Insert 1 <= 2 Go LEFT
Insert 2.left is 1
New BST 1
Insert 5 > 4 Go RIGHT
Insert 4.right is 5
New BST 5
Insert 3 <= 4 Go LEFT
Insert 4.left subtree
Insert 3 > 2 Go RIGHT
Insert 2.right is 3
New BST 3
Search 5 > 4 Go RIGHT
Search 4.right subtree
Search Found value 5
In-order traversal 1 [leaf]
In-order traversal 2
In-order traversal 3 [leaf]
In-order traversal 4
In-order traversal 5 [leaf]
Pre-order traversal 4
Pre-order traversal 2
Pre-order traversal 1 [leaf]
Pre-order traversal 3 [leaf]
Pre-order traversal 5 [leaf]
Post-order traversal 1 [leaf]
Post-order traversal 3 [leaf]
Post-order traversal 2
Post-order traversal 5 [leaf]
Post-order traversal 4
```
