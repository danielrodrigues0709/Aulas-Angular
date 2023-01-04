const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const cidades = document.getElementById('cidades');
const uf = document.getElementById('uf');

window.addEventListener('load', async () => {
  const request = await fetch(urlUF);
  const response = await request.json();

  const options = document.createElement('optgroup');
  options.setAttribute('label', 'UFs');
  response.map(uf => 
    options.innerHTML += `<option>${uf.sigla}</option>` 
  );

  uf.append(options);
});

uf.addEventListener('change', async (event) => {
  const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/municipios`;
  const request = await fetch(urlCidades);
  const response = await request.json();

  let options = '';
  response.map(cidade => {
    options += `<option>${cidade.nome}</option>`
  });

  cidades.innerHTML += options;
})

// temos um bug ao selecionar um proximo estado que irá incremntar a lista com mais municipios ao invés de limpar e trazer a lista de cidades somente daquele estado

uf.addEventListener('click', function() {
  cidades.innerHTML = `<option></option>`;
})