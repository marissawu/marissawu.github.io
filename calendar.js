document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid', 'list', 'googleCalendar' ],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listYear'
    },

    displayEventTime: false, // don't show the time column in list view

    // THIS KEY WON'T WORK IN PRODUCTION!!!
    // To make your own Google API key, follow the directions here:
    // http://fullcalendar.io/docs/google_calendar/
    googleCalendarApiKey: 'AIzaSyAKtkwSkVlqy2IwKfMsYeS8QqQzYPELLH8',

    // US Holidays
    events: 'berkeley.edu_h7mqbiqhrp84p1kgrqitbs2pjo@group.calendar.google.com',

    eventClick: function(arg) {

      // opens events in a popup window
      window.open(arg.event.url, '_blank', 'width=700,height=600');

    // googleCalendarApiKey: 'AIzaSyCbDScH8WgiIxwiRdReb8HA-vcfoXh-Q3w',

    // events: '2fijgqp28ttqmo5asrd6bkdsh0@group.calendar.google.com',

    //   // 'en.usa#holiday@group.v.calendar.google.com',
    // // googleCalendarApiKey: 'AIzaSyAKtkwSkVlqy2IwKfMsYeS8QqQzYPELLH8',
    // // events: 'en.usa#holiday@group.v.calendar.google.com',

    // // events: 'berkeley.edu_h7mqbiqhrp84p1kgrqitbs2pjo@group.calendar.google.com',  


    // eventClick: function(arg) {

    //   // opens events in a popup window
    //   window.open(arg.event.url, '_blank', 'width=700,height=600');

      // prevents current tab from navigating
      arg.jsEvent.preventDefault();
    }

  });

  calendar.render();
});