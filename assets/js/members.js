var file = "\assets\Member List Fall 2020 - Sheet1.csv";
  var reader = new FileReader();
  reader.readAsText(file);

  //if you need to read a csv file with a 'ISO-8859-1' encoding
  /*reader.readAsText(file,'ISO-8859-1');*/

  //When the file finish load
  //reader.onload = function(event) {

    //get the file.
    var csv = reader.result;

    //split and get the rows in an array
    var rows = csv.split('\n');

    //move line by line
    for (var i = 1; i < rows.length; i++) {
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
  //}
