package Day2.DSA;

import java.util.LinkedList;

public class linkedListCollection {
    
    public static void main(String[] args){
        LinkedList<String> list = new LinkedList<>();
        list.addFirst("is");
        list.addFirst("a");
        System.out.println(list);
        list.addLast("bot");
        System.out.println(list);
        list.add("by default element is added at last ");
        System.out.println(list);
        System.out.println(list.size());

        for(int i = 0 ; i< list.size(); i++){
            System.out.print(list.get(i) + " -> ");
        }
        System.out.print("null");
System.out.println();
        list.removeFirst(); //first element removed 
        System.out.println(list);
        list.removeLast(); //last element removed
        System.out.println(list);

        list.remove(1);
        System.out.println(list);
    }
}
//mostly used function in LinkedList
//addFirst(data);
//addLast(data);
//add(data);
//size();
//get(i); // returns element present at ith index in list
//removeFirst();
//removeLast();
//remove(index); //removes element at particular index