export const CompetedIn = 8;
export const Won = 6;

export type Hackathon = {
    name: string;
    image: string;
    link: string;
};

const Hackathons: Hackathon[] = [
    {
        name: 'Empower Hacks',
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/540/063/datas/medium.png',
        link: 'https://empower-hacks.devpost.com',
    },
    {
        name: 'HackDesigns',
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/558/665/datas/original.png',
        link: 'https://hackdesigns.devpost.com'
    },
    {
        name: 'HappyHacks II',
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/563/205/datas/medium.png',
        link: 'https://happyhacks2.devpost.com'
    },
    {
        name: 'ChargerHacks',
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/574/391/datas/medium.png',
        link: 'https://chargerhacks-2023.devpost.com'
    },
    {
        name: 'Inisio Hacks',
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/586/846/datas/medium.jpg',
        link: 'https://inisiohacks.devpost.com'
    },
    {
        name: 'EquiHacks S1',
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/532/232/datas/medium.png',
        link: 'https://equihacks.devpost.com'
    }
];
export default Hackathons;