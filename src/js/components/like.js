//$('.header-button').on('click', function(e){
   // e.preventDefault();
   //$('.header-button .img.display-toggle').toggleClass('invisible');
 //})

 var LikeList = document.getElementsByClassName("like-button");
 var i;
 
 function Callback(i) {
   return function () {
    $(this).find("img").toggleClass('invisible');
   }
 }
 
 for (i = 0; i < LikeList.length; i++) {
   $(LikeList[i]).on('click', Callback(i));
 }