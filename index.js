const cal = () => {
  let wd = document.getElementById("wd").value;
  let math = document.getElementById("math").value;
  let physics = document.getElementById("physics").value;
  let chemistry = document.getElementById("chemistry").value;
  let totalGrade =
    parseFloat(wd) +
    parseFloat(math) +
    parseFloat(physics) +
    parseFloat(chemistry);
  alert(totalGrade);
  let percent = (totalGrade / 400) * 100;
  alert(percent);

  let grade = "";
  if (percent <= 100 && percent >= 80) {
    grade = "A";
  } else if (percent <= 79 && percent >= 60) {
    grade = "B";
  } else {
    grade = "C";
  }

  if (percent >= 40) {
    document.getElementById(
      "show-data"
    ).innerHTML = `Out of 400 your total is ${totalGrade} and percentage is ${percent}% <br> Your grade is ${grade}.You are Pass`;
  } else {
    document.getElementById(
      "show-data"
    ).innerHTML = `Out of 400 your total is ${totalGrade} and percentage is ${percent}%. <br> Your grade is ${grade}. Sorry try next time...`;
  }
};
