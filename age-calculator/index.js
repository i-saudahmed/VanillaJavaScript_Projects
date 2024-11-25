const inputAge = document.getElementById("birthday");
const result = document.getElementById("result");
const button = document.getElementById("btn");

const calcAge = () => {
  let ageValue = inputAge.value;
  let ageValueYear = new Date(ageValue);

  const currentDate = new Date();

  let age = currentDate.getFullYear() - ageValueYear.getFullYear();
  result.innerText = `Your age is ${age} years old`;
};

button.addEventListener("click", calcAge);
