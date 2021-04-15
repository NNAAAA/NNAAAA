void LinearEquation(int a ,int b);

void QuadraticEquation(int a,int b,int c);

bool isPrime(int a);

int countPrime(int a,int b);

int sumDigits(int n);

int countInteger(int N,int k);


double angle(int a,int b,int c);
bool checkT(double a,double b,double c);
double maxAngle(double a,double b,double c);
bool checkEquilateral(double a,double b,double c);
bool checkIsosceles(double a,double b,double c);
void Triangle(double a,double b,double c);



#include <iostream>
#include <math.h>
#include <iomanip>

using namespace std;

void LinearEquation(int a ,int b){
    if (a==0&&b!=0){
        cout<<"pt vo nghiem";
    }
    else if (a==0&&b==0)
        cout<<"pt co vo so nghiem";
    else
        cout<< -b*1.0/a;
}

void QuadraticEquation(int a,int b,int c){
    if (a==0){
        LinearEquation(b,c);
    }
    else{
        double delta=pow(b,2)-4*a*c;
        if (delta==0)
            cout<<"pt co nghiem kep:"<<-b*1.0/(2*a);
        else if (delta<0)
            cout<<"pt vo nghiem";
        else{
            cout<<"pt co 2 nghiem pb:"<<endl;
            cout<<"x1 = "<<(-b+sqrt(delta))/(2*a)<<endl;
            cout<<"x1 = "<<(-b-sqrt(delta))/(2*a);
        }
    }
}

bool isPrime(int a){
    if (a<2)
        return false;
    for (int i=2;i<sqrt(a);++i){
        if (a%i==2)
            return false;
    }
    return true;
}

int countPrime(int a,int b){
    int count=0;
    for (int i=a;i<=b;++i){
        if (isPrime)
            count++;
    }
    return count;
}

int sumDigits(int n){
    int sumDigits=0;
    while (n>=1){
        sumDigits+=n%10;
        n/=10;
    }
    return sumDigits;
}

int countInteger(int N,int k){
    int count=0;
    for (int i=0;i<N;++i){
        if (k%i==0)
            count++;
    }
    return count;
}



double angle(int a,int b,int c){
    return acos((pow(a,2)+pow(b,2)-pow(c,2))/(2*a*b))/acos(-1)*180;
}
bool checkT(double a,double b,double c){
    return (a+b>=c) ? true : false;
}
double maxAngle(double a,double b,double c){
    double max=a;
    if (max<b) max=b;
    if (max<c) max=c;
    return max;
}
bool checkEquilateral(double a,double b,double c){
    return (a==b&&a==c) ? true : false;
}
bool checkIsosceles(double a,double b,double c){
    return (a==b||b==c||a==c) ? true : false;
}
void Triangle(double a,double b,double c){
    if (checkT(a,b,c)&&checkT(b,c,a)&&checkT(a,c,b)){
        double angleA=angle(b,c,a);  
        double angleB=angle(a,c,b);
        double angleC=angle(b,a,c);
        cout<<angleA<<" "<<angleB<<" "<<angleC<<endl;
        double max=maxAngle(angleA,angleB,angleC);
        if (checkEquilateral(a,b,c))
            cout<<"tam giac deu";
        else if (checkIsosceles(a,b,c)){
            if (max==90)
                cout<<"tam giac vuong can";
            else cout<<"tam giac can";
        }
        else if (max==90)
            cout<<"tam giac vuong";
        else if (max>90)
            cout<<"tam giac tu";
        else 
            cout<<"tam giac nhon";
    }
    else   
        cout<<"khong phai tam giac";
}