// Enum
// Los enumerados permiten definir un conjunto de constantes con nombre
// Tienen la ventaja e adaptarse al contexto de la aplicacion

// Orientacion para fotografias
// const lanscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Square = 2,
    Panorama = 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape)
console.log('landscape', PhotoOrientation[landscape])

enum PictureOrientation {
    Landscape = 10, // 10
    Portrait, // 11
    Square, // 12
    Panorama // 13
}

console.log('portrait', PictureOrientation.Portrait)

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    MExico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'

}

const country: Country = Country.Colombia;

console.log('country', country);

enum DiasLaborales {
    Lunes = 'MON',
    Martes = 'TUE',
    Miercoles = 'WED',
    Jueves = 'THU',
    Viernes = 'FRI'
  }
  
  enum DiasFinSemana {
    Sabado = 'SAT',
    Domingo = 'SUN'
  }
  
  const Semana = {
    ...DiasLaborales,
    ...DiasFinSemana
  }
  
  console.log(Semana.Lunes); // MON
  console.log(Semana.Sabado); // SAT