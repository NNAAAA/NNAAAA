#include <iostream>
using namespace std;

int funcA(int a){
    return a*a;
}

int funcB(int b,int(*c)(int)){
    int a=c(5);
    return b+a;
}

int main()
{
    int(*ptrFunc)(int)=funcA;
    int(*ptr)(int,int(*)(int))=funcB;
    cout<<ptr(4,ptrFunc);
    system("pause");
    return 0;
}
