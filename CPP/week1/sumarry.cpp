#include <iostream>
#include <fstream>
#include <string.h>
#include <string>
#include <stdlib.h>
using namespace std;

class File {
public:
    void summarry(int result[100]) {
        ifstream f("week1/input.txt");
        int n;
        f >> n;
        cout<<n<<endl;
        for (int i = 1; i <= n; ++i) {
            char s[100];
            char* ptr;
            float count = 0;
            f.getline(s,100);
            ptr = strtok(s," ");

            // while (ptr != NULL) {
            //     char* sign=new char;
            //     switch(* ptr){
            //         case '+':
            //             *sign = '+';
            //             break;
            //         case '-':
            //             *sign = '-';
            //             break;
            //         case '/':
            //             *sign = '/';
            //             break;
            //         case '*':
            //             *sign = '*';
            //             break;
            //     }
            //     ptr = strtok(NULL, " ");
            //     switch (*sign) {
            //         case '+':
            //             count+= stoi(ptr);
            //             break;
            //         case '-':
            //             count-= stoi(ptr);
            //             break;
            //         case '/':
            //             count/= stoi(ptr);
            //             break;
            //         case '*':
            //             count*= stoi(ptr);
            //             break;
            //     }
                
                
            // }
            cout << count << " ";
            cout<<endl;
        }

        f.close();
    }
};

int main() {
    File f;
    int result[10];
    f.summarry(result);
    system("pause");
    return 0;
}