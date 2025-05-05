function promr1() {
    return new Promise((success) => {
          for(let i = 0; i < 1928398123081; i++){

          }
          success("Yeyeyeyeyey!");
    });
}

async function showresult(){
    let result = await promr1();
    console.log(result);
}

showresult();
