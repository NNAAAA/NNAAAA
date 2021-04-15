#include <iostream>
using namespace std;

void insertionSort(int A[10],int n){
    int temp,j;
    for (int i=1;i<n;++i){
        temp=A[i];
        j=i-1;
        while (A[j]>temp&&j>=0){
            A[j+1]=A[j];
            j--;
        }
        A[j+1]=temp;
    }
}



int main()
{
    int a[10]={6,8,4,6,2,5,4,6,1,6};
    insertionSort(a,10);
    for (int i=0;i<10;++i){
        cout<<a[i]<<" ";
    }
    
    system("pause");
    return 0;
}
