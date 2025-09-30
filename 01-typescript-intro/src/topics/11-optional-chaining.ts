export interface Passenger{
    name:string;
    children?:string[];


}

const passenger1: Passenger = {
    name: 'Luis Mario',

}

const passenger2: Passenger = {
    name: 'Suzanne',
    children: ['Natalia', 'Gabriel']
    
}

const printChildren = ( passenger: Passenger ) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log("El pasajero " + passenger.name,"Tiene: " + howManyChildren + " Hijos" );
}

printChildren( passenger2 );