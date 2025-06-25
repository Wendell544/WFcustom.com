// Elementos DOM
const robotText = document.getElementById('robot-text');
const categoryTitle = document.getElementById('category-title');
const recipesList = document.getElementById('recipes-list');
const categoryButtons = document.querySelectorAll('.category-btn');
const installButton = document.getElementById('install-btn');
const installPrompt = document.querySelector('.pwa-install-prompt');

// Variáveis globais
let currentCategory = '';

// Frases do robô por período do dia
const greetings = {
    morning: "Bom dia! Aqui vão algumas receitas leves e nutritivas para você começar bem.",
    lunch: "Hora do almoço! Que tal uma refeição balanceada e saborosa?",
    afternoon: "Boa tarde! Um lanche saudável para recarregar as energias.",
    evening: "Boa noite! Um jantar leve para fechar o dia com saúde."
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Determinar categoria baseado na hora
    const hour = new Date().getHours();
    let period = 'morning';

    if (hour >= 12 && hour < 15) {
        period = 'lunch';
        currentCategory = 'lunch';
    } else if (hour >= 15 && hour < 18) {
        period = 'afternoon';
        currentCategory = 'snack';
    } else if (hour >= 18 || hour < 6) {
        period = 'evening';
        currentCategory = 'dinner';
    } else {
        period = 'morning';
        currentCategory = 'breakfast';
    }

    // Atualizar mensagem do robô
    robotText.textContent = greetings[period];

    // Carregar receitas da categoria
    loadRecipes(currentCategory);

    // Ativar o botão da categoria atual
    categoryButtons.forEach(button => {
        if (button.dataset.category === currentCategory) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }

        // Adicionar evento de clique
        button.addEventListener('click', () => {
            currentCategory = button.dataset.category;
            loadRecipes(currentCategory);
            // Atualizar botões ativos
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Configurar PWA Install Prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installPrompt.style.display = 'block';
    });

    installButton.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                installPrompt.style.display = 'none';
            }
            deferredPrompt = null;
        }
    });

    // Esconder prompt se app já instalado
    window.addEventListener('appinstalled', () => {
        installPrompt.style.display = 'none';
    });
});

// Função para carregar receitas
function loadRecipes(category) {
    // Atualizar título da categoria
    const categoryNames = {
        breakfast: "Café da Manhã",
        lunch: "Almoço",
        snack: "Lanche da Tarde",
        dinner: "Jantar"
    };
    categoryTitle.textContent = categoryNames[category];

    // Limpar lista de receitas
    recipesList.innerHTML = '';

    // Obter receitas da categoria
    const categoryRecipes = recipes[category];

    // Adicionar cada receita à lista
    categoryRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredientes:</strong></p>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <p><strong>Modo de preparo:</strong></p>
            <ol>
                ${recipe.preparation.map(step => `<li>${step}</li>`).join('')}
            </ol>
            ${recipe.healthyTips ? `<p><strong>Dica:</strong> ${recipe.healthyTips}</p>` : ''}
            <div class="nutrition-info">
                <span>Calorias: ${recipe.nutrition.calories}</span>
                <span>Gorduras: ${recipe.nutrition.fat}g</span>
                <span>Proteínas: ${recipe.nutrition.protein}g</span>
                <span>Carboidratos: ${recipe.nutrition.carbs}g</span>
            </div>
        `;
        recipesList.appendChild(recipeCard);
    });
}
