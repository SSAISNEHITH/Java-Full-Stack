
class Kill implements Runnable{
    public void run(){
        while (true) {
            System.out.println("one pace" );
            
        }
    }

}
public class Deaemon {
    public static void main(String[] args) throws InstantiationException, InterruptedException {
        Kill K=new Kill();  
        Thread T=new Thread(K);
        
        T.setDaemon(true);
        Thread.sleep(2000);
        T.start();
        System.out.println(T.isAlive());
        System.out.println(T.isDaemon());


        
    }
    
}