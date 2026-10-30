/*

Statement
You are given two nodes, p and q. The task is to return their lowest common ancestor (LCA). Both nodes have a reference to their parent node. The tree’s root is not provided; you must use the parent pointers to find the nodes’ common ancestor.

Note: The lowest common ancestor of two nodes, p and q, is the lowest node in the binary tree, with both p and q as descendants.

In a tree, a descendant of a node is any node reachable by following edges downward from that node, including the node itself.

Constraints:
 
The number of nodes in the tree is in the range [2,500]
All Node.data are unique.
p != q
Both p and q are present in the tree.

*/


// Definition for a binary tree node
// class EduTreeNode {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//         this.parent = null;
//     }
// }


function lowestCommonAncestor(p, q) {
    let ptr1 = p
    let ptr2 = q

    while(ptr1 !== ptr2) {
        if(ptr1.parent) {
            ptr1 = ptr1.parent
        } else {
            ptr1 = q
        }

        if(ptr2.parent) {
            ptr2 = ptr2.parent
        } else {
            ptr2 = p
        }
    }

    return ptr1
}
  