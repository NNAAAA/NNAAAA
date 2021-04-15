#include <iostream>
using namespace std;

struct node {
    int n;
    node *next;
};

struct LinkedList{
    node *head;
};

void Appear(LinkedList lst){
    if (!lst.head){
        cout<<"no";
        return;
    }
    else if (!lst.head->next){
        cout<<lst.head->n;
        return;
    }

    node *cur=lst.head;
    while (cur){
        node *after=cur->next;
        while (after){
            if (cur->n>after->n){
                int temp=cur->n;
                cur->n=after->n;
                after->n=temp;
            }
            after=after->next;
        }
        cur=cur->next;
    }
    

    cur=lst.head->next;
    node *before=lst.head;
    int count=0;
    if (before->n<cur->n){
        cout<<before->n<<" ";
        count++;
    }
    while (cur->next){
        if (before->n<cur->n&&cur->n<cur->next->n){
            cout<<cur->n<<" ";
            count++;
        }
        before=cur;
        cur=cur->next;
    }
    if (before->n<cur->n){
        cout<<cur->n;
        count++;
    }
}

int main()
{
    LinkedList lst;
    lst.head=new node;
    node *n1=new node,*n2=new node,*n3=new node,*n4=new node;
    lst.head->n=4;
    lst.head->next=NULL;

    n1->n=4;
    n1->next=n2;

    n2->n=3;
    n2->next=n3;

    n3->n=1;
    n3->next=n4;
    
    n4->n=4;
    n4->next=NULL;

    Appear(lst);

    system("pause");
    return 0;
}
