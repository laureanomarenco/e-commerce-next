import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Admin',
            email: 'laureanomarenco@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'Test',
            email: 'falsomail@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Medallones de Quinoa',
            slug: 'm-quinoa',
            category: 'medallones',
            image: '/images/quinoa.jpg',
            price: '510',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'Quinoa peruana con tomates secos, verdeo y avena x4u. Con sal marina'
        },
        {
            name: 'Medallones de Calabaza',
            slug: 'm-calabaza',
            category: 'medallones',
            image: '/images/calabaza.jpg',
            price: '490',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'Calabaza con yamaní agroecológico, perejil, trigo burgol y avena x4u. Con sal marina'
        },
        {
            name: 'Medallones de Garbanzo',
            slug: 'm-garbanzo',
            category: 'medallones',
            image: '/images/garbanzo.jpg',
            price: '510',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'Garbanzos con zanahoria y cebolla confitada y avena x4u'
        },
        {
            name: 'Provoleta Vegetal',
            slug: 'provoleta-vegetal',
            category: 'quesos',
            image: '/images/provoleta-vegetal.jpg',
            price: '390',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'De fécula de mandioca, leche de soja, ajo, aceite de girasol y especias'
        },
        {
            name: 'Pan de curcuma x4u',
            slug: 'p-curcuma',
            category: 'panificados',
            image: '/images/pan-curcuma.jpg',
            price: '420',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'Para hamburguesa de 150grs c/u con h.blanca 000, curcuma, sal marina y semillas de Sésamo negro e integral'
        },
        {
            name: 'Pack de 2 pre-pizzas de 6 porc.',
            slug: 'prepizzas',
            category: 'panificados',
            image: '/images/prepizzas.jpg',
            price: '510',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'Con harina integral agroecologica, sal marina, levadura fresca y salsa caserita de tomate'
        },
        {
            name: 'Choris de Seitán x5u',
            slug: 's-choris',
            category: 'seitán',
            image: '/images/choris-seitán.png',
            price: '840',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: '5 choris para la parri, plancha u horno, con pimiento y cebollita salteada.'
        },
        {
            name: 'Bifecitos de Seitán',
            slug: 's-bifes',
            category: 'seitán',
            image: '/images/bifes-seitán.png',
            price: '840',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'Bandeja por 500grs. Entre 8 y 10 bifecitos (4 comidas o 5 sangucheadas 😊'
        },
        {
            name: 'Milas de Seitán',
            slug: 's-milas',
            category: 'seitán',
            image: '/images/milas-seitán.png',
            price: '860',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'Nuevo producto'
        },
        {
            name: 'Sopa Naranja x2u',
            slug: 'sopa-naranja',
            category: 'sopas',
            image: '/images/sopa-naranja.png',
            price: '410',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'Sopa crema de CALABAZA, zanahoria, apio y manzana. Con leche de coco casera. Porcion de 390cc lista para descongelar y consumir.'
        },
        {
            name: 'Medallones de Mijo',
            slug: 'm-mijo',
            category: 'medallones',
            image: '/images/mijo.png',
            price: '490',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'Agroecológico al curry con olivas, zanahoria  y avena x4u. Con sal marina'
        },
        {
            name: 'Medallones de Lentejas',
            slug: 'm-lentejas',
            category: 'medallones',
            image: '/images/lentejas.png',
            price: '490',
            brand: 'Hakuna Batata',
            rating: 5,
            numReviews: 5,
            countInStock: 20,
            description: 'Lentejas agroecológicas con girasol y avena x4u.Con sal marina'
        },
    ]
}

export default data;