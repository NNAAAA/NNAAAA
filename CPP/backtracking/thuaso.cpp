#include <iostream>
#include <string>
#include <cstring>
#include <string.h>
using namespace std;
int n = 0;
void print(string s) {
	for (int i = 0; i < s.length() - 1; ++i)
		cout << s[i] << "x";
	cout << s[s.length() - 1]<<" ";
}

bool full(string s,int max) {
	int numb=s[0] ? stoi(s) : 0;
	int	multiple = 1;
	for (int i = 0; i < s.length(); ++i) {
		multiple *= numb % 10;
		numb /= 10;
	}	
	return multiple == max ? true : false;
}

bool ascending(string s) {
	int numb = s[0] ? stoi(s) : 0;
	int* arr = new int[s.length()];
	for (int i = 0; i < s.length(); ++i) {
		arr[i] = numb % 10;
		numb /= 10;
	}
	for (int i = 0; i < s.length()-1; ++i) {
		if (arr[i] < arr[i+1])
			return false;
	}
	return true;
}

void tich(int x, string s,int max) {
	for (int i = 1; i <= x; ++i) {
		n++;
		if (x % i == 0&& i!=1) {
			tich(x / i, s + to_string(i),max);
		}
		if (i == x && full(s, max) && ascending(s))
			print(s);
	}
}
int main() {
	cout << "nhap so:";
	int x;
	cin >> x;
	cout << "tat ca cap so:" << endl;
	tich(x,"",x);
	cout << "\nso lan chay:" << n;
	system("pause");
}