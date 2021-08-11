const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (name, DNA) => {
  return {
    name,
    DNA,
  
    mutate() {
console.log(`Specimen ${this.name} original bases:\n${this.DNA}`);
      let randomNum = Math.floor(Math.random()*this.DNA.length)
      console.log(`Index of choosen DNA base: ${randomNum}`);
      let newBaseD = returnRandBase();
      console.log(`New random DNA base: ${newBaseD}`); 
      while(newBaseD === this.DNA[randomNum]) {
        console.log("Same bases, generating a new base.");
        newBaseD = returnRandBase();
        console.log(`New random base: ${newBaseD}`);
      }
      this.DNA.splice(randomNum, 1 ,newBaseD);
      console.log(`Current DNA base of the Specimen ${this.name}:\n${this.DNA}\n`)
      
    },

    compareDNA(specimen){
       let sameDNACounter = 0;
      for (let i = 0; i < this.DNA.length; i++) {
        if (this.DNA[i] === specimen.DNA[i]) { 
            sameDNACounter +=1;
        }
      }
      console.log(`Specimen ${this.name}'s bases:\n ${this.DNA}`)
      console.log(`Specimen ${specimen.name}'s bases:\n ${specimen.DNA}`)
      console.log(`Matching bases: ${sameDNACounter}`);
      console.log(`Specimen ${this.name} and Specimen ${specimen.name} have ${(sameDNACounter * 100)/this.DNA.length} % DNA in common.`);

    },

    willLikelySurvive(){
      let surviveCounter = 0;
      this.DNA.forEach(x =>{
        if(x === "C" || x === "G") surviveCounter++;
        });
        return (surviveCounter >= 9)
      },

      }

    };
  let create30Specimen = () =>{
        let specimenArray =[];
        while(specimenArray.length <30){
          let i = 1;
          let specimen;
          specimen = pAequorFactory(i, mockUpStrand());
          if ( specimen.willLikelySurvive() ) {
      specimenArray.push(specimen.DNA);
    }
    i++;
  }
  console.log(specimenArray)
  return specimenArray;
        }
create30Specimen();
