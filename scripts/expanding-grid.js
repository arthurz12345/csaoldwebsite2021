// $(document).on('click', '.grid-box', function() {
//         $(this).parent().find('.highlighted').toggleClass('highlighted');
//         if($(this).hasClass('checked')) {
//                 $(this).remove();
//                 return;
//         }
//         $(this).parent().find('.checked').remove();
//         var clone = $(this).clone();
//         $(this).toggleClass('highlighted');
//         clone.toggleClass("checked");
//         clone.find('.info').toggleClass("hidden");
//         clone.find('.header').toggleClass("hidden");
//         clone.appendTo('.grid-container');
//         var width = document.body.clientWidth;
//         $('html, body').animate({scrollTop: ($('.checked').position().top - width / 50)}, 300);
// });
