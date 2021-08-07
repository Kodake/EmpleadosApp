export class PageRequest<T> {
    count: number;
    pageIndex: number;
    pageSize: number;
    totalSalaries: number;
    femaleSalaries: number;
    maleSalaries: number;
    items: T[];

    constructor(count?: number, pageIndex?: number, pageSize?: number, items?: T[], totalSalaries?: number, femaleSalaries?: number, maleSalaries?: number) {
        this.count = count;
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
        this.items = items;
        this.totalSalaries = totalSalaries;
        this.femaleSalaries = femaleSalaries;
        this.maleSalaries = maleSalaries;
    }
}