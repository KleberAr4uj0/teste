function adicionarParticipantes() {
    const participantes = document.getElementById('participantes');
    const mensagem = document.getElementById('mensagem');
    const listaParticipantes = document.getElementById('listaDeParticipantes');
    const texto = participantes.value.trim();

    if (texto === '' || /\d/.test(texto)) {
      mensagem.textContent = 'Sem número';
      listaParticipantes.classList.add("lista-apagada");
      return
    } else {
      mensagem.textContent = '';
      listaParticipantes.classList.remove("lista-apagada");
  }

    

    const nomes = texto.split(',').map(nome => nome.trim()).filter(nome => nome !== '');

    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        

        const lixeira = document.createElement('div');
        lixeira.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
             style="fill:#00cec9;">
          <g fill="##00cec9" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(2,2)">
              <path d="M49,1c-1.66,0 -3,1.34 -3,3c0,1.66 1.34,3 3,3h30c1.66,0 3,-1.34 3,-3c0,-1.66 -1.34,-3 -3,-3zM24,15c-7.17,0 -13,5.83 -13,13c0,7.17 5.83,13 13,13h77v63c0,9.37 -7.63,17 -17,17h-40c-9.37,0 -17,-7.63 -17,-17v-52c0,-1.66 -1.34,-3 -3,-3c-1.66,0 -3,1.34 -3,3v52c0,12.68 10.32,23 23,23h40c12.68,0 23,-10.32 23,-23v-63.35937c5.72,-1.36 10,-6.50062 10,-12.64062c0,-7.17 -5.83,-13 -13,-13zM24,21h80c3.86,0 7,3.14 7,7c0,3.86 -3.14,7 -7,7h-80c-3.86,0 -7,-3.14 -7,-7c0,-3.86 3.14,-7 7,-7zM50,55c-1.66,0 -3,1.34 -3,3v46c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-46c0,-1.66 -1.34,-3 -3,-3zM78,55c-1.66,0 -3,1.34 -3,3v46c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-46c0,-1.66 -1.34,-3 -3,-3z"></path>
            </g>
          </g>
        </svg>
      `;
      
        lixeira.classList.add('lixeira');
        lixeira.style.cursor = 'pointer';
        lixeira.style.display = 'inline-block';
        lixeira.style.marginLeft = '10px';

        
        lixeira.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(lixeira);
        listaParticipantes.appendChild(li);
    });

    participantes.value = ''; 
}
function sortearNomes() {
    
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const resultado = document.getElementById('resultado');
  
    let nomes = Array.from(listaDeParticipantes.querySelectorAll('li')).map(li => li.textContent);
  
   
  
    resultado.style.color = '#ecf0f1';
    resultado.style.display = 'block';
  
    let contador = 10;
  
    const intervalo = setInterval(() => {
      resultado.textContent = contador;
      contador--;
  
      if (contador < 0) {
        clearInterval(intervalo);
  
        
        for (let i = nomes.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [nomes[i], nomes[j]] = [nomes[j], nomes[i]];
        }
  
        const selecionados = nomes.slice(0, quantidade);
        resultado.innerHTML = selecionados.map(nome => `
          <div style="display: flex; align-items: center; margin-bottom: 8px; justify-content: center;">
            <span style="font-size: 1.2rem;">${nome}</span>
            <img src="https://img.icons8.com/ios/50/00cec9/confetti.png" alt="Confete" style="width: 2rem; margin-left: 10px;">
          </div>
        `).join('');
        
      
      }
    }, 1000);
  }
  
  