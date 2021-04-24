#include <iostream>
using namespace std;

void tich(int x,string s,int i=2){
    if (i==12)
        cout<<s<<" ";
    else if (x%i==0){
        tich(x,s+char(x/i+'0'),i);

    }
    else if (x%i!=0){
        tich(x,s+char('x'),i+1);
    }
}

int main()
{
    tich(12," ");
    system("pause");
    return 0;
}
