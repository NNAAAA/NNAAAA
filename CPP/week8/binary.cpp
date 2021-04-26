#include <iostream>
#include <string>
using namespace std;
void binary(int n,string s="") {
	if (n == 0)
		cout << s << " ";
	else {
		binary(n - 1, s + "1");
		binary(n - 1, s + "0");
	}
}

int main() {
	binary(3);
	system("pause");
	return 0;
}