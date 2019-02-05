import { SelectOption } from './key-value';

export class Options {

    static gender: Array<SelectOption> = [
        { key: "Male", value: "1" },
        { key: "Female", value: "2" },
        { key: "Transgender", value: "3" },
        { key: "Others", value: "-1" },
    ];

    static titles: Array<SelectOption> = [
        { key: "Mr", value: "1" },
        { key: "Mrs", value: "2" },
        { key: "Miss", value: "3" },
        { key: "Mstr", value: "4" },
        { key: "Others", value: "-1" },
    ];

}
