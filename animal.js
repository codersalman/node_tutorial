

  const animal = {
    animals : ['dog', 'cat', 'panda', 'red_panda', 'fox'],
      numberofImages : 3,
  }

    async function GetAnimalImage(name) {
            const response = await fetch('https://some-random-api.com/img/' + name).catch((error) => {
                console.error('Error:', error);
            }).then((response) => {
                return response.json()
            })
            return response.link
    }

    async function GetRandomAnimal(){

        for (let i = 0; i < animal.animals.length; i++){
            const animalName = animal.animals[i]
            console.log("Animal Name: " + animalName)
            for (let j = 0; j < animal.numberofImages; j++){
                const image = await GetAnimalImage(animalName)
                console.log(image)
            }
        }


    }
    GetRandomAnimal().then((data) => {
        console.log(":Done")
    })
