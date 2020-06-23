
var file = "\\assets\\Member List Fall 2020 - Sheet1.csv";

  var reader = new FileReader();
  document.getElementById("memberRow").innerHTML += "<p> Reader </p>";

  //When the file finish load
  reader.onload = function(reader) {
    document.getElementById("memberRow").innerHTML += "<p> Onload </p>";
      //get the file.
      var csv = toString(reader.result);
      document.getElementById("memberRow").innerHTML += "<p> CSV " + typeof csv + "</p>";
      //split and get the rows in an array
      var rows = csv.split('\n');
      document.getElementById("memberRow").innerHTML += "<p> Rows " + rows.length + "</p>";
      //move line by line
      for (var i = 1; i < 5; i++) {
        document.getElementById("memberRow").innerHTML += "<p> Inside For </p>";
        //split by separator (,) and get the columns
        cols = rows[i].split(',');

        var memberName = cols[0] + " " + cols[1];
        var memberImage = cols[5];
        var memberPledgeClass = cols[6];
        var memberLinkedIn = cols[8];

        document.getElementById("memberRow").innerHTML += "<p> Hello World </p>";
        /*
        "<div class=\"active-item\"> <div class=\"active-img\"> <figure> <div class=\"member-img\"> <img src=" + memberImage + "> <div class=\"overlay\"> <div class=\"text\">& " + memberPledgeClass + ";</div> <a href= " + memberLinkedIn + "class=\"icon\" title=\"LinkedIn\"> <ion-icon name=\"logo-linkedin\" size=\"large\"></ion-icon> </a> </div> </div> <figcaption> " + memberName + "</figcaption> </figure> </div> </div>";
        //move column by column
        /*for (var j = 0; j < cols.length; j++) {
          //the value of the current column.
          //Do whatever you want with the value
          var value = cols[j];
        }*/
      }


  })(reader);

  reader.readAsText(file.files[0]);
