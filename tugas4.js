const getAllName = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    data.map((item) => {
      console.log(item.name);
    });
  } catch (error) {
    console.log(error.message);
  }
};

getAllName();
