$(document).ready(() => {
    $("td").click(function (event) {
      alert("Sekarang kamu berada di " + $(this).html() + "!");
    });
    $("th").click(function (event) {
      alert("Sekarang kamu berada di " + $(this).html() + "!");
    });
  });
