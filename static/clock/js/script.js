const type = document.querySelector('#type')

const arr = [
    'our Special Day',
    'I became happiest man on Earth',
    'my life filled with light',
    'I fell in love with you',
    'our paths crossed',
    'I am with you',
    'I met my cutie pie'
]

const startDate = new Date('Fri Apr 12 2019 00:00:00 GMT+0400 (Armenia Standard Time)'),
    Second = 1000,
    Minute = Second * 60,
    Hour = Minute * 60,
    Day = Hour * 24,
    Month = Day * 30.5,
    Year = Day * 365.25

const dateDiff = (start, end) => {
    let dif = start.getTime() - end.getTime()
    let res = {}
    res.year = parseInt(dif / Year)
    dif -= res.year * Year
    res.month = parseInt(dif / Month)
    dif -= res.month * Month
    res.day = parseInt(dif / Day)
    dif -= res.day * Day
    res.hour = parseInt(dif / Hour)
    dif -= res.hour * Hour
    res.minute = parseInt(dif / Minute)
    dif -= res.minute * Minute
    res.second = parseInt(dif / Second)
    dif -= res.second * Second
    return res
}

setInterval(function() {
    const time = dateDiff(new Date(), startDate)
    const target = document.querySelector('#clock')

    target.innerHTML = `${time.year} year ${time.month} months ${time.day} days <br> ${time.hour} hours ${time.minute} minutes ${time.second} seconds`
}, 1000)

ityped.init(type, {typeSpeed: 200,cursorChar: "|", showCursor: true, strings: arr});
