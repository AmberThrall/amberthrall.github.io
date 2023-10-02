import React from 'react';

class Calendar extends React.Component {
    render() {
        return (
            <>
            <br/>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&mode=WEEK&title=Availability&src=YW1iZXIucm9zZS50aHJhbGxAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB&color=%238E24AA&color=%23009688" style={{border: "solid 1px #777"}} width="700" height="600" frameBorder="0" scrolling="no"></iframe>
            </>
        );
    }
}

export default Calendar;
