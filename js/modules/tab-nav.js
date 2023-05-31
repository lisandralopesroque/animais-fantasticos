export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    //deixar o primeiro item, no caso texto, ativo e vizivel desde o inicio
    tabContent[0].classList.add("ativo");

    // função que adiciona a classe ativo no item do tabContent de acordo com o indez(posição) em que ele está
    // e remove o ativo das outras quando uma for ativada
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    // função que adiciona um evento de click pra cada um dos itens de acordo com o seu index
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}






