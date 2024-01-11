let pesanan = [
  {
    id: 0,
    name: "Paket 1",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 10000,
  },
  {
    id: 1,
    name: "Paket 2",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 20000,
  },
  {
    id: 2,
    name: "Paket 3",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 30000,
  },
];

const menuSection = document.querySelector(".menu-section");

pesanan.map((barang) => {
  menuSection.innerHTML += kartu(
    barang.name,
    barang.desc,
    barang.price,
    barang.id
  );
});

function kartu(name, description, price, id) {
  return `<!-- card -->
	<div class="card">
		<button class="kategori" aria-readonly="true">Paket</button>
		<hr class="line" />
		<div class="container-content">
			<div>
				<img
					src="./images/example-product/indomie.jpg"
					alt=""
					class="produk-img"
				/>
			</div>
			<div class="content">
				<p>${name}</p>
				<p>${description}</p>
				<p>${price}</p>
				<div class="content2">
					<button class="tambah" id="pesan-${id}">pesan</button>
				</div>
			</div>
		</div>
	</div>`;
}

pesanan.map((barangbagus) => {
  const pesan = document.getElementById(`pesan-${barangbagus.id}`);

  pesan.addEventListener("click", (e) => {
    e.preventDefault();
    const jumlah = prompt("Pesan berapa?");

    if (jumlah !== null) {
      if (jumlah !== "") {
        const total = barangbagus.price * jumlah;
        localStorage.setItem("jumlah", jumlah);
        localStorage.setItem("total", total);
        localStorage.setItem("name", barangbagus.name);
        localStorage.setItem("pesanan", barangbagus.desc);
        window.location.href = "order.html";
      } else {
        alert("Anda harus memasukkan jumlah pesanan.");
      }
    }
  });
});
