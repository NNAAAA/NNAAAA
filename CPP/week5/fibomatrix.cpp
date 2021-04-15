#include <iostream>
using namespace std;

void savetoArr(int *&a,int n){
    for (int i=0;i<n;++i){
        *(a+i)=0;
    }
}

int main()
{
    cout<<"nhpa n,a,b:";
    int n,a,b;
    cin>>n>>a>>b;
    int **matrix=new int*[n];
    for (int i=0;i<n;++i){
        if (i==0){
            int number=a;
            matrix[i]=new int[number];
            savetoArr(matrix[i],number);
        }
        else if (i==1){
            int number=b;
            matrix[i]=new int[number];
            savetoArr(matrix[i],number);
        }
        else{
            int number=a+b;
            a=b;
            b=number;
            matrix[i]=new int[number];
            savetoArr(matrix[i],number);
        }
    }

    for (int i=0;i<n;++i){
        while (*matrix[i]==0){
            cout<<*matrix[i]<<" ";
            matrix[i]++;
        }
        cout<<endl;
    }
    system("pause");
    return 0;
}
