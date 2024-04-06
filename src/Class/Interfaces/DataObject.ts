import { Translations } from './Translations'

export interface DataObject
{
    toGuess: string | number;
    type: string;
    defaultLocale: string;
    translations: Translations;
}