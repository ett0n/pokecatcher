export function fillInPokeball(lifes) {
  const tabPokeballTemp = [];
  for (let i = 0; i < lifes; i++) {
    tabPokeballTemp[i] = `<div class="gs-pokeball"></div>`;
  }
  return tabPokeballTemp;
}
