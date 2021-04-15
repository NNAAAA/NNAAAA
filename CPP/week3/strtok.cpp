#include <iostream>
#include <string.h>
using namespace std;

int main()
{
    char str[] = "- This, a sample string.";
    char * pch;
    pch = strtok(str, " ,.-");
    while (pch != NULL)
    {
    std::cout << pch << "\n";
    pch = strtok(NULL, " ,.-");
    }
    cout<<endl;
    

    system("pause");
    return 0;
}
