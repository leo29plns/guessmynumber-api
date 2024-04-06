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
        const transactionLocale = (locale && randomObject.translations[locale]) ? locale : randomObject.defaultLocale;

        return {
            "toGuess": randomObject.toGuess,
            "type": randomObject.type,
            "subject": randomObject.translations[transactionLocale],
            "locale": transactionLocale
        };
    }

    setData(data: DataObject[])
    {
        this.data = data;
    }
}