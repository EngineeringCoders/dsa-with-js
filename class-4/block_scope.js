//variables declared with let keyword has block scope access 
function scope3(print){
    if(print){
        //block scoped variable
        let insideIf = '12';
    }
    console.log('The block {} scoped variable value is: ',insideIf);
}
scope3(true);//error