var winer = 0;
document.getElementById("rezome").addEventListener("click", function () {
  document.getElementById("body-rezome").style.display = "block";
});

document.getElementById("xo").addEventListener("click", function () {
  document.getElementById("table").style.display = "block";
  document.getElementById("table-footer").style.display = "block";
});

document.getElementById("menu").addEventListener("mouseover", function () {
  document.getElementById("menu-bar").style.display = "block";
  document.getElementById("head").style.width = "85%";
});

document.getElementById("menu-bar").addEventListener("mouseleave", function () {
  document.getElementById("menu-bar").style.display = "none";
  document.getElementById("head").style.width = "95%";
  document.getElementById("menu").style.right = "10px";
});
document.getElementById("restart").addEventListener("click", function () {
  document.getElementById("winning-message").style.display = "none";
  document.getElementById("table").style.display = "block";
  document.getElementById("11").innerHTML = "&nbsp;";
  document.getElementById("12").innerHTML = "&nbsp;";
  document.getElementById("13").innerHTML = "&nbsp;";
  document.getElementById("21").innerHTML = "&nbsp;";
  document.getElementById("22").innerHTML = "&nbsp;";
  document.getElementById("23").innerHTML = "&nbsp;";
  document.getElementById("31").innerHTML = "&nbsp;";
  document.getElementById("32").innerHTML = "&nbsp;";
  document.getElementById("33").innerHTML = "&nbsp;";
  Winer();
});
// chra document.getElementById(id).innerHTML = "&nbsp;  kar nmikone?!
function clear(id) {
  document.getElementById(id).innerHTML = "&nbsp;";
}
var turn = 1;
function xo(id) {
  if (document.getElementById(id).innerHTML == "&nbsp;") {
    if (turn % 2 != 0) {
      document.getElementById(id).innerHTML = "X";
      isWinner();
      turn++;
    } else {
      document.getElementById(id).innerHTML = "O";
      isWinner();
      turn++;
    }
  }
  function isWinner() {
    if (turn > 4) {
      if (
        document.getElementById(11).innerHTML ==
          document.getElementById(12).innerHTML &&
        document.getElementById(12).innerHTML ==
          document.getElementById(13).innerHTML &&
        document.getElementById(11).innerHTML != "&nbsp;"
      ) {
        winer = document.getElementById(11).innerHTML;
        document.getElementById("winning-message").style.display = "flex";
        document.getElementById("data-winning-message").innerHTML =
          document.getElementById(11).innerHTML + " Wins!";
      }
      if (
        document.getElementById(21).innerHTML ==
          document.getElementById(22).innerHTML &&
        document.getElementById(22).innerHTML ==
          document.getElementById(23).innerHTML &&
        document.getElementById(21).innerHTML != "&nbsp;"
      ) {
        winer = document.getElementById(21).innerHTML;
        document.getElementById("winning-message").style.display = "flex";
        document.getElementById("data-winning-message").innerHTML =
          document.getElementById(21).innerHTML + " Wins!";
      }
      if (
        document.getElementById(31).innerHTML ==
          document.getElementById(32).innerHTML &&
        document.getElementById(32).innerHTML ==
          document.getElementById(33).innerHTML &&
        document.getElementById(31).innerHTML != "&nbsp;"
      ) {
        winer = document.getElementById(31).innerHTML;
        document.getElementById("winning-message").style.display = "flex";
        document.getElementById("data-winning-message").innerHTML =
          document.getElementById(31).innerHTML + " Wins!";
      }
      if (
        document.getElementById(11).innerHTML ==
          document.getElementById(22).innerHTML &&
        document.getElementById(22).innerHTML ==
          document.getElementById(33).innerHTML &&
        document.getElementById(11).innerHTML != "&nbsp;"
      ) {
        winer = document.getElementById(11).innerHTML;
        document.getElementById("winning-message").style.display = "flex";
        document.getElementById("data-winning-message").innerHTML =
          document.getElementById(11).innerHTML + " Wins!";
      }
      if (
        document.getElementById(13).innerHTML ==
          document.getElementById(22).innerHTML &&
        document.getElementById(22).innerHTML ==
          document.getElementById(31).innerHTML &&
        document.getElementById(13).innerHTML != "&nbsp;"
      ) {
        winer = document.getElementById(13).innerHTML;
        document.getElementById("winning-message").style.display = "flex";
        document.getElementById("data-winning-message").innerHTML =
          document.getElementById(13).innerHTML + " Wins!";
      }
      if (
        document.getElementById(11).innerHTML ==
          document.getElementById(21).innerHTML &&
        document.getElementById(21).innerHTML ==
          document.getElementById(31).innerHTML &&
        document.getElementById(11).innerHTML != "&nbsp;"
      ) {
        winer = document.getElementById(11).innerHTML;
        document.getElementById("winning-message").style.display = "flex";
        document.getElementById("data-winning-message").innerHTML =
          document.getElementById(11).innerHTML + " Wins!";
      }
      if (
        document.getElementById(12).innerHTML ==
          document.getElementById(22).innerHTML &&
        document.getElementById(22).innerHTML ==
          document.getElementById(32).innerHTML &&
        document.getElementById(12).innerHTML != "&nbsp;"
      ) {
        winer = document.getElementById(12).innerHTML;
        document.getElementById("winning-message").style.display = "flex";
        document.getElementById("data-winning-message").innerHTML =
          document.getElementById(12).innerHTML + " Wins!";
      }
      if (
        document.getElementById(13).innerHTML ==
          document.getElementById(23).innerHTML &&
        document.getElementById(23).innerHTML ==
          document.getElementById(33).innerHTML &&
        document.getElementById(13).innerHTML != "&nbsp;"
      ) {
        winer = document.getElementById(13).innerHTML;
        document.getElementById("winning-message").style.display = "flex";
        document.getElementById("data-winning-message").innerHTML =
          document.getElementById(13).innerHTML + " Wins!";
      }
    }
  }
}
function Winer() {
  if (winer == "X") {
    document.getElementById("X").innerHTML =
      parseInt(document.getElementById("X").innerHTML) + 1;
  }

  if (winer == "O") {
    document.getElementById("O").innerHTML =
      parseInt(document.getElementById("O").innerHTML) + 1;
  }
}
