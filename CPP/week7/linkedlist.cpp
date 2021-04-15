#include <iostream>
using namespace std;

struct NODE
{
    int key;
    NODE *pNext;
    NODE *pPre;
};

struct List
{
    NODE *pHead;
    NODE *pTail;
};

NODE *createNode(int data)
{
    NODE *newnode = new NODE;
    newnode->key = data;
    newnode->pNext = NULL;
    newnode->pPre = NULL;
    return newnode;
};

bool addHead(List &l, int data)
{
    NODE *node = createNode(data);
    node->pNext = l.pHead;
    if (l.pHead != NULL)
    {
        l.pHead->pPre = node;
    }
    l.pHead = node;
    return 1;
}

void removeHead(List &l)
{
    NODE *pCur = l.pHead;
    if (l.pHead)
    {
        l.pHead = l.pHead->pNext;
        pCur->pNext = NULL;
        delete pCur;
        if (l.pHead)
            l.pHead->pPre = NULL;
    }
}

void reverseList(List &L)
{
    NODE *pCur = L.pHead;
    NODE *tempHead=L.pHead;

    while (L.pHead != L.pTail)
    {
        L.pTail->pNext = pCur;
        L.pHead = pCur->pNext;
        pCur->pNext = NULL;
        pCur = L.pHead;
    }
    L.pHead = tempHead;
}

int main()
{
    List l;
    l.pHead = NULL;
    addHead(l, 5);
    l.pTail = l.pHead;
    addHead(l, 4);
    addHead(l, 3);
    addHead(l, 2);
    addHead(l, 1);
    NODE *pCur = l.pHead;
    while (pCur != NULL)
    {
        cout << pCur->key << endl;
        pCur = pCur->pNext;
    }
    cout<<endl<<endl;
    reverseList(l);
    pCur=l.pHead;
    while (pCur != NULL)
    {
        cout << pCur->key << endl;
        pCur = pCur->pNext;
    }
    system("pause");
    return 0;
}
