export interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

export const PRODUCTS: Product[] = [
    {
        // original image https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
        id: 1,
        name: 'Outdoor Folding Lounge Chair',
        image: 'assets/images/lounge-chair.jpg',
        description: 'Outdoor lounge chair that can be used on the patio, balcony, beach and any other outdoor locations.'
        + ' Made up of 65% polyester and 35% cotton that is easily removeable and replaceable. Can be easily folded and stored to take up less space',
        price: 249.99
    },
    {
        // original image https://www.pexels.com/photo/apartment-architecture-carpet-chair-276583/
        id: 2,
        name: 'L-shaped sofa',
        image: 'assets/images/L-shape-sofa.jpg',
        description: ''
        + '',
        price: 429.99
    },
    {
        // original image https://www.pexels.com/photo/chair-comfort-contemporary-daylight-2082090/
        id: 3,
        name: 'Living Room Chair',
        image: 'assets/images/living-room-chair.jpg',
        description: ''
        + '',
        price: 299.99
    }
];
