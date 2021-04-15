#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <iomanip>
#include <string.h>
using namespace std;

int main()
{
    string s,name;
    string a,b,c;
    ifstream f("input.txt");
    while (!f.eof()){
        getline(f,s);
        stringstream ss(s);
        getline(ss,name,' ');
        getline(ss,a,' ');
        getline(ss,b,' ');
        getline(ss,c,' ');
        int tb=(0.2*stof(a)+0.6*stof(b)+0.2*stof(c));
        cout<<name<<" "<<fixed<<setprecision(1)<<endl;
    }
    f.close();
    cout<<endl<<endl;

    ifstream fi("input.txt");
    while (!fi.eof()){
        getline(f,s);
        stringstream ss(s);
        getline(ss,name,' ');
        getline(ss,a,' ');
        getline(ss,b,' ');
        getline(ss,c,' ');
        int tb=(0.2*stof(a)+0.6*stof(b)+0.2*stof(c));
        if (tb<5||stof(a)==0||stof(b)==0||stof(c)==0)
            cout<<name<<" "<<fixed<<setprecision(1)<<tb<<endl;
    }
    fi.close();

    system("pause");
    return 0;
}
