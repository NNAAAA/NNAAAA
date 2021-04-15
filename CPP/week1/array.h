#include <iostream>
#include <cstdio>
#include <time.h>
using namespace std;

class Array {
    public:
        void input2DArray(int arr[][100],int &m,int &n){
            srand(time(0));
            cout<<"nhap so dong ,so cot";
            cin>>m;
            cin>>n;
            for (int i=0;i<m;++i){
                for (int j=0;j<n;++j){
                    arr[i][j]=rand();
                }
            }

        }
        void print2DArray(int *arr[],int m,int n){
            for (int i=0;i<m;++i){
                for (int j=0;j<n;++j){
                    cout<<arr[i][j]<<" ";
                }
                cout<<endl;
            }
        }
        int *rotate2DArray(int arr[][100],int m,int n){
            int **clone=new int*[m];
            for(int i = 0; i<m; i++)
                clone[i] = new int[n];

            for (int i=0;i<m;++i){
                for (int j=0;j<n;++j){
                    clone[j][i]=arr[m-1-i][j];
                }
            }
            for (int i=0;i<n;++i){
                for (int j=0;j<m;++j){
                    cout<<clone[i][j]<<" ";
                }
                cout<<endl;
            }
            return *clone;
        }
};
