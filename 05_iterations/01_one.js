// for loop jumps on various statement
// syntax understanding in for loop first is variable initialize it define then var condition , then iterate it

for (let value = 0; value < array.length; value++) {
    const element = array[value];
    
}

for (let index = 0; index < 12; index++) {
    const element = index;
    if (element == 5) {
        console.log(`here i 5 in the loop`);
    }
    console.log(element);
    
}

// we can have multiple loop inside loop

for (let i = 0; i < 3; i++) {
    const element = i ;
    for (let v = 0; v < 2; v++) {
        const element = v;
        
    }
    console.log(i);
}                          // here only the outer loop will print coz we havent set a print for inner loop



for (let i = 0; i < 3; i++) {
    const element = i ;
    for (let v = 0; v < 2; v++) {
        const element = v;
        console.log(v);
    }
    console.log(i);
}  

// eg

for (let table = 0; table < 8; table++) {
    const element = table;
  
    for (let inner = 0; inner < 10; inner++) {
        const element = inner;
        // console.log(inner);
        console.log(`${table} * ${inner} = ${ table * inner} `);  
    }
      
}

// for loop works on array
 let myArray = [ "hi" ,"hello" , "hellow "]
 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
 }


 // condition to break or continue the loop
// if we want to prit only some of array the nwe can break the loop  by
// eg

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
