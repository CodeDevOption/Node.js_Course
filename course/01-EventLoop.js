const bar = ()=>{console.log('bar')}
const baz = ()=>{console.log('baz')}

const foo = ()=>{
    console.log('foo');
    setTimeout(bar,1000);
    baz();
}

foo();


// Call Stack 

/*

    foo  --> bar --> baz 


    after define setTime Out Function

    foo --> baz --> bar

*/



