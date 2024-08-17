const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output")

const convertToRoman = (num) => {
  const romanNumerals = [
    {
      value: 1000,
      numeral: "M"
    },
    {
      value: 900,
      numeral: "CM"
    },
    {
      value: 500,
      numeral: "D"
    },
    {
      value: 400,
      numeral: "CD"
    },
    {
      value: 100,
      numeral: "C"
    },
    {
      value: 90,
      numeral: "XC"
    },
    {
      value: 50,
      numeral: "L"
    },
    {
      value: 40,
      numeral: "XL"
    },
    {
      value: 10,
      numeral: "X"
    },
    {
      value: 9,
      numeral: "IX"
    },
    {
      value: 5,
      numeral: "V"
    },
    {
      value: 4,
      numeral: "IV"
    },
    {
      value: 1,
      numeral: "I"
    }
  ]

  let result = "";

  if (num === "") {
    result += "Please enter a valid number";
    output.innerHTML = `<p id="result-text">${result}</p>`
    return
  } else if (num < 1) {
    result += "Please enter a number greater than or equal to 1";
    output.innerHTML = `<p id="result-text">${result}</p>`
    return
  } else if (num >= 4000) {
    result += "Please enter a number less than or equal to 3999";
    output.innerHTML = `<p id="result-text">${result}</p>`
    return
  }
  
  

  for (const {value, numeral} of romanNumerals) {
    while (value <= num) {
      result += numeral;
      num -= value;
    }
  }
  output.innerHTML = `<p id="result-text">${result}</p>`
  console.log(result)
  return result;
  }

convertBtn.addEventListener("click", () => {
  convertToRoman(input.value);
  input.value = ""
})