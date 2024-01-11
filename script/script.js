const d = document;
let restoPay = d.getElementById("resto-pay");
let cash = d.getElementById("cash");
const klikRestoPay = d.querySelector(".container-metode-pembayaran");
const klikCash = d.querySelector(".container-metode-cash");

let checkedResto = false;
klikRestoPay.addEventListener("click", () => {
  checkedResto = !checkedResto;
  restoPay.checked = checkedResto;
});

let checkedCash = false;
klikCash.addEventListener("click", () => {
  checkedCash = !checkedCash;
  cash.checked = checkedCash;
});

let saldo = d.getElementById("saldo-resto-pay").value; // saldo resto pay
console.log(localStorage.getItem("total"));
const formatUang = (rupiah) => {
  return rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};
let desc = localStorage.getItem("pesanan");
let nama = localStorage.getItem("name");
info.innerHTML = `anda telah memesah ${nama}: ${desc}`;
let data = localStorage.getItem("total");
let total = (document.getElementById("total").innerHTML = formatUang(
  parseInt(data)
));
let saldo_u = 50000;

const saldo_user = (document.getElementById("saldo").innerHTML =
  formatUang(saldo_u));
const bayar = () => {


  let restoPay = d.getElementById("resto-pay").checked;
  let cash = d.getElementById("cash").checked;
  console.log(restoPay, cash);

  if (!restoPay && !cash) {
    alert("Plih metode pembayaran terlebih dahulu !");
  } else {
    if (restoPay === true) {
      if (saldo_u < data) {
        konfirmasi = confirm("Saldo Tidak Cukup ! apakah anda ingin topup?");
        if (konfirmasi == true) {
          topup = prompt("masukan nomina pecahan 10000");
          if (topup % 10000 == 0) {
            saldo_u = parseInt(saldo_u) + parseInt(topup);
            document.getElementById("saldo").innerHTML = formatUang(saldo_u);
          }
        }
      } else {
        window.location.href = "succes.html";
      }
    } else if (cash === true) {
      window.location.href = "cashier.html";
    }
  }
};
