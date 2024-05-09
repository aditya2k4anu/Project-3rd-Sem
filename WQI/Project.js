// Project.js

function calculateWQI() {
  var ph = parseFloat(document.getElementById("ph").value);
  var doValue = parseFloat(document.getElementById("do").value);
  var bod = parseFloat(document.getElementById("bod").value);
  var fc = parseFloat(document.getElementById("fc").value);

  // Check if any field is empty
  if (isNaN(ph) || isNaN(doValue) || isNaN(bod) || isNaN(fc)) {
      alert("Please fill in all the fields.");
      return;
  }

  var wqi = ((phSubIndex(ph) * 0.25) + (doSubIndex(doValue) * 0.25) + (bodSubIndex(bod) * 0.25) + (fcSubIndex(fc) * 0.25)).toFixed(2);
  var interpretation = interpretWQI(wqi);

  document.getElementById("result").innerHTML = "<p>Water Quality Index (WQI): " + wqi + "</p><p>Interpretation: " + interpretation + "</p>";
}

function phSubIndex(ph) {
  if (ph <= 6.5) {
      return 100;
  } else if (ph >= 8.5) {
      return 0;
  } else {
      return 100 - 10 * (ph - 6.5) / (8.5 - 6.5);
  }
}

function doSubIndex(doValue) {
  if (doValue <= 6) {
      return 0;
  } else if (doValue >= 9) {
      return 100;
  } else {
      return 100 - 10 * (9 - doValue) / (9 - 6);
  }
}

function bodSubIndex(bod) {
  if (bod <= 0) {
      return 100;
  } else if (bod >= 2) {
      return 0;
  } else {
      return 100 - 50 * bod / 2;
  }
}

function fcSubIndex(fc) {
  if (fc <= 0) {
      return 100;
  } else if (fc >= 5) {
      return 0;
  } else {
      return 100 - 20 * fc / 5;
  }
}

function interpretWQI(wqi) {
  if (wqi >= 80) {
      return "Excellent";
  } else if (wqi >= 51) {
      return "Good";
  } else if (wqi >= 38) {
      return "Poor";
  } else {
      return "Very Poor";
  }
}
