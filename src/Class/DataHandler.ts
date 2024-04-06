import { DataObject } from './Interfaces/DataObject'

export class DataHandler
{
    private data: DataObject[];

    constructor(data: DataObject[])
    {
        this.data = data;
    }

    getRandomObject(locale?: string)
    {
        const randomIndex = Math.floor(Math.random() * this.data.length);
        const randomObject: DataObject = this.data[randomIndex];

        return {
            toGuess: randomObject.toGuess,
            type: randomObject.type,
            subject: this.getSubject(randomObject, locale)
        };
    }

    private getSubject(randomObject: DataObject, locale?: string): string
    {
        const defaultLocale = randomObject.defaultLocale;
        return (locale && randomObject.translations[locale]) ? randomObject.translations[locale] : randomObject.translations[defaultLocale];
    }

    setData(data: DataObject[])
    {
        this.data = data;
    }
}