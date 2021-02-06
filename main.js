class DateExtra {
    constructor() {
        this.DEFAULT_FORMAT = 'dd/mm/yyyy';
        this.currentDate = this.today;
    }
    get today() {
        const tDate = new Date();
        tDate.setHours(0);
        tDate.setMinutes(0);
        tDate.setSeconds(0);
        return tDate;
    }
    set year(value) {
        // TODO add handling of yy values
        this.currentDate.setFullYear(value);
    }
    set month(value) {
        this.currentDate.setMonth(value - 1);
    }
    set date(value) {
        this.currentDate.setDate(value);
    }
    get year() {
        return this.currentDate.getFullYear();
    }
    get month() {
        return this.currentDate.getMonth() + 1;
    }
    get date() {
        return this.currentDate.getDate();
    }
    format(formatString) {
        let formattedString = formatString ? formatString : this.DEFAULT_FORMAT; // apply a default method of formatting in GMT
        // DATE REPLACEMENTS
        // TODO ddd - st, nd, rd, th
        if (formattedString.includes('dd')) {
            formattedString = formattedString.replace(/dd/g, this.date.toString().padStart(2, '0'));
        }
        if (formattedString.includes('d')) {
            formattedString = formattedString.replace(/d/g, this.date.toString());
        }
        // END DATE REPLACEMENTS
        // MONTH REPLACEMENTS
        if (formattedString.includes('mm')) {
            formattedString = formattedString.replace(/mm/g, this.month.toString().padStart(2, '0'));
        }
        if (formattedString.includes('m')) {
            formattedString = formattedString.replace(/m/g, this.month.toString());
        }
        // END MONTH REPLACEMENTS
        // YEAR REPLACEMENTS
        if (formattedString.includes('yyyy')) {
            formattedString = formattedString.replace(/yyyy/g, this.year.toString());
        }
        if (formattedString.includes('yy')) {
            formattedString = formattedString.replace(/yy/g, this.year.toString().substring(2)); // only use the end year digits
        }
        // END YEAR REPLACEMENTS
        return formattedString;
    }
    isPast() {
        return this.isBefore(new DateExtra());
    }
    isPresent() {
        return this.isSameDay(new DateExtra());
    }
    isFuture() {
        return this.isAfter(new DateExtra());
    }
    isBefore(date) {
        let correct = false;
        if (this.year < date.year) {
            correct = true;
        }
        else if (this.year == date.year) {
            if (this.month < date.month) {
                correct = true;
            }
            else if (this.month == date.month && this.date < date.date) {
                correct = true;
            }
        }
        return correct;
    }
    isSameDay(date) {
        let correct = false;
        if (this.year == date.year && this.month == date.month && this.date == date.date) {
            correct = true;
        }
        return true;
    }
    isAfter(date) {
        let correct = false;
        if (this.year > date.year) {
            correct = true;
        }
        else if (this.year == date.year) {
            if (this.month > date.month) {
                correct = true;
            }
            else if (this.month == date.month && this.date > date.date) {
                correct = true;
            }
        }
        return correct;
    }
}
export default DateExtra;
