import { IArticle } from "@/models/models.interface";

export const articlesList: IArticle[] = [
    {
        id: 1,
        username: 'Tom Cruise',
        priority: 'high',
        created: '2022-08-17T06:30:00',
        updated: '2022-08-18T12:20:00',
        title: 'Contact Email not Linked',
        avatar: 'https://i.pinimg.com/280x280_RS/e8/a2/3f/e8a23f5fa948f7b3bd81d99119314e00.jpg',
    },
    {
        id: 121,
        priority: 'low',
        avatar:"https://cdn-images-1.medium.com/max/175/1*lKN9xV1YEin-2wfAiGySBA.png",
        username:"react_man",
        created: '2019-05-26T06:30:00',
        updated: '2019-05-27T12:20:00',
        title: 'Adding Images to Featured Posts',
    },
    {
        id: 122,
        priority: 'normal',
        avatar:"https://cdn-images-1.medium.com/max/175/1*lKN9xV1YEin-2wfAiGySBA.png",
        username:"Ivan",
        created: '2019-05-26T06:30:00',
        updated: '2019-05-27T12:20:00',
        title: 'Referral Bonus',
    },
    {
        id: 123,
        priority: 'high',
        avatar: "https://m.media-amazon.com/images/I/61TMDIj38XL._AC_SX425_.jpg",
        username: "Anton",
        created: '2019-05-26T06:30:00',
        updated: '2019-05-27T12:20:00',
        title: 'Payment not going through',
    },
    {
        id: 124,
        priority: 'normal',
        avatar: "https://robohash.org/3779d1c257d8d445e3dacf83a6d17af5?set=set4&bgset=&size=400x400",
        username: "Julia",
        created: '2019-05-26T06:30:00',
        updated: '2019-05-27T12:20:00',
        title: 'How do I change my password?',
    }

]