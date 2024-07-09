const getYear = () => {
  return new Date().getFullYear();
};

document.getElementById("year").innerHTML = getYear();
