#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <iostream>
#include <windows.h>
using namespace std;
int i=0;
void* func(void* arg)
{
    // detach the current thread
    // from the calling thread
    pthread_detach(pthread_self());
    while (true){
        Sleep(2000);
        printf("func\n");
    }
        
        pthread_exit(NULL);
    
  
    // exit the current thread
}

void* hello(void* arg)
{
    // detach the current thread
    // from the calling thread
    pthread_detach(pthread_self());
    while (true){
        ++i;
        Sleep(1000);
        cout<<"hello "<<i<<endl;
        if (i>10)
        pthread_exit(NULL);
    }
    
 
    // exit the current thread
}
  
void fun()
{
    pthread_t ptid,thread2;

  
    // Creating a new thread
    pthread_create(&ptid, NULL, &func, NULL);
    pthread_create(&thread2, NULL, &hello, NULL);
    
    pthread_join(ptid,NULL);
    pthread_join(thread2,NULL);
  
    // The following line terminates
    // the thread manually
    // pthread_cancel(ptid);
  
    // Compare the two threads created
    

}
  
// Driver code
int main()
{
    fun();

    cout<<"end";
    system("pause");
    return 0;
}