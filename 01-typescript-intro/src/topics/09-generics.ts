




export function whatsMyType<T>( argument: T ):T  {

    return argument;
}


const amIString = whatsMyType( 'Hola mundo' ); // string
const amINumber = whatsMyType( 100 ); // number
const amIArray = whatsMyType( [1,2,3,4,5] ); // number[]

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join(' - ') );