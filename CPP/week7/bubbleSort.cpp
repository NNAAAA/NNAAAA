#include <iostream>
using namespace std;

int bubbleSort(int *a,int n){
    for (int i=0;i<n-1;++i){
        for (int j=0;j<n-i-1;++j){
            if (a[j]>a[j+1]){
                int temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
}

int main()
{
    int a[5]={7,4,4,2,9};
    bubbleSort(a,5);
    for (int i=0;i<5;++i){
        cout<<a[i]<<" ";
    }  
    
    system("pause");
    return 0;
}
