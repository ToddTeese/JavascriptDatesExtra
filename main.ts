class DateExtra {
    currentDate : Date;

    DEFAULT_FORMAT : string  = 'dd/mm/yyyy';

    constructor() {
        this.currentDate = this.today; 
    }

    get today() : Date {
        const tDate = new Date();
        tDate.setHours(0);
        tDate.setMinutes(0);
        tDate.setSeconds(0);
        return tDate;
    }

    set year(value: number) {
        // TODO add handling of yy values
        this.currentDate.setFullYear(value);
    }

    set month(value: number) {
        this.currentDate.setMonth(value - 1);
    }

    set date(value: number) {
        this.currentDate.setDate(value);
    }

    get year() : number{
        return this.currentDate.getFullYear();
    }

    get month() : number {
        return this.currentDate.getMonth() + 1;
    }

    get date() : number {
        return this.currentDate.getDate();
    }

    format (formatString : string) : string {
        let formattedString : string = formatString ? formatString : this.DEFAULT_FORMAT; // apply a default method of formatting in GMT

        // DATE REPLACEMENTS
        
        // TODO ddd - st, nd, rd, th
        if(formattedString.includes('dd')) {
            formattedString = formattedString.replace(/dd/g, this.date.toString().padStart(2, '0'));
        }
        if(formattedString.includes('d')) {
            formattedString = formattedString.replace(/d/g, this.date.toString());
        }

        // END DATE REPLACEMENTS

        // MONTH REPLACEMENTS
        if(formattedString.includes('mm')) {
            formattedString = formattedString.replace(/mm/g, this.month.toString().padStart(2, '0'));
        }
        if(formattedString.includes('m')) {
            formattedString = formattedString.replace(/m/g, this.month.toString());
        }
        // END MONTH REPLACEMENTS

        // YEAR REPLACEMENTS
        if(formattedString.includes('yyyy')) {
            formattedString = formattedString.replace(/yyyy/g, this.year.toString());
        }
        if(formattedString.includes('yy')) {
            formattedString = formattedString.replace(/yy/g, this.year.toString().substring(2)); // only use the end year digits
        }
        // END YEAR REPLACEMENTS
        return formattedString;
    }

    isPast() : boolean{
        return this.isBefore(new DateExtra());
    }

    isPresent() : boolean {
        return this.isSameDay(new DateExtra());
    }

    isFuture() : boolean {
        return this.isAfter(new DateExtra());
    }

    isBefore(date : DateExtra) : boolean {
        let correct : boolean = false;
        if(this.year < date.year) {
            correct = true;
        } else if (this.year == date.year) {
            if(this.month < date.month) {
                correct = true;
            } else if(this.month == date.month && this.date < date.date) {
                correct = true;
            }
        }
        return correct;
    }

    isSameDay(date : DateExtra) : boolean {
        let correct : boolean = false;
        if(this.year == date.year && this.month == date.month && this.date == date.date) {
            correct = true;
        }
        return true;
    }

    isAfter(date : DateExtra) : boolean {
        let correct : boolean = false;
        if(this.year > date.year) {
            correct = true;
        } else if (this.year == date.year) {
            if(this.month > date.month) {
                correct = true;
            } else if(this.month == date.month && this.date > date.date) {
                correct = true;
            }
        }
        return correct;
    }

    // TODO addDays
    // TODO addMonths
    // TODO addYears
}

export default DateExtra;