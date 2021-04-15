#include <iostream>
#include <wchar.h>
#include <clocale>
using namespace std;
const wchar_t heart[]=L"\u2665";
int main()
{
    
    setlocale(LC_ALL,"");
    wcout<<heart<<L'\n';

    
    system("pause");
    return 0;
}
