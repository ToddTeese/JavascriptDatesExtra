# JavascriptDatesExtra
A class to take the place of the standard JS date object to quickly add the methods I use frequently

The main thrust of this repo is to provide a method of dealing with dates within Javascript that will hopefully be better suited for not only date manipulation but also checks that I do daily such as date comparison and applying tenses i.e Past, Present, Future

JS is TS using ES2017

# DateExtra
- Initialized to todays date at midnight, this was to make date transformation easier

## set year  : I might add yy as well as yyyy to handle dates with only the relevant year digits
## set month : Standard JS uses months from 0-11, I've shifted to 1-12 because I make that mistake constantly
## set date  : Standard Date. Nothing else to add.

## get year  : gives the year as full yyyy digits
## get month : gives month shifted +1 from standard 0-11 Js Months
## get date  : gives date.

## format    : returns a date using a format string
This was an interesting one, I want the ability to format strings given and search and replace elements of that string
Because of this approach, one could just put in dd and recieve the date element of the Date as a string
A fringe benefit of this is that a user can use whatever seperators (or mismatched) seperators in format

### digit characters
d - replaced with date without padding
dd  - replaced with date with padding

m - replaced with month without padding
mm - replaced with month with padding

yy - replaced with last 2 digits of year
yyyy - replaced with full year

### char characters - TO BE IMPLEMENTED

# Tense checks and Date Comparisons
In my day to day, I use a lot of tense checks for dates to check if they are past or present dates,
I also have a large need for date comparison, this is a one stop shop.

## isPast    : Returns true if date is in past 
## isPresent : Returns true if date is today
## isFuture  : Returns true if date is in future 

## isBefore  : takes a DateExtra and returns true if enacting object is before argument object
## isSameDay : takes a DateExtra and returns true if enacting object is same day as argument object
## isAfter   : takes a DateExtra and returns true if enacting object is after argument object
