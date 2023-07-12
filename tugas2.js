const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("sorry data not found"), []);
    }
  }, 4000);
};
getMonth((err, data) => {
  if (err == null) {
    data.map((month) => {
      console.log(month);
    });
  } else {
    console.log(err.message);
  }
});
