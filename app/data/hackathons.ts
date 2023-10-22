export const CompetedIn = 6;
export const Won = 4;

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
    }
];
export default Hackathons;