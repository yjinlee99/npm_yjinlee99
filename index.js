#!/usr/bin/env node


class Random{
	constructor(argv) {
		this.argv = argv;
	}
	say() {
		console.log('발표자 :' + this.argv[Math.floor(Math.random()*this.argv.length)]);
	}

}

class RandomPrint extends Random {
	constructor(argv){
		super(argv.slice(2));
	}
}

var random = new RandomPrint(process.argv);
if(random.argv.length<2) {
	console.log('팀원은 2명 이상 이여야 합니다');
	process.exit();
}

console.log(`
                                     :+@@@@@@@@@@@*:                                                
                                 %@@@:             .@@@%                                            
                              @@%                       %@@@@@@@@+                                  
                       #@@@@@@                            :@%    :@@-                               
                    #@@   @@                                        @@+                             
                  *@+   .@:                                           +@@.                          
                 @%                                           =@         %@@@:    .#@@@@-           
               @@                                               @+            -===.     .+#@@.      
             *@-                                      =@@@+      @:                          @@     
           =@#        -@                              %@@@@       @                           .@    
         +@*         *@       @@*                      @@@@       @-                           -@   
       :@#       *@@@@@@@:   @@@@#                                @@                            @   
      @%     .@@=        +@% @@@@@              *%               #@-@%                         @%   
     @:     @@             @@  =        @. @@*@@@               @@   .@@                      @@    
    @=    .@                @*                              .#@@        =@@+               +@@.     
    @                        @                 @@@*    .@@@@+               #@@@@-    -@@@@+        
    @.                      =@            .@% *@: .@@@%#@@                         ---              
    @%                      @:      .#%@@@@    @@    -:  =@#                                        
     @%                  :@@=+@@@@#==@  @%     @@@         @@.                                      
      *@+             *@@=   @@@@@@@@#        #@  %@@       .@-                                     
        .@@@@@%@@@@@@      @@       @         @             .@% @@                                  
                         :@.   ==  %@                      -@    @@                                 
                         @#    @   @@                            +@                                 
                         @=    %@  -@                      @     @%                                 
                         %%      @@@@@                  +@@%@%  @@                                  
                          @#         +@*           :@@@@.     +=                                    
                           %@*      .@@-@@@@@    ##@                                                
                              @@@@@@*      @@*   @@                                                 
                                             .*#+                                                   
                                                                 
` );


random.say();
