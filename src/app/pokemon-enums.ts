export enum PokemonColour {
    fire = 'orangered',
    water = 'deepskyblue',
    grass = 'limegreen',
    electric = 'gold',
    psychic = 'plum',
    ice = 'lightblue',
    ground = 'saddlebrown',
    rock = 'tan',
    fairy = 'pink',
    fighting = 'firebrick',
    flying = 'skyblue',
    bug = 'greenyellow',
    poison = 'mediumorchid',
    ghost = 'rebeccapurple',
    dragon = 'royalblue',
    steel = 'dimgray',
    normal = 'lightslategrey',
    dark = 'darkslategrey',
  }
  
  type PokemonColorKeys = keyof typeof PokemonColour;
  
  export const getTypeColour = (type: PokemonColorKeys): string => {
    return PokemonColour[type] || 'gray'; // Default color if type not found
  };
  