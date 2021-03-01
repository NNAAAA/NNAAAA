#include <iostream>
#include <fstream>
using namespace std;


void createArr(int arrRequire[][30],int &currentIndex,int &length){
 	while(currentIndex<=1000){
		
	    int *clone=new int[length];
	      
	    //khoi tao day so va luu 3...3
	    for (int i=0;i<length;++i){
	      clone[i]=3;  
	    }
	    for (int i=0;i<length;++i){
    		arrRequire[currentIndex][i]=clone[i];
  		}
	    currentIndex++;
	
	
		//chay tu cuoi len
	    int currentPos=length-1;
		int currentNumb=3;
	    while(true){	    	
		    for (int j=length-1;j>=((currentPos>=0) ? currentPos : 0);--j){
		        while(clone[j]<7){
			        clone[j]+=2;
			        //luu clone vao mang chinh
			        for (int i=0;i<length;++i){
    					arrRequire[currentIndex][i]=clone[i];
  					}
			        currentIndex++; 
		        }
		    }
		    if (clone[0]==7){
		    	length++;
			    break;
			}

		
		    currentPos--;
		    //keo gia tri xuong 
			for (int j=((currentPos>=0) ? currentPos : 0);j<length;++j){
			    clone[j]=currentNumb+2;	
			}
			
			//luu clone vao mang chinh
			for (int i=0;i<length;++i){
    			arrRequire[currentIndex][i]=clone[i];
  			}
			currentIndex++; 		    		
    	} 
		delete [] clone;	
  	}
}

void printArr(int arrRequire[][30],int currentIndex){
  	for (int i=0;i<currentIndex;++i){
  		cout<<"index:"<<i<<"=";
	    for (int j=0;j<30;++j){
	        cout<<arrRequire[i][j]<<" ";
	    }
	    cout<<endl;
  	}
}

int main()
{
  	int arrRequire[10000][30];
  	int currentIndex=0;
  	int length=1;

	createArr(arrRequire,currentIndex,length);
	printArr(arrRequire,currentIndex);
  	
    system("pause");
    return 0;
}
