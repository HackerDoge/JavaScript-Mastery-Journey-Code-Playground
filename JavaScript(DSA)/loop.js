//FOR LOOP

for (let i=0;i<100;i++){

    console.log(i+1);
}

//FOR IN LOOP

let obj={
    name: "Ari",
    role: "Supreame Leader", 
    region:"Earth"
}

for (const key in obj) {
    {
        const element = obj[key];
        console.log(key,element);
    }
}

//FOR OF LOOP

for (const a of "ARI") {
    console.log(a);
}

//FOR Each loop

let fruits = ["apple", "orange", "cherry"];

fruits.forEach((element) => console.log(element));

//WHILE LOOP

let b=0;

while(b < 100) {
    console.log(b)
    b++;
}

//DO WHILE LOOP

let c = 0;
do {
  console.log(c)
  c++;
}
while (c < 5);