function factorialize(num, factorial = 1) {
    return num === 0 ? factorial : factorialize(num -1, factorial * num)
    }

  
  console.log(factorialize(5));