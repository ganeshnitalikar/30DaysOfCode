import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class PrintVowels {
    
    public static void main(String[] args)throws 
    IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        //take size from user 
        System.out.println("Enter Size of Array");
        int size  = Integer.parseInt(br.readLine());
        char[] charArr = new char[size];

        System.out.println("Enter Elements: ");

		for(int i = 0 ; i < charArr.length ; i++){
            charArr[i] = (char)br.read();
            br.skip(2);
	}
    //prints array
       System.out.println(Arrays.toString(charArr));

       for(char x : charArr){
        if(x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'A' || x =='E' || x == 'I' || x == 'O' || x == 'U'){
            System.out.println(x);
        }
       }
    }
}
