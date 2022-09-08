export interface IArticle {
    id: number,
    priority: 'NORMAL' | 'HIGH' | 'LOW',
    avatar: string,
    username: string,
    created: number,
    updated: number,
    title: string,
}

export const articlesList: IArticle[] = [
    {
        id: 1,
        username: 'Tom Cruise',
        priority: 'HIGH',
        created: 1660707000000,
        updated: 1660814400000,
        title: 'Contact Email not Linked',
        avatar: 'https://i.pinimg.com/280x280_RS/e8/a2/3f/e8a23f5fa948f7b3bd81d99119314e00.jpg',
    },
    {
        id: 121,
        priority: 'LOW',
        avatar:"https://cdn-images-1.medium.com/max/175/1*lKN9xV1YEin-2wfAiGySBA.png",
        username:"react_man",
        created: 1653535800000,
        updated: 1653643200000,
        title: 'Adding Images to Featured Posts',
    },
    {
        id: 122,
        priority: 'NORMAL',
        avatar:"https://cdn-images-1.medium.com/max/175/1*lKN9xV1YEin-2wfAiGySBA.png",
        username:"Ivan",
        created: Date.parse('2019-05-26T06:30:00'),
        updated: Date.parse('2019-05-27T12:20:00'),
        title: 'Referral Bonus',
    },
    {
        id: 123,
        priority: 'HIGH',
        avatar: "https://m.media-amazon.com/images/I/61TMDIj38XL._AC_SX425_.jpg",
        username: "Anton",
        created: Date.parse('2019-05-26T06:30:00'),
        updated: Date.parse('2019-05-27T12:20:00'),
        title: 'Payment not going through',
    },
    {
        id: 124,
        priority: 'NORMAL',
        avatar: "https://robohash.org/3779d1c257d8d445e3dacf83a6d17af5?set=set4&bgset=&size=400x400",
        username: "Julia",
        created: Date.parse('2019-05-26T06:30:00'),
        updated: Date.parse('2019-05-27T12:20:00'),
        title: 'How do I change my password?',
    },
    {
        id: 125,
        username: 'Tom Cruise',
        priority: 'HIGH',
        created: Date.parse('2022-08-17T06:30:00'),
        updated: Date.parse('2022-08-18T12:20:00'),
        title: 'Contact Email not Linked',
        avatar: 'https://i.pinimg.com/280x280_RS/e8/a2/3f/e8a23f5fa948f7b3bd81d99119314e00.jpg',
    },
    {
        id: 126,
        priority: 'LOW',
        avatar:"https://cdn-images-1.medium.com/max/175/1*lKN9xV1YEin-2wfAiGySBA.png",
        username:"react_man",
        created: Date.parse('2019-05-26T06:30:00'),
        updated: Date.parse('2019-05-27T12:20:00'),
        title: 'Adding Images to Featured Posts',
    },
    {
        id: 127,
        priority: 'NORMAL',
        avatar:"https://cdn-images-1.medium.com/max/175/1*lKN9xV1YEin-2wfAiGySBA.png",
        username:"Ivan",
        created: Date.parse('2019-05-26T06:30:00'),
        updated: Date.parse('2019-05-27T12:20:00'),
        title: 'Referral Bonus',
    },
    {
        id: 128,
        priority: 'HIGH',
        avatar: "https://m.media-amazon.com/images/I/61TMDIj38XL._AC_SX425_.jpg",
        username: "Anton",
        created: Date.parse('2019-05-26T06:30:00'),
        updated: Date.parse('2019-05-27T12:20:00'),
        title: 'Payment not going through',
    },
    {
        id: 129,
        priority: 'NORMAL',
        avatar: "https://robohash.org/3779d1c257d8d445e3dacf83a6d17af5?set=set4&bgset=&size=400x400",
        username: "Julia",
        created: Date.parse('2019-05-26T06:30:00'),
        updated: Date.parse('2019-05-27T12:20:00'),
        title: 'How do I change my password?',
    }
]