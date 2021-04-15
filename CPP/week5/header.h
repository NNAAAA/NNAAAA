#include <iostream>
#include <time.h>
#include <stdlib.h>
#include <climits>
using namespace std;

void swap(int *a,int *b);
int *sum(int *a,int *b);
void inputArray(int *&a,int &n);
void printArray(int *a,int &n);
int *findMax(int *arr,int n);
int *copyArray(int *arr,int n);
int countEvens(int *arr,int n);
int *genEvenSubArray(int *arr,int n,int *count);
int *findLargestTotalSubArray(int *arr,int n,int &sum,int &length);
int *findLongestAscendingSubArray(int *arr,int n,int &length);
void swapArray(int *&a,int *&b,int &na,int &nb);
int *concatenate2Arrays(int *a,int *b,int na,int nb);
int *merge2Arrays(int *a,int *b,int na,int nb,int &nc);
void generateMatrix(int **&A,int &length,int &width);
int **generateMatrix2(int *a,int*b,int na,int nb);
void swapRows(int** a, int length, int width, int row1, int row2);
void swapColumns(int** a, int length, int width, int col1, int col2);
int** transposeMatrix(int** a, int length, int width);
int** concatenate2MatricesH(int** a, int** b, int length, int width);
int** concatenate2MatricesV(int** a, int** b, int length, int width);
int** multiply2Matrices(int** a, int** b, int lengtha, int widtha, int lengthb, int widthb);
int** findSubmatrix(int** a, int length, int width, int &length_, int &width_);
int** findSubmatrix(int** a, int length, int width, int &length_, int &width_);

void swap(int *a,int *b){
    cout<<a<<" "<<b;
    *a=*a+*b;
    *b=*a-*b;
    *a=*a-*b;
}

int *sum(int *a,int *b){
    int *c=new int;
    *c=*a+*b;
    return c;

    // static int c;
    // c=*a+*b;
    // return &c;
}

void inputArray(int *&a,int &n){
    srand(time(NULL));
    cout<<"nhap n:";
    cin>>n;
    a=new int[n];
    for (int i=0;i<n;++i)
        a[i]=rand()%20;
}

void printArray(int *a,int &n){
    for (int i=0;i<n;++i)
        cout<<*(a+i)<<" ";
}

int *findMax(int *arr,int n){
    int *max=arr;
    for (int i=0;i<n;++i){
        if (*max<*(arr+i))
            *max=*(max+i);
    }
    return max;
}

int *copyArray(int *arr,int n){
    int *clone=new int[n];
    for (int i=0;i<n;++i)
        *(clone+i)=*(arr+i);
    return clone;
}

int countEvens(int *arr,int n){
    int count=0;
    for (int i=0;i<n;++i){
        if (*(arr+i)%2==0)
            count++;
    }
    return count;
}

int *genEvenSubArray(int *arr,int n,int *count){
    int *subArr=new int[*count];
    int subIndex=0;
    for (int i=0;i<n;++i){
        if (*(arr+i)%2==0){
            *(subArr+subIndex)=*(arr+i);
            subIndex++;
        }
    }
    return subArr;
}

int *findLargestTotalSubArray(int *arr,int n,int &sum,int &length){
    sum=INT_MIN;
    length=0;
    int sumTemp,maxIndex;
    for (int i=1;i<=n;++i){
        for (int j=0;j<n-i+1;++j){
            sumTemp=0;
            for (int k=j;k<j+i;++k){
                sumTemp+=arr[k];
            }
            if (sum<sumTemp){
                sum=sumTemp;
                maxIndex=j;
                length=i;
            }
        }
    }
    return arr+maxIndex;
}

int *findLongestAscendingSubArray(int *arr,int n,int &length){
    char n='♥';
    length=0;
    int curIndex=0,ascending;
    for (int i=1;i<=n;++i){
        for (int j=0;j<n-i+1;++j){
            ascending=0;
            for (int k=j;k<j+i-1;++k){
                if (arr[k]<=arr[k+1])
                    ascending++;
                else
                    break;
            }
            ascending++;
            if (length<=ascending&&ascending==i){
                length=ascending;
                curIndex=j;
            }
        }
    }
    return arr+curIndex;
}

void swapArray(int *&a,int *&b,int &na,int &nb){
    int *temp;
    temp=a;
    a=b;
    b=temp; 
    
    na=na+nb;
    nb=na-nb;
    na=na-nb;
}

int *concatenate2Arrays(int *a,int *b,int na,int nb){
    int *concate=new int [na+nb];
    for (int i=0;i<na;++i)
        *(concate+i)=*(a+i);
    for (int i=0;i<nb;++i)
        *(concate+i+na)=*(b+i);
    return concate;
}

int *merge2Arrays(int *a,int *b,int na,int nb,int &nc){
    int *merge=new int [nc];
    int curA=0,curB=0;
    for (int i=0;i<nb+na-1;++i){
        if (a[curA]<=b[curB]){
            merge[i]=a[curA];
            curA++;
        }
        else{
            merge[i]=b[curB];
            curB++;
        }
    }
    if (curA==na)
        merge[nc-1]=b[curB];
    else
        merge[nc-1]=a[curA];
    return merge;
}

// void generateMatrix(int **&A,int &length,int &width){
//     srand(time(NULL));
//     A=new int*[length];
//     for (int i=0;i<length;++i){
//         A[i]=new int[width];
//     }
//     for (int i=0;i<length;++i){
//         for (int j=0;j<width;++j){
//             A[i][j]=rand()%10;
//         }
//     }
// }


int **generateMatrix2(int *a,int*b,int na,int nb){
    int **c=new int*[na];
    for (int i=0;i<na;++i){
        c[i]=new int[nb];
    }
    for (int i=0;i<na;++i){
        for (int j=0;j<nb;++j){
            c[i][j]=a[i]*b[j];
        }
        
    }
    return c;
}

void swapRows(int** a, int length, int width, int row1, int row2){
    int *temp;
    temp=a[row1];
    a[row1]=a[row2];
    a[row2]=temp;
}

void swapColumns(int** a, int length, int width, int col1, int col2){
    for (int i=0; i<length; i++){
        int temp=a[i][col1];
        a[i][col1]=a[i][col2];
        a[i][col2]=temp;
    }
}

int** transposeMatrix(int** a, int length, int width){
    int **clone=new int*[width];
    for (int i=0;i<width;++i){
        clone[i]=new int[length];
    }
    for (int i=0;i<length;++i){
        for (int j=0;j<width;++j){
            clone[j][i]=a[i][j];
        }
    }

    return clone;
}

int** concatenate2MatricesH(int** a, int** b, int length, int width){
    int **clone=new int*[length+length];
    for (int i=0;i<length;++i){
        clone[i]=a[i];
    }
    for (int i=0;i<length;++i){
        clone[i+length]=b[i];
    }
    return clone;
}

int** concatenate2MatricesV(int** a, int** b, int length, int width){
    int **clone=new int*[length];
    for (int i=0;i<length;++i){
        clone[i]=new int[width*2];
        for (int j=0;j<width;++j)
            clone[i][j]=a[i][j];
        for (int j=0;j<width;++j)
            clone[i][j+width]=b[i][j];
    }   
    return clone;
}

int** findSubmatrix(int** a, int length, int width, int &length_, int &width_){
    int max=INT_MIN;
    int cdnX=0,cdnY=0;
    int sumTemp;
    for (int i=0;i<length-(length_-1);++i){
        for (int j=0;j<width-(width_-1);++j){
            sumTemp=0;
            for (int y=i;y<i+length_;++y){
                for (int x=j;x<j+width_;++x){
                    sumTemp+=a[y][x];
                }
            }
            if (max<sumTemp){
                max=sumTemp;
                cdnX=j;
                cdnY=i;
            }
        }
    }

    int **clone=new int*[length_];
    for (int i=0;i<length_;++i){
        clone[i]=new int[width_];
        for (int j=0;j<width_;++j){
            clone[i][j]=a[cdnY+i][cdnX+j];
        }
    }

    return clone;
}
