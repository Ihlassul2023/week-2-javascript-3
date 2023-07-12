//1.search mobile phone
const dataHp = [
  {
    nama: "poco m3 pro",
    merek: "xiaomi",
    penyimpanan: "4/64",
    chipset: "mediatek dimensity 700",
    warna: "blue ocean",
    ready: true,
  },
  {
    nama: "redmi note 8",
    merek: "xiaomi",
    penyimpanan: "4/64",
    chipset: "snapdragon 665",
    warna: "black",
    ready: true,
  },
  {
    nama: "galaxy s23 ultra",
    merek: "samsung",
    penyimpanan: "8/256",
    chipset: "snapdragon 8 gen 2",
    warna: "red",
    ready: true,
  },
  {
    nama: "realme 10 pro",
    merek: "realme",
    penyimpanan: "8/256",
    chipset: "dimensity 920",
    warna: "dark matter",
    ready: false,
  },
  {
    nama: "vivo v27 pro",
    merek: "vivo",
    penyimpanan: "8/256",
    chipset: "dimensity 8200",
    warna: "blue sky",
    ready: true,
  },
];
const cekHp = (merek) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let cek = dataHp.filter((item) => item.merek === merek && item.ready);
      if (cek.length != 0) {
        resolve(cek);
      } else {
        reject(new Error("hp kosong!"));
      }
    }, 1000);
  });
};

const cariMerek = async (cek) => {
  try {
    let hasil = await cekHp(cek);
    hasil.map((hp) => {
      const obj = {};
      for (const iterator of Object.keys(hp)) {
        if (iterator == "nama" || iterator == "chipset" || iterator == "penyimpanan") {
          obj[iterator] = hp[iterator];
        }
      }
      console.log(obj);
    });
  } catch (error) {
    console.log(error.message);
  }
};
// cariMerek("xiaomi");

//2.quotes generator
const dataQutes = [
  {
    id: 1,
    quote: "Hidup adalah tentang membuat pilihan, dan memilih untuk bahagia adalah salah satunya.",
  },
  {
    id: 2,
    quote: "Kesuksesan bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan. Jika Anda mencintai apa yang Anda lakukan, Anda akan berhasil.",
  },
  {
    id: 3,
    quote: "Kesuksesan bukan akhir dari perjalanan, kegagalan bukan akhir dari dunia. Yang penting adalah keberanian untuk terus maju.",
  },
  {
    id: 4,
    quote: "Jangan takut gagal. Takutlah menjadi orang yang tidak pernah mencoba.",
  },
  {
    id: 5,
    quote: "Kebahagiaan bukanlah tujuan, melainkan perjalanan. Jadi nikmatilah setiap momen di sepanjang jalan.",
  },
  {
    id: 6,
    quote: "Beranilah bermimpi besar, karena impian yang besar akan menghasilkan pencapaian yang besar pula.",
  },
  {
    id: 7,
    quote: "Kesempatan terbaik datang kepada mereka yang menciptakannya.",
  },
  {
    id: 8,
    quote: "Kesuksesan adalah hasil dari kerja keras, ketekunan, dan belajar dari kegagalan.",
  },
  {
    id: 9,
    quote: "Kesuksesan tidak diukur dari seberapa tinggi Anda naik, tetapi seberapa banyak Anda membantu orang lain naik.",
  },
  {
    id: 10,
    quote: "Jangan pernah menyerah pada impian Anda. Keinginan yang kuat dan kerja keras adalah kunci untuk meraihnya.",
  },
];
const quotes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      let quote = dataQutes[randomNumber];
      if (quote) {
        resolve(quote);
      } else {
        reject(new Error("server internal error!"));
      }
    }, 1000);
  });
};

const generateQuotes = async () => {
  try {
    let hasil = await quotes();
    console.log(`id:${hasil.id}
"${hasil.quote}"`);
  } catch (error) {
    console.log(error.message);
  }
};
generateQuotes();
