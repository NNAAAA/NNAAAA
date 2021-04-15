#include <iostream>
#include <stdlib.h>
#include <time.h>
using namespace std;

struct video
{
    char title[10];
    char category[10];
    int quantity;
};

struct node
{
    video data;
    node *next;
};

class List
{
private:
    node *head;
    node *tail;
    int size;

public:
    List()
    {
        this->head = NULL;
        this->tail = NULL;
        size = 0;
    }
    ~List()
    {
    }
    bool IsEmptyList()
    {
        return size == 0 ? true : false;
    }
    int GetListLength()
    {
        return size;
    }
    void AddItemToList(video item)
    {
        node *e = new node();
        e->data = item;
        if (this->IsEmptyList())
        {
            head = tail = e;
            size++;
        }
        else
        {
            e->next = head;
            head = e;
            size++;
        }
    }
    void InsertToList(int newpos, video item)
    {
        node *e = new node();
        e->data = item;
        node *cur = head;
        node *prev;
        int curpos = 0;
        while (curpos < newpos && cur)
        {
            prev = cur;
            cur = cur->next;
            curpos++;
        }
        prev->next = e;
        e->next = cur;
    }
    void RemoveFromList(int pos)
    {
        node *cur = head;
        node *prev;
        int curpos = 0;
        while (curpos < pos && cur)
        {
            prev = cur;
            cur = cur->next;
            curpos++;
        }
        prev->next = cur->next;
        delete cur;
    }
    void ClearList()
    {
        node *cur = head;
        node *prev;
        while (cur)
        {
            prev = cur;
            cur = cur->next;
            delete prev;
        }
        head = tail = NULL;
    }

    void printArr()
    {
        node *cur = head;
        int pos = 0;
        if (head == NULL && tail == NULL)
        {
            cout << "empty list\n";
            return;
        }

        while (cur)
        {
            cout << pos << ": " << cur->data.category << " " << cur->data.title << " " << cur->data.quantity << endl;
            cur = cur->next;
            pos++;
        }
    }
    video GetListEntry(int pos)
    {
        node *cur = head;
        int curIndex = 0;
        while (curIndex < pos)
        {
            cur = cur->next;
            curIndex++;
        }
        return cur->next->data;
    };
};
void randomVid(video x[10], int length)
{
    srand(time(NULL));
    for (int i = 0; i < length; ++i)
    {
        itoa(rand() % 255, x[i].title, 16);
        itoa(rand() % 255, x[i].category, 16);
        x[i].quantity = rand() % 100;
    }
}

void input(video &x)
{
    cin.ignore();
    cout << "nhap title:";
    cin.getline(x.title, 100);

    cout << "nhap category:";
    cin.getline(x.category, 100);

    cout << "nhap quantity:";
    cin >> x.quantity;
}
int main()
{

    //arr->InsertToList(2,vid);
    //arr->printArr();

    List *arr = new List();

    while (true)
    {
        video vid[100];
        video x;

        cout << "Can i help you\n";
        cout << "1: random video array and add to list\n";
        cout << "2: input 1 video and add to list\n";
        cout << "3: remove from list\n";
        cout << "4: clear list\n";
        cout << "5: print list\n";
        cout << "6: get node at pos\n";
        cout << "0: quit\n";
        int c;
        cin >> c;
        cout << endl;
        if (c == 0)
            break;
        if (c == 1)
        {
            int n;
            cout << "length:";
            cin >> n;
            randomVid(vid, n);
            for (int i = 0; i < n; ++i)
            {
                arr->AddItemToList(vid[i]);
            }
        }
        if (c == 2)
        {
            input(x);
            cout << "insert: 1\n";
            cout << "unshift: 2\n";
            int n;
            cin >> n;
            if (n == 1)
            {
                cout << "position:";
                int pos;
                cin >> pos;
                arr->InsertToList(pos, x);
            }
            if (n == 2)
            {
                arr->AddItemToList(x);
            }
        }
        if (c == 3)
        {
            cout << "position:";
            int pos;
            cin >> pos;
            arr->RemoveFromList(pos);
        }
        if (c == 4)
            arr->ClearList();
        if (c == 5)
        {
            arr->printArr();
        }
        if (c == 6)
        {
            video x = arr->GetListEntry(3);
            cout<<"nhap vi tri:";
            int x;
            cin>>x
            cout << x.category << " " << x.title << " " << x.quantity << endl;
        }

        cout << endl
             << endl;
    }
    system("pause");
    return 0;
}
