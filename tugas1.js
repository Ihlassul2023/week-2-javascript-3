const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => item === day);
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("hari ini bukan hari kerja"));
      }
    });
  });
};

//then catch
//penggunaan then catch langsung memanggil nama function promise dan memberikan 2 method then dan catch untuk menghandle hasil dari pemrosesan sebuah function promise
cekHariKerja("minggu")
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

//try catch
//penggunaan try catch yaitu membuatkan terlebih dahulu function asyncronous dengan metode async await mengetikan keyword async sebelum kurung parameter jika menggunakan arrow function lalu didalam function masukan blok kode try catch unutk menghandle hasil pemrosesan function promise didalam kode try sebelum memanggil function promise ketikan terlebih dahulu keyword await

const apakahHariKerja = async (day) => {
  try {
    hasil = await cekHariKerja(day);
    console.log(hasil);
  } catch (error) {
    console.log(error.message);
  }
};
apakahHariKerja("senin");
