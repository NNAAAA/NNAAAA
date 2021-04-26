#include <iostream>
using namespace std;
#include <string>
#include <sstream>
#include <fstream>
int n = 0;
void print(string s) {
	for (int i = 0; i < s.length() - 1; ++i) {
		cout << s[i];
	}
	cout << endl;
}
bool ascending(string s) {
	int prePos = -1, curPos = s.find(" ",prePos+2) , nextPos=s.find(" ",curPos+1);
	while (nextPos != -1) {
		string a, b;
		for (int i = prePos+1; i < curPos; ++i) 
			a.push_back(s[i]);
		for (int i = curPos+1; i < nextPos; ++i)
			b.push_back(s[i]);
		prePos = curPos;
		curPos = nextPos;
		nextPos = s.find(" ", nextPos+1);
		if (stoi(a) > stoi(b))
			return false;
	}
	if (s.find(" ") == s.length()-1)
		return false;
	return true;
}

void tich(int x,string s="") {
	if (x==1 && ascending(s))
		print(s);
	else {
		for (int i = 1; i <= x; ++i) {
			n++;
			if (x % i == 0 && i != 1) {
				tich(x / i, s + to_string(i) + " ");
			}
		}
	}
}
int main() {
	cout << "nhap so:";
	int x;
	cin >> x;
	cout << "tat ca cap so:" << endl;
	tich(x);
	cout << "\nso lan chay:" << n;
}
