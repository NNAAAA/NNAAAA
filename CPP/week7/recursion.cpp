#include <iostream>
using namespace std;

int recursion(int x){
    if (x==1)
        return 1;

    return x*recursion(x-1);
}

int GCD(int a, int b){
    if (b==0)
        return a;
    return (b%a,a);   
}

void addAtEnd(node *&head,int x){
    if (head==NULL){
        node *temp=new node;
        temp->next=NULL;
        temp->data=x;
        head->next=temp;
    }
    if (head->next==NULL){
        node *temp=new node;
        temp->next=NULL;
        temp->data=x;
        head->next=temp; 
    }
    return addAtEnd(head->next,x);asjkjkiiui
}

int main()
{
    for (int i=0;i<1000;++i){
        cout<<i<<endl;
    }
    
    system("pause");
    return 0;
}






