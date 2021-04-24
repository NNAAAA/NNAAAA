#include <iostream>
using namespace std;
struct NODE {
	int key;
	NODE* p_next;
};
struct List {
	NODE* p_head;
	NODE* p_tail;
};
NODE* createNode(int data) {
	NODE* head = new NODE();
	head->key = data;
	head->p_next = NULL;
	return head;
}
List createList(NODE* p_node) {
	List L;
	L.p_head = p_node;
	L.p_tail = NULL;
	return L;
}
bool addHead(List& L, int data) {
	if (!(L.p_head)) {
		L.p_head = new NODE;
		if (L.p_head == NULL) {
			return false;
		}
		L.p_head->key = data;
		L.p_tail = L.p_head;
		L.p_head->p_next = NULL;
		return true;
	}
	NODE* p_curr = L.p_head;
	L.p_head = new NODE;
	L.p_head->key = data;
	L.p_head->p_next = p_curr;
	/*p_curr->key=data;
	p_curr->p_next=L.p_head;
	L.p_head=p_curr;*/
	return true;
}
bool addTail(List& L, int data) {
	NODE* temp = new NODE;
	if (temp == NULL) {
		return 0;
	}
	temp->key = data;
	temp->p_next = NULL;

	if (L.p_head==NULL) {
		L.p_head = temp;
		L.p_tail = temp;
	}
	L.p_tail->p_next = temp;
	L.p_tail = temp;
	return 1;
}
void removeHead(List & L) {
	if (L.p_head==NULL) {
		cout << "has empty.\n";
		return;
	}
	NODE* p_curr = L.p_head;
	L.p_head = L.p_head->p_next;
	delete p_curr;
}
void removeTail(List& L) {
	if (L.p_head==NULL) {
		cout << "has empty.\n";
		return;
	}
	NODE* p_curr = L.p_head;
	NODE* temp = p_curr->p_next;
	while (p_curr->p_next) {
		temp = p_curr;
		p_curr = p_curr->p_next;
	}
	//L.p_tail->key = temp->key;
	temp->p_next = NULL;
	L.p_tail = temp;
	delete p_curr;
	p_curr = NULL;
}
void removeAll(List& L) {
	if (L.p_head==NULL) {
		cout << "has empty.\n";
	}
	
	while (L.p_head) {
		NODE* p_curr = L.p_head;
		L.p_head=p_curr->p_next;
		delete p_curr;
	}
	delete L.p_head;
}
void removeBefore(List& L, int val) {
	if (L.p_head==NULL) {
		cout << "has empty.\n";
	}
	NODE* p_curr = L.p_head;
	if (L.p_head==L.p_tail || L.p_head->key==val) {
		cout << "Cant delete before the value.\n";
		return;
	}
	for (NODE* p_cur = L.p_head; p_curr != NULL; p_cur = p_cur->p_next) {
		if (p_cur->key != val) {
			cout << "cant find the number.\n";
			return;
		}
	}
	NODE* temp = p_curr ;
	if (p_curr->p_next->key == val) {
		removeHead(L);
		return;
	}
	while (p_curr!=NULL && p_curr->p_next->key != val) {
		temp = p_curr;
		p_curr = p_curr->p_next;
	}
	temp->p_next = p_curr->p_next;
	delete p_curr;
}
void removeAfter(List& L, int val) {
	if (L.p_head == NULL) {
		cout << "has empty.\n";
		return;
	}
	if (L.p_head == L.p_tail || L.p_tail->key==val) {
		cout << "Cant delete after the value.\n";
		return;
	}
	NODE* temp;
	NODE* p_curr = L.p_head;
	if (L.p_head->key == val) {
		temp = p_curr->p_next;
		p_curr->p_next = temp->p_next;
		delete temp;
		return;
	}
	do{
		temp = p_curr;
		p_curr = p_curr->p_next;
		if (p_curr == L.p_tail) {
			cout << "Cant find the number.\n";
			return;
		}
	} while (p_curr->key != val);
	
	temp = p_curr;
	p_curr = p_curr->p_next;
	temp->p_next = p_curr->p_next;
	delete p_curr;
}
void printList(List L) {
	if (L.p_head==NULL) {
		cout << "Empty.\n";
		return;
	}
	for (NODE* current = L.p_head;current != NULL;current = current->p_next) {
		cout << current->key << "->";
	}
	cout << endl;
}
bool addPos(List& L, int data, int pos) {
	NODE* node = new NODE;
	if (L.p_head == NULL ) {
		if (node == NULL || pos!=0 ) {
			return 0;
		}
		if (pos == 0) {
			addHead(L, data);
			return 1;
		}
	}
	node->key = data;
	node->p_next = NULL;
	NODE* p_curr = L.p_head;
	int l = 0;
	if (pos == 0) {
		addHead(L, data);
	}
	else {
		while (p_curr != NULL && l < pos - 1) {
			p_curr = p_curr->p_next;
			l++;
			if (pos == l) addTail(L, data);
		}
		node->p_next = p_curr->p_next;
		p_curr->p_next = node;
	}
	return 1;
}
void RemovePos(List& L, int pos) {
	if (!L.p_head) return ;
	if (pos == 0) {
		removeHead(L);
		return;
	}
	int l = 0;
	NODE* p_curr = L.p_head;
	NODE* temp = p_curr;
	while (p_curr != NULL && l < pos - 1) {
		temp = p_curr;
		p_curr = p_curr->p_next;
		l++;
		if (pos == l) removeTail(L);
	};
	temp = p_curr;
	p_curr = p_curr->p_next;
	temp->p_next = p_curr->p_next;
	delete p_curr;
}
void reverseList(List& lst) {
	if (lst.p_head == NULL) {
		return;
	}
	NODE* prev = NULL, * current = lst.p_head, * next;
	while (current != NULL) {
		next = current -> p_next;
		current->p_next = prev;
		prev = current;
		current = next;
	}
	lst.p_head = prev;
}

int main() {
	//NODE* head = createNode(1);
	List L;
	L.p_head = NULL;
	L.p_tail = NULL;
	
	addHead(L, 1);
	addHead(L, 2);
	addHead(L, 3);
	addTail(L, 4);
	addTail(L, 6);
	addTail(L, 6);
	printList(L);
	//reverseList(L);
	//printList(L);
	removeTail(L);
	//removeAll(L);
	//RemovePos(L, 3);
	printList(L);
	
	system("pause");
	return 0;
}