export const convertDateToMinutes = (time: string) => {
    let a = time.split(':');
    return (+a[0]) * 60 + (+a[1]);
}

export const convertMinutesToData = (totalMinutes: any) => {
    let minutes = totalMinutes % 60;
    let hours = (totalMinutes-minutes)/60;
    return '0' + hours + ':' + minutes + ':' + '00';
}

export const convertTimestamp = (timestamp: Date | number | string | null) => {
    // @ts-ignore
    let d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
        ampm = 'AM',
        time;

    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }

    // ie: 2013-02-18, 8:35 AM
    // time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
    time = yyyy + '-' + mm + '-' + dd;

    return time;
}