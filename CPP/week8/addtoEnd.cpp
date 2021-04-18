#include <iostream>
using namespace std;

struct node {
    int data;
    node* pNext;
};
struct LinkedList {
    node* pHead;
};

void addToEnd(node* &head, int data) {
    if (head) {
        addToEnd(head->pNext, data);
    }
    else {
        head = new node;
        head->data = data;
        head->pNext = NULL;
    }
    
}


int main()
{
    node* n1 = new node, * n2 = new node, * n3 = new node;
    n1->data = 1;
    n1->pNext = n2;
    n2->data = 2;
    n2->pNext = n3;
    n3->data = 3;
    n3->pNext = NULL;
    addToEnd(n1,5);
    node* pCur = n1;
    while (pCur) {
        cout << pCur->data << " ";
        pCur = pCur->pNext;
    }
    system("pause");
    return 0;
}
