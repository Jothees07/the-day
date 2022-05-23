var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }
  
  $(function () {
    showText("#text", "Hi SWA!! ", 0, 200);   
  });
  
  $(function () {
    showText("#msg", "Check mail for secret code :-) ", 0, 100);   
  });

  $(function () {
    showText("#dest_wish", "MANY MORE HAPPY RETURNS OF THE DAY SWA 🎂", 0, 200);   
  });

  $(function () {
    showText("#q0", "A fabulous birthday to the \"Queen of the day\" .May showers of blessings fall upon you on your birthday and beyond.Have a great day.", 0, 80);   
  });

  $(function () {
    showText("#w0", "~ Avanthigaa🤍", 0, 80);   
  });

  $(function () {
    showText("#q1", "Hey swa wishing you a very happy birthday ❤️ Be cherished as your smile always🤍love you", 0, 80);   
  });

  $(function () {
    showText("#w1", "~ Dharshini❤️", 0, 80);   
  });