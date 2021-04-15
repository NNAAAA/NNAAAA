#include <iostream>
#include <cstring>
using namespace std;

struct String{
    void inputString(char c[100]){
        cout<<"nhap chuoi:";
        cin.getline(c,100);
    }
    void printString(char c[100]){
        cout<<c;
    }
    int countCapital(char c[100]){
        char *ptr;
        int count=0;
        ptr=strtok(c," ");
        
        while (ptr!=NULL){
            ptr=strtok(NULL," ");
            count++;
        }
        return count;
    }
    
};
