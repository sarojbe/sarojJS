const fs = require('fs');
const volcanoes = JSON.parse(fs.readFileSync('./volcano.json'));

class VolcanoAnalyzer {
    // Return the volcanoes that erupted in the 1980s.

   
	//Assignment 1 errupted in the Eighties	
	eruptedInEighties() {
     const result = volcanoes.filter((Y) => {
     return Y.Year >= 1980 & Y.Year < 1990;
      
     })
     console.log(result);
 }	
	
// Assignment 2 VEI > 6	
	  vei6Names() {   
	       const name = volcanoes.filter((Na) => {
	       return Na.VEI >= 6;
	       }).map( (Na) => {
	    	   
	    	   return Na.Name; });
	       console.log(name);
	       }
	


// Assignment 3 eruption with highest death
	  eruptdh() {
		const death = volcanoes.filter((Na) => {
			return Na.DEATHS >= 1;
			}).map( (Na) => {return Na.DEATHS; }).reduce((max,val) => {
				if (max < val) {
						max=val;
					}
				return max; 
			});
			    console.log(death);
		   	}
			//}

// Assignment 4 percent of tsunami

	tsunami() {
	   const toter=volcanoes.length;
	   const tsu= volcanoes.filter((tsu) => {
		return tsu.TSU =='TSU' ;
			
		});
		const perc=(tsu.length/toter)* 100 
		console.log(perc);
	   }
	

//Assignment 5 common type of eruption

	   
	  mostvol() {
			const vol = volcanoes.filter((Na) => {
				return Na.Type ;
				}).map( (Na) => {
					return Na.Type })

let mf = 1;
let m = 0;
let item;
for (let i=0; i<vol.length; i++)
{
      for (let j=i; j<vol.length; j++)
      {
              if (vol[i] == vol[j])
               m++;
              if (mf<m)
              {
                mf=m; 
                item = vol[i];
              }
      }
      m=0;
}

console.log(`${item} ( ${mf} times ) `) ;

			   	}

// Assignment 6 Return the number of eruptions when supplied a country as an argument.	  
	  
 eruPerCountry(country){
	 const erup = volcanoes.filter((Na) =>{
		return country == Na.Country
	 })
	 console.log(erup.length)
	 
     }
	  
//Assignment 7 Return the average elevation of all eruptions.
 avgElev (){
	 const toter=volcanoes.length;
	 const avge=volcanoes.map((Na) =>{
		 return Na.Elevation
	 }).reduce((max,val) => {
		 return (max + val)/toter
	 })
	 console.log(avge)	 
 }
 
//Assignment 8 Return an array of types of volcanoes.
 volType (){
	 const typv=volcanoes.filter((Na) =>{
		 return Na.Type
	 } ).map((Na) => {
		 return Na.Type
	 })
	 console.log(typv)
 }

 //Assignment 9 Return the percentage of eruptions that occurred in the Northern Hemisphere.
 
 northErup () {
	 const northe=volcanoes.filter((Na) => {
		 return Na.Latitude > 0
	 })
	 console.log((northe.length/volcanoes.length)*100)
 }
 
//Assignement 10 Return the names of eruptions that occurred after 1800, 
//that did NOT cause a tsunami, happened in the Southern Hemisphere, 
//and had a VEI of 5. 
 
southErup (){
	const southe=volcanoes.filter((Na) =>{
		return Na.Latitude < 0 & Na.Year > 1800 & Na.VEI ===5 & Na.TSU != 'TSU'	
	}).map((Na)=>{
		return Na.Name
	})
	console.log(southe)
	
} 
 
//Assignment 11 Return the names of eruptions that occurred at 
//or above an elevation passed in as an argument. 
 
elevErup(elevation) {
	const elevrup=volcanoes.filter((Na) => {
		return elevation === Na.Elevation;
	}).map((Na) => {
		return Na.Name
	})
	console.log(elevrup)
	
}

//Return the agents of death for the ten most deadly eruptions.

topTen() {
	const tpt = volcanoes.filter((Na) =>{
		return Na.DEATHS //& Na.Agent != ''
	}).sort(function(a,b){return (b-a)}).slice(0,20).map((Na) => {
		return Na.Agent
			})
      console.log(tpt) 

}


}
const volcanoAnalyzer = new VolcanoAnalyzer();
volcanoAnalyzer.eruptedInEighties();
volcanoAnalyzer.vei6Names();
volcanoAnalyzer.eruptdh();
volcanoAnalyzer.tsunami();
volcanoAnalyzer.mostvol();
volcanoAnalyzer.eruPerCountry('Japan');
volcanoAnalyzer.avgElev();
volcanoAnalyzer.volType();
volcanoAnalyzer.northErup();
volcanoAnalyzer.southErup();
volcanoAnalyzer.elevErup(1592);
volcanoAnalyzer.topTen();
