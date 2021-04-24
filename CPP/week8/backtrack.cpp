
#include<iostream>
using namespace std;
#include <stdlib.h>
int Bool[4] = { 0 };
int A[4];
void print(int n) {
    for (int i = 1; i <= n; i++){
        cout << char(A[i]+64) << " ";
    }
    cout << endl;
}
 
void hoanvi(int k,int n) {
    for (int i = 1; i <= n; i++) {
        if (!Bool[i]) {
            A[k ] = i;
            Bool[i] = 1;
            if (k == n)
                print(n);
            else
                hoanvi(k + 1,n);
            Bool[i] = 0;
        }
    }
}
 
int main() {
    int n;
    cout << "Mhap n: ";
    cin >> n;
    hoanvi(1,n);
    system("pause");
}