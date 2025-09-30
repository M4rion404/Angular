import type { Product } from './06-function-destructuring';
import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 250.0
    },
    {
        description: 'iPad Air',
        price: 350.0
    }
];


//tax = 0.15%
const [total, tax] = taxCalculation({products: shoppingCart, tax: 0.15});

console.log('Total', total);
console.log('Tax', tax);