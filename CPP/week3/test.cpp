#include <iostream>
using namespace std;

class Date {
    public:
        int day,month,year;
        Date();
        Date(int a,int b,int c);
    public:
       void Add_Day(int a,int b,int c){
           cout<<a<<" "<<b<<" "<<c;
       };
       void Add_Month();
       void Add_Year();      
};

Date::Date(int a,int b,int c){
    day=a;
    month=b;
    year=c;
};

int main()
{
    Date toDay(8,3,2021);
    toDay.Add_Day(5,6,7);
    system("pause");
    return 0;
}
