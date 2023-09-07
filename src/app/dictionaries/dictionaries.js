const dictionaries = {
  homepage: () => import('./homepage.json').then((module) => module.default),
  propuestas: () => import('./propuestas.json').then((module) => module.default),
  eventos: () => import('./eventos.json').then((module) => module.default),
  xochitl: () => import('./xochitl.json').then((module) => module.default),
};
 
export const getDictionary = async (page) => dictionaries[page]();