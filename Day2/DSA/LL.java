package Day2.DSA;


public class LL {
   
 
    Node head;
    private int size;

    LL () {
        size = 0;
    }
    class Node{
        String data; 
        Node next;
        Node(String data){
            this.data = data;
            this.next = null;
            size++;
        }
        
    }

    public void printList() {
        Node currNode = head;
 
 
        while(currNode != null) {
            System.out.print(currNode.data+" -> ");
            currNode = currNode.next;
        }
 
 
        System.out.println("null");
    }
 

    public void addFirst(String data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }
 

    void deleteFirst(){

        if(head==null){
            System.out.println("List Is Empty");
            return;
        }
        head = head.next;
        size--;
    }

    void deleteLast(){
        if(head == null ){
            System.out.println("List Is Empty");
            return;
        }
        size--;
        if(head.next == null){
            head = null;
            return;
        }

        Node secondLastNode = head;
        Node lastNode = head.next;
        while(lastNode.next != null){
            lastNode = lastNode.next;
            secondLastNode =secondLastNode.next;
        }

        secondLastNode.next = null;
        
    }

    public void addLast(String data) {
        Node newNode = new Node(data);
 
 
        if(head == null) {
            head = newNode;
            return;
        }
 
 
        Node lastNode = head;
        while(lastNode.next != null) {
            lastNode = lastNode.next;
        }
 
 
        lastNode.next = newNode;
    }

    public int size(){
        return size;
    }
 

    

    public static void main(String[] args) {
        LL linkedList = new LL();
        linkedList.addFirst("name");
        linkedList.printList();
        linkedList.addLast("is");
        linkedList.printList();
        linkedList.addLast("Nitalikar");
        linkedList.printList();
        System.out.println(linkedList.size());
        linkedList.deleteLast();
        linkedList.printList();
        linkedList.deleteFirst();
    }
}
