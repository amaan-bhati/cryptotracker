const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "My Two dataset",
      backgroundColor: "rgb(0, 99, 132)",
      borderColor: "rgb(0, 99, 132)",
      data: [3, 8, 22, 12, 29, 14, 40],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
      responsive: true
  },
};

const myChart = new Chart(document.getElementById("chart"), config);


const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener('click',()=>{
  sidebar.style.display ="block";
})

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});


document.getElementById('connect-button').addEventListener('click', event => {
  let account;
  let button = event.target;
  ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
    account = accounts[0];
    console.log(account);
    button.textContent = account;

    ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
      console.log(result);
      let wei = parseInt(result,16);
      let balance = wei / (10**18);
      console.log(balance + " ETH");
    });
  });
});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark-theme");


  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");

});