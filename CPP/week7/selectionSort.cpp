#include <iostream>
using namespace std;

void selectionSort(int a[],int n){
    for (int i=0;i<n-1;++i){
        int min=i;
        for (int j=i+1;j<n;++j){
            if (a[j]<a[min])
                min=j;
        }
        if (min!=i){
            int temp=a[min];
            a[min]=a[i];
            a[i]=temp;
        }
    }    
}

int main()
{
    int a[5]={7,4,4,2,9};
    selectionSort(a,5);
    for (int i=0;i<5;++i){
        cout<<a[i]<<" ";
    }
    
    system("pause");
    return 0;
}
