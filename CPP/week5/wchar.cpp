#include <iostream>
#include <stdlib.h>
using namespace std;
int main()
{
	int size = 3;
	// cấp phát động và khởi tạo mảng 3 phần tử
	int *array = new int[size]{ 3, 5, 7 };

	int newSize = 6;
	// cấp phát động mảng mới 6 phần tử
	int *resize = new int[newSize];

	// sao chép phần tử
	for (int i = 0; i < newSize; i++)
	{
		resize[i] = i;
	}

	delete[] array; 
	array = resize; 
	size = newSize; 
  resize=NULL;

  for (int i = 0; i < size; i++)
	{
		cout<<array[i]<<" ";
	}

	system("pause");
	return 0;
}
