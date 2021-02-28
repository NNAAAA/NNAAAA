#include <iostream>
#include <fstream>
using namespace std;

// void push(int *arr,int &length,int x){
//   length++;
//   int *clone=new int[length];
//   for (int i=0;i<length;++i){
//     clone[i]=arr[i];
//   }
//   delete[] arr;
//   clone[length-1]=x;
//   arr=clone;
  
// }

void loadFile(ifstream &f,int *arr,int &length){
  while(!f.eof()){
    f>>arr[length];
    length++;
  }
  length--;
  f.close();
}



void saveFile(ofstream &f,int *arr,int &length){
  for (int i=0;i<length-1;++i){
    
    f<<arr[i]<<endl;
  }
  f.close();
}



void require(int arr[1000]){
  int currentIndex=0;
  int currentNumb=3;
  int length=1;
  while(currentIndex<1000){
    // if (currentNumb%3==0||currentNumb%5==0||currentNumb%7==0){
    //   int clone=currentNumb,i=3;
    //   while(i<=7){
    //     if (clone%i==0){
    //       clone/=i;
    //     }
    //     else
    //       i+=2;
    //   }
    //   if (clone==1){
    //     cout<<currentIndex+1<<":"<<currentNumb<<endl;
    //     arr[currentIndex]=currentNumb;
    //     currentIndex++;
    //   }
    // }
    // currentNumb++;
    int *clone=new int[length];
    if (clone[0]==7)
      length++;

    for (int i=0;i<length;++i){
      clone[i]=3;
    }
    currentIndex++;

    int currentPos=length-1;
    for (int i=0;i<length;++i){
      if (clone[currentPos]==7)
        currentPos++;
      for (int j=currentPos;i<length;++j){
        while()
      }
    }
  }
}

int main()
{
  ifstream f;
  int length=0;
  int *arr=new int[10];
  f.open("./text-folder/input.txt");
  
  if (!f.is_open())
    cout<<"khong mo duoc file";
  else {
    loadFile(f,arr,length);
  }


  int arrRequire[1000];
  require(arrRequire);



  ofstream o;
  o.open("./text-folder/output.txt");
  if (!o.is_open())
    cout<<"khong mo duoc file";
  else {
    saveFile(o,arr,length);
  }
  system("pause");
  return 0;
}
