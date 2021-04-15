#include <iostream>
#include <fstream>
#include <string.h>
#include <string>
using namespace std;

class File{
    public:
        void calculate(){
            FILE *f=fopen("week1/input.txt","rt");
            int n;
            fscanf(f,"%d\n",&n);
            int *arr=new int[n];
            for (int i=1;i<=n;++i){
                int count=0;
                char s[100];
                char *ptr;
                fgets(s,100,f);

                ptr=strtok(s," ");
                count=stof(ptr);
                ptr=strtok(s," ");
                while(ptr!=NULL){ 
                    char sign;      
                    switch (*ptr){
                        case '+': 
                            sign='+';
                            break; 
                        case '-': 
                            sign='-';
                            break;
                        case '*': 
                            sign='*';
                            break;
                        case '/':
                            sign='/';
                            break;
                    }
                    ptr=strtok(NULL," ");
                    switch (sign){
                        case '+': 
                            count+=*ptr;
                            break; 
                        case '-': 
                            count-=*ptr;
                            break;
                        case '*': 
                            count*=*ptr;
                            break;
                        case '/':
                            count/=*ptr;
                            break;
                    }
                    ptr=strtok(NULL," ");
                }
                arr[i]=count;
            }
            
            fclose(f);
        }
    
};
