var click = 0;
$(document).on('click', '#raffle', function() {
    if(click == 1) {
        $wordbox = $('#wordbox .slottt-machine-recipe__items_container');
        $wordbox.empty();
        buildSlotContents($wordbox, wordlist);  
        buildSlotContents($wordbox, wordlist);  
        buildSlotContents($wordbox, wordlist);  
        buildSlotContents($wordbox, wordlist);  
        buildSlotContents($wordbox, wordlist);  
        buildSlotContents($wordbox, wordlist);  
    }
    click++;
    var random = Math.floor(Math.random() * wordlist.length) + 1;
    console.log(random);
    if(random < 50)
        random += 377;
    animate(random);
});

// IFTTT Slottt Machine by Jen Hamon
// jen@ifttt.com
// github.com/jhamon
var wordlist = [];
var michaellist=[];
  
  function buildSlotItem (text) {
      return $('<div>').addClass('slottt-machine-recipe__item')
                       .text(text)
  }
  
  function buildSlotContents ($container, wordlist) {
    $items = wordlist.map(buildSlotItem);
    $container.append($items);
  }
  
  function popPushNItems ($container, n) {
      $children = $container.find('.slottt-machine-recipe__item');
      $children.slice(0, n).insertAfter($children.last());
  
      if (n === $children.length) {
        popPushNItems($container, 1);
      }
  }
  
  // After the slide animation is complete, we want to pop some items off
  // the front of the container and push them onto the end. This is
  // so the animation can slide upward infinitely without adding
  // inifinte div elements inside the container.
  function rotateContents ($container, n) {
      setTimeout(function () {
        popPushNItems($container, n);
        $container.css({top: 0});
      }, 300);    
  }
  
  function randomSlotttIndex(max) {
    var randIndex = (Math.random() * max | 0);
    return (randIndex > 10) ? randIndex : randomSlotttIndex(max);
  }
  
    
    
  function animate(index) {
    $wordbox.animate({top: -index*80}, 5000, 'swing', function () {
      rotateContents($wordbox, index);
    });
  }
  
  $(function () {
    michaellist.push("RAFFLE TIME!");
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "new_members.csv", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var data = Papa.parse(allText).data;
                for(i = 0; i < data.length - 1; i++) {
                    var currentPerson = data[i];
                    michaellist.push("Michael Tran");
                    wordlist.push(currentPerson[0] + " " + currentPerson[1]);
                }
            }
        }
    }
    rawFile.send(null);
    $wordbox = $('#wordbox .slottt-machine-recipe__items_container');
    buildSlotContents($wordbox, michaellist);  
    buildSlotContents($wordbox, michaellist);  
    buildSlotContents($wordbox, michaellist);  
    buildSlotContents($wordbox, michaellist);  
  });
