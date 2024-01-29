#!/usr/bin/env node


class Random{
	constructor(...argv) {
		this.argv = argv;
	}
	say() {
		console.log('발표자 :' + this.argv[0][Math.floor(Math.random()*this.argv[0].length)]);
	}

}

class RandomPrint extends Random {
	constructor(argv = process.argv){
		super(argv.slice(2));
	}
}

var random = new RandomPrint();
if(random.argv[0].length<2) {
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
