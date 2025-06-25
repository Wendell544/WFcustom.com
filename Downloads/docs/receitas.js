const recipes = {
    breakfast: [
        // Receita existente (Omelete de Espinafre)
        {
            name: "Omelete de Espinafre",
            ingredients: [
                "2 ovos",
                "1 xícara de espinafre fresco",
                "1/4 de xícara de queijo feta",
                "Sal e pimenta a gosto",
                "1 colher de chá de azeite"
            ],
            preparation: [
                "Bata os ovos em uma tigela e tempere com sal e pimenta",
                "Aqueça o azeite em uma frigideira antiaderente em fogo médio",
                "Adicione o espinafre e refogue até murchar",
                "Despeje os ovos batidos sobre o espinafre",
                "Cozinhe até que os ovos comecem a firmar, depois espalhe o queijo feta por cima",
                "Dobre a omelete ao meio e cozinhe por mais 1-2 minutos"
            ],
            healthyTips: "Adicione tomate picado para mais sabor e nutrientes",
            nutrition: {
                calories: 280,
                fat: 20,
                protein: 19,
                carbs: 4
            }
        },
        // 14 novas receitas
        {
            name: "Panqueca Proteica de Banana",
            ingredients: [
                "1 banana madura",
                "2 ovos",
                "2 colheres de aveia em flocos",
                "1 colher de chia",
                "1 pitada de canela",
                "Óleo de coco para untar"
            ],
            preparation: [
                "Amasse a banana em uma tigela",
                "Adicione ovos, aveia, chia e canela. Misture bem",
                "Aqueça uma frigideira antiaderente com óleo de coco",
                "Despeje porções da massa e cozinhe por 2-3 minutos de cada lado",
                "Sirva com frutas frescas"
            ],
            healthyTips: "Use banana bem madura para naturalmente doce",
            nutrition: {
                calories: 230,
                fat: 8,
                protein: 12,
                carbs: 28
            }
        },
        {
            name: "Tapioca Fitness de Frango",
            ingredients: [
                "3 colheres de goma de tapioca",
                "50g de frango desfiado",
                "1/4 de abobrinha ralada",
                "1 colher de requeijão light",
                "Orégano e sal a gosto"
            ],
            preparation: [
                "Hidrate a goma com água até formar pasta homogênea",
                "Peneire em frigideira quente, virando dos dois lados",
                "Misture frango, abobrinha e requeijão",
                "Espalhe o recheio na tapioca e dobre",
                "Cozinhe por 1 minuto para gratinar"
            ],
            healthyTips: "Adicione linhaça para fibras extras",
            nutrition: {
                calories: 210,
                fat: 4,
                protein: 18,
                carbs: 25
            }
        },
        {
            name: "Smoothie Bowl Energético",
            ingredients: [
                "1 banana congelada",
                "1/2 xícara de morangos",
                "1/4 de abacate",
                "1 colher de sopa de aveia",
                "1 colher de chá de mel",
                "Granola sem açúcar para topping"
            ],
            preparation: [
                "Bata todos os ingredientes no liquidificador até cremoso",
                "Despeje em uma tigela",
                "Decore com granola e frutas frescas",
                "Sirva imediatamente"
            ],
            healthyTips: "Use leite vegetal para versão vegana",
            nutrition: {
                calories: 240,
                fat: 7,
                protein: 4,
                carbs: 42
            }
        },
        {
            name: "Overnight Oats de Cacau",
            ingredients: [
                "1/2 xícara de aveia em flocos",
                "1 colher de cacau em pó 100%",
                "1 colher de chia",
                "3/4 xícara de leite de amêndoa",
                "1 colher de mel",
                "1/2 banana em rodelas"
            ],
            preparation: [
                "Misture todos os ingredientes secos em um pote",
                "Adicione leite e mel, mexendo bem",
                "Leve à geladeira por 8 horas",
                "Na hora de servir, adicione banana"
            ],
            healthyTips: "Adicione nozes para crocância",
            nutrition: {
                calories: 280,
                fat: 8,
                protein: 9,
                carbs: 45
            }
        },
        {
            name: "Crepioca de Queijo Light",
            ingredients: [
                "2 colheres de goma de tapioca",
                "1 ovo",
                "2 colheres de queijo cottage",
                "Tomate cereja picado",
                "Manjericão fresco"
            ],
            preparation: [
                "Misture goma, ovo e queijo cottage",
                "Despeje em frigideira antiaderente quente",
                "Vire após 2 minutos",
                "Recheie com tomate e manjericão",
                "Dobre e sirva"
            ],
            healthyTips: "Use ervas frescas para mais sabor",
            nutrition: {
                calories: 180,
                fat: 6,
                protein: 14,
                carbs: 18
            }
        },
        {
            name: "Mingau de Aveia Detox",
            ingredients: [
                "1/2 xícara de aveia em flocos",
                "1 xícara de leite vegetal",
                "1 maçã ralada",
                "1 colher de chá de canela",
                "1 colher de semente de abóbora"
            ],
            preparation: [
                "Leve todos os ingredientes ao fogo médio",
                "Cozinhe por 5-7 minutos mexendo sempre",
                "Desligue quando atingir textura cremosa",
                "Polvilhe sementes de abóbora"
            ],
            healthyTips: "Adicione gengibre ralado para sabor picante",
            nutrition: {
                calories: 220,
                fat: 5,
                protein: 7,
                carbs: 38
            }
        },
        {
            name: "Ovos Mexidos com Tomate Seco",
            ingredients: [
                "2 ovos",
                "1 colher de queijo ricota amassado",
                "2 tomates secos picados",
                "1 colher de cebolinha fresca",
                "Pimenta-do-reino a gosto"
            ],
            preparation: [
                "Bata os ovos com ricota",
                "Aqueça frigideira antiaderente",
                "Adicione os ovos e mexa constantemente",
                "Incorpore tomate seco antes de finalizar",
                "Finalize com cebolinha e pimenta"
            ],
            healthyTips: "Use tomate seco sem conservantes",
            nutrition: {
                calories: 190,
                fat: 12,
                protein: 15,
                carbs: 5
            }
        },
        {
            name: "Waffle Integral Vegano",
            ingredients: [
                "1 xícara de farinha de arroz",
                "1 banana amassada",
                "1/2 xícara de água",
                "1 colher de fermento químico",
                "1 colher de óleo de coco"
            ],
            preparation: [
                "Misture todos os ingredientes até homogeneizar",
                "Aqueça a máquina de waffle",
                "Despeje porção da massa",
                "Cozinhe por 3-4 minutos até dourar",
                "Sirva com frutas vermelhas"
            ],
            healthyTips: "Polvilhe coco ralado antes de servir",
            nutrition: {
                calories: 170,
                fat: 4,
                protein: 3,
                carbs: 32
            }
        },
        {
            name: "Pudim de Chia com Frutas",
            ingredients: [
                "3 colheres de sementes de chia",
                "1 xícara de leite de coco light",
                "1/2 xícara de manga picada",
                "1 colher de chá de extrato de baunilha"
            ],
            preparation: [
                "Misture chia, leite de coco e baunilha",
                "Deixe na geladeira por 4 horas",
                "Monte em camadas com a manga",
                "Decore com hortelã"
            ],
            healthyTips: "Use frutas da estação",
            nutrition: {
                calories: 180,
                fat: 10,
                protein: 5,
                carbs: 20
            }
        },
        {
            name: "Avocado Toast Fit",
            ingredients: [
                "1 fatia de pão sem glúten",
                "1/2 abacate",
                "Suco de 1/2 limão",
                "Pimenta calabresa",
                "Sementes de girassol"
            ],
            preparation: [
                "Toaste o pão até dourar",
                "Amasse o abacate com limão",
                "Espalhe sobre o pão",
                "Tempere com pimenta",
                "Polvilhe sementes"
            ],
            healthyTips: "Adicione flocos de pimenta vermelha",
            nutrition: {
                calories: 220,
                fat: 15,
                protein: 5,
                carbs: 20
            }
        },
        {
            name: "Shake de Abacate com Cacau",
            ingredients: [
                "1/2 abacate",
                "1 colher de cacau em pó",
                "1 xícara de leite de aveia",
                "1 colher de proteína vegetal",
                "Gelo a gosto"
            ],
            preparation: [
                "Bata todos os ingredientes no liquidificador",
                "Sirva imediatamente"
            ],
            healthyTips: "Adicione canela para controle glicêmico",
            nutrition: {
                calories: 250,
                fat: 12,
                protein: 15,
                carbs: 25
            }
        },
        {
            name: "Omelete de Cogumelos Shitake",
            ingredients: [
                "2 ovos",
                "4 cogumelos shitake fatiados",
                "1 colher de azeite",
                "1 colher de salsa picada",
                "Sal rosa a gosto"
            ],
            preparation: [
                "Refogue os cogumelos no azeite",
                "Bata os ovos com sal",
                "Despeje sobre os cogumelos",
                "Cozinhe em fogo baixo até firmar",
                "Finalize com salsa"
            ],
            healthyTips: "Use shitake fresco para melhor textura",
            nutrition: {
                calories: 210,
                fat: 15,
                protein: 14,
                carbs: 6
            }
        },
        {
            name: "Pão de Queijo Fit",
            ingredients: [
                "2 colheres de polvilho doce",
                "1 colher de requeijão light",
                "1 ovo",
                "1 colher de queijo minas ralado",
                "Orégano a gosto"
            ],
            preparation: [
                "Misture todos os ingredientes",
                "Modele bolinhas",
                "Asse em forno pré-aquecido a 180°C por 15 minutos",
                "Sirva quente"
            ],
            healthyTips: "Adicione chia à massa para fibras",
            nutrition: {
                calories: 150,
                fat: 7,
                protein: 9,
                carbs: 15
            }
        },
        {
            name: "Smoothie Verde Antiox",
            ingredients: [
                "1 folha de couve",
                "1/2 pepino japonês",
                "1 maçã verde",
                "Suco de 1 limão",
                "1 pedaço de gengibre",
                "200ml de água de coco"
            ],
            preparation: [
                "Bata todos os ingredientes no liquidificador",
                "Coe se necessário",
                "Sirva gelado"
            ],
            healthyTips: "Adicione hortelã para refrescância",
            nutrition: {
                calories: 120,
                fat: 0,
                protein: 2,
                carbs: 28
            }
        }
    ],
    lunch: [
        // Receita existente (Salada de Quinoa com Frango)
        {
            name: "Salada de Quinoa com Frango",
            ingredients: [
                "1/2 xícara de quinoa cozida",
                "100g de peito de frango grelhado e desfiado",
                "1/2 pepino picado",
                "10 tomates cereja cortados ao meio",
                "1/4 de xícara de folhas de manjericão fresco",
                "1 colher de sopa de azeite",
                "Suco de 1/2 limão",
                "Sal e pimenta a gosto"
            ],
            preparation: [
                "Em uma tigela grande, misture a quinoa, o frango, o pepino e os tomates",
                "Tempere com azeite, suco de limão, sal e pimenta",
                "Misture bem e finalize com folhas de manjericão"
            ],
            healthyTips: "Use quinoa integral para mais fibras",
            nutrition: {
                calories: 350,
                fat: 12,
                protein: 28,
                carbs: 35
            }
        },
        // 14 novas receitas
        {
            name: "Bowl Mexicano de Carne Moída",
            ingredients: [
                "100g de carne moída magra",
                "1/2 xícara de arroz integral cozido",
                "1/4 de abacate",
                "1/4 de xícara de milho",
                "1/4 de xícara de feijão preto",
                "Coentro fresco",
                "Suco de limão",
                "Páprica picante"
            ],
            preparation: [
                "Doure a carne moída com páprica",
                "Monte o bowl com arroz, feijão, milho e carne",
                "Adicione abacate em cubos",
                "Regue com suco de limão",
                "Finalize com coentro"
            ],
            healthyTips: "Use pimenta caiena para acelerar metabolismo",
            nutrition: {
                calories: 420,
                fat: 15,
                protein: 30,
                carbs: 45
            }
        },
        {
            name: "Salada de Lentilha Vegana",
            ingredients: [
                "1 xícara de lentilhas cozidas",
                "1 beterraba ralada",
                "1/2 maçã verde em cubos",
                "1 colher de mostarda dijon",
                "Suco de 1 laranja",
                "Hortelã fresca",
                "Nozes picadas"
            ],
            preparation: [
                "Misture lentilhas, beterraba e maçã",
                "Prepare o molho com mostarda e suco de laranja",
                "Tempere a salada",
                "Decore com hortelã e nozes"
            ],
            healthyTips: "Deixe marinando por 30 minutos antes de servir",
            nutrition: {
                calories: 320,
                fat: 8,
                protein: 18,
                carbs: 45
            }
        },
        {
            name: "Wrap de Atum Light",
            ingredients: [
                "1 tortilha integral",
                "1 lata de atum light",
                "2 colheres de homus",
                "Folhas de alface",
                "Tomate em rodelas",
                "Cenoura ralada"
            ],
            preparation: [
                "Espalhe homus na tortilha",
                "Adicione atum escorrido",
                "Coloque camadas de vegetais",
                "Enrole firmemente",
                "Corte ao meio"
            ],
            healthyTips: "Use folhas de couve como alternativa low carb",
            nutrition: {
                calories: 290,
                fat: 9,
                protein: 25,
                carbs: 30
            }
        },
        {
            name: "Frango Grelhado com Aspargos",
            ingredients: [
                "1 filé de frango",
                "8 aspargos",
                "1 batata doce pequena",
                "Azeite extravirgem",
                "Alho em pó",
                "Pimenta rosa"
            ],
            preparation: [
                "Tempere o frango com alho e pimenta",
                "Asse batata doce em cubos por 20 minutos",
                "Grelhe frango e aspargos por 10 minutos",
                "Regue com azeite antes de servir"
            ],
            healthyTips: "Marine o frango em limão por 30 minutos",
            nutrition: {
                calories: 380,
                fat: 10,
                protein: 35,
                carbs: 35
            }
        },
        {
            name: "Salada de Grão-de-Bico Torrado",
            ingredients: [
                "1 xícara de grão-de-bico cozido",
                "1 abobrinha em cubos",
                "1 pimentão amarelo",
                "1 colher de tahine",
                "Suco de limão siciliano",
                "Cominho em pó"
            ],
            preparation: [
                "Asse abobrinha e pimentão com cominho",
                "Toaste grão-de-bico na airfryer por 10 minutos",
                "Misture todos os ingredientes",
                "Tempere com tahine e limão"
            ],
            healthyTips: "Adicione salsinha fresca para frescor",
            nutrition: {
                calories: 310,
                fat: 10,
                protein: 15,
                carbs: 40
            }
        },
        {
            name: "Peixe Assado com Chimichurri",
            ingredients: [
                "1 filé de pescada",
                "1 batata baroa",
                "Brócolis ninja",
                "1 colher de azeite",
                "1 colher de chimichurri"
            ],
            preparation: [
                "Tempere o peixe com chimichurri",
                "Cozinhe batata baroa em rodelas",
                "Asse peixe e brócolis por 15 minutos",
                "Monte o prato com todos os elementos"
            ],
            healthyTips: "Use ervas frescas para o chimichurri caseiro",
            nutrition: {
                calories: 300,
                fat: 12,
                protein: 25,
                carbs: 25
            }
        },
        {
            name: "Tabule de Quinoa",
            ingredients: [
                "1 xícara de quinoa cozida",
                "1 tomate picado",
                "1 pepino japonês",
                "Salsinha e hortelã frescas",
                "Suco de 1 limão",
                "Azeite a gosto"
            ],
            preparation: [
                "Misture quinoa com vegetais picados",
                "Adicione ervas frescas",
                "Tempere com limão e azeite",
                "Leve à geladeira por 30 minutos"
            ],
            healthyTips: "Adicione cubos de abacate antes de servir",
            nutrition: {
                calories: 280,
                fat: 10,
                protein: 8,
                carbs: 40
            }
        },
        {
            name: "Espaguete de Abobrinha com Almôndegas",
            ingredients: [
                "2 abobrinhas grandes",
                "150g de carne moída magra",
                "1/2 xícara de molho de tomate caseiro",
                "Manjericão fresco",
                "1 ovo",
                "Farinha de aveia"
            ],
            preparation: [
                "Faça almôndegas com carne, ovo e farinha de aveia",
                "Asse as almôndegas por 20 minutos",
                "Corte abobrinhas em espaguete com espiralizador",
                "Refogue o 'espaguete' rapidamente",
                "Misture com molho e almôndegas"
            ],
            healthyTips: "Use carne de peru para menos gordura",
            nutrition: {
                calories: 350,
                fat: 15,
                protein: 28,
                carbs: 25
            }
        },
        {
            name: "Cuscuz com Vegetais",
            ingredients: [
                "1 xícara de cuscuz marroquino",
                "1 cenoura ralada",
                "1/2 pimentão vermelho picado",
                "Salsinha e cebolinha",
                "1 colher de azeite",
                "Caldo de legumes light"
            ],
            preparation: [
                "Hidrate o cuscuz com caldo quente",
                "Misture os vegetais crus",
                "Tempere com azeite e ervas",
                "Deixe descansar por 5 minutos"
            ],
            healthyTips: "Adicione grão-de-bico cozido para proteína",
            nutrition: {
                calories: 250,
                fat: 6,
                protein: 8,
                carbs: 40
            }
        },
        {
            name: "Moqueca de Palmito Vegana",
            ingredients: [
                "1 vidro de palmito pupunha",
                "1 cebola em rodelas",
                "1 pimentão verde",
                "1 tomate picado",
                "Leite de coco light",
                "Azeite de dendê",
                "Coentro"
            ],
            preparation: [
                "Refogue cebola, pimentão e tomate",
                "Adicione palmito e leite de coco",
                "Cozinhe por 10 minutos em fogo baixo",
                "Finalize com dendê e coentro"
            ],
            healthyTips: "Sirva com arroz de couve-flor",
            nutrition: {
                calories: 280,
                fat: 15,
                protein: 8,
                carbs: 30
            }
        },
        {
            name: "Frango ao Curry Light",
            ingredients: [
                "200g de frango em cubos",
                "1/2 abobrinha picada",
                "1/2 berinjela picada",
                "1 colher de pasta de curry vermelho",
                "Leite de coco light",
                "Manjericão tailandês"
            ],
            preparation: [
                "Doure o frango em panela antiaderente",
                "Adicione legumes e refogue",
                "Incorpore pasta de curry e leite de coco",
                "Cozinhe por 15 minutos",
                "Finalize com manjericão"
            ],
            healthyTips: "Use legumes congelados para praticidade",
            nutrition: {
                calories: 320,
                fat: 12,
                protein: 30,
                carbs: 20
            }
        },
        {
            name: "Salada de Rúcula com Melancia",
            ingredients: [
                "2 xícaras de rúcula",
                "1 xícara de melancia em cubos",
                "50g de queijo feta light",
                "Hortelã fresca",
                "Suco de limão",
                "Pimenta-do-reino moída na hora"
            ],
            preparation: [
                "Misture rúcula e melancia",
                "Cubra com queijo feta esfarelado",
                "Tempere com suco de limão",
                "Decore com hortelã e pimenta"
            ],
            healthyTips: "Adicione nozes para textura crocante",
            nutrition: {
                calories: 180,
                fat: 8,
                protein: 7,
                carbs: 22
            }
        },
        {
            name: "Hambúrguer de Feijão Preto",
            ingredients: [
                "1 xícara de feijão preto cozido",
                "2 colheres de farinha de aveia",
                "1/2 cebola picada",
                "1 ovo",
                "Páprica defumada",
                "Alface e tomate para acompanhar"
            ],
            preparation: [
                "Amasse o feijão com garfo",
                "Misture com demais ingredientes",
                "Forme hambúrgueres",
                "Grelhe por 4 minutos de cada lado",
                "Sirve em folha de alface com tomate"
            ],
            healthyTips: "Use linhaça dourada como substituto do ovo para versão vegana",
            nutrition: {
                calories: 280,
                fat: 5,
                protein: 15,
                carbs: 45
            }
        },
        {
            name: "Salmão com Purê de Mandioquinha",
            ingredients: [
                "1 filé de salmão",
                "2 mandioquinhas médias",
                "1 colher de azeite",
                "Salsinha picada",
                "Limão siciliano"
            ],
            preparation: [
                "Cozinhe mandioquinha até amaciar",
                "Amasse com garfo, temperando com sal",
                "Tempere salmão com limão e grelhe",
                "Sirva com purê e decore com salsinha"
            ],
            healthyTips: "Adicione brócolis cozido no vapor",
            nutrition: {
                calories: 380,
                fat: 18,
                protein: 30,
                carbs: 25
            }
        }
    ],
    snack: [
        // Receita existente (Smoothie de Banana e Amendoim)
        {
            name: "Smoothie de Banana e Amendoim",
            ingredients: [
                "1 banana congelada",
                "1 colher de sopa de manteiga de amendoim natural",
                "1 xícara de leite de amêndoa",
                "1 colher de chá de mel (opcional)"
            ],
            preparation: [
                "Coloque todos os ingredientes no liquidificador",
                "Bata até ficar homogêneo",
                "Sirva imediatamente"
            ],
            healthyTips: "Adicione uma colher de proteína em pó para um lanche mais completo",
            nutrition: {
                calories: 220,
                fat: 10,
                protein: 6,
                carbs: 30
            }
        },
        // 14 novas receitas
        {
            name: "Mix de Castanhas Crocante",
            ingredients: [
                "10 amêndoas",
                "5 nozes",
                "1 colher de sementes de abóbora",
                "1 colher de uvas passas",
                "Canela em pó"
            ],
            preparation: [
                "Misture todos os ingredientes secos",
                "Polvilhe canela",
                "Armazene em pote hermético"
            ],
            healthyTips: "Adicione coco seco picado para variedade",
            nutrition: {
                calories: 180,
                fat: 15,
                protein: 6,
                carbs: 8
            }
        },
        {
            name: "Palitos de Cenoura com Guacamole",
            ingredients: [
                "2 cenouras médias",
                "1 abacate pequeno",
                "Suco de 1/2 limão",
                "1/4 de cebola roxa picada",
                "Coentro fresco"
            ],
            preparation: [
                "Corte cenouras em palitos",
                "Amasse abacate com garfo",
                "Misture com limão, cebola e coentro",
                "Sirva os palitos com guacamole"
            ],
            healthyTips: "Adicione pimenta dedo-de-moça picada",
            nutrition: {
                calories: 150,
                fat: 10,
                protein: 2,
                carbs: 15
            }
        },
        {
            name: "Iogurte com Granola Caseira",
            ingredients: [
                "1 pote de iogurte natural",
                "2 colheres de granola caseira",
                "1/2 xícara de frutas vermelhas",
                "1 colher de mel"
            ],
            preparation: [
                "Em um copo, coloque o iogurte",
                "Adicione granola e frutas",
                "Regue com mel"
            ],
            healthyTips: "Use iogurte vegetal para versão vegana",
            nutrition: {
                calories: 200,
                fat: 6,
                protein: 8,
                carbs: 30
            }
        },
        {
            name: "Cookie de Aveia e Banana Vegano",
            ingredients: [
                "1 banana madura amassada",
                "1/2 xícara de aveia em flocos",
                "1 colher de uvas passas",
                "Canela em pó",
                "1 colher de chia"
            ],
            preparation: [
                "Misture todos os ingredientes",
                "Modele cookies em assadeira",
                "Asse a 180°C por 15 minutos"
            ],
            healthyTips: "Adicione nozes picadas para crocância",
            nutrition: {
                calories: 120,
                fat: 2,
                protein: 3,
                carbs: 25
            }
        },
        {
            name: "Maçã com Pasta de Amendoim",
            ingredients: [
                "1 maçã verde",
                "1 colher de pasta de amendoim integral",
                "1 colher de sementes de girassol"
            ],
            preparation: [
                "Corte maçã em gomos",
                "Espalhe pasta de amendoim",
                "Polvilhe sementes"
            ],
            healthyTips: "Regue com mel para adoçar naturalmente",
            nutrition: {
                calories: 190,
                fat: 9,
                protein: 5,
                carbs: 25
            }
        },
        {
            name: "Bolinho de Tapioca com Frango",
            ingredients: [
                "2 colheres de goma de tapioca",
                "1/4 de xícara de frango desfiado",
                "1 colher de requeijão light",
                "Orégano a gosto"
            ],
            preparation: [
                "Misture goma com água até formar massa",
                "Recheie com frango e requeijão",
                "Modele bolinhos",
                "Asse em airfryer por 10 minutos"
            ],
            healthyTips: "Use cottage no lugar do requeijão",
            nutrition: {
                calories: 150,
                fat: 3,
                protein: 12,
                carbs: 20
            }
        },
        {
            name: "Smoothie de Manga e Gengibre",
            ingredients: [
                "1/2 manga palmer",
                "1/2 banana congelada",
                "1 pedaço de gengibre ralado",
                "200ml de água de coco",
                "Hortelã fresca"
            ],
            preparation: [
                "Bata todos os ingredientes no liquidificador",
                "Decore com folhas de hortelã"
            ],
            healthyTips: "Adicione linhaça para fibras extras",
            nutrition: {
                calories: 160,
                fat: 1,
                protein: 2,
                carbs: 38
            }
        },
        {
            name: "Tomate Recheado com Ricota",
            ingredients: [
                "8 tomates cereja",
                "2 colheres de ricota amassada",
                "Orégano fresco",
                "Pimenta preta"
            ],
            preparation: [
                "Corte os tomates ao meio",
                "Retire parte das sementes",
                "Recheie com ricota",
                "Tempere com orégano e pimenta"
            ],
            healthyTips: "Adicione atum ralado para mais proteína",
            nutrition: {
                calories: 90,
                fat: 4,
                protein: 6,
                carbs: 8
            }
        },
        {
            name: "Barrinha de Cereais Caseira",
            ingredients: [
                "1/2 xícara de aveia",
                "1/4 de xícara de uvas passas",
                "1/4 de xícara de nozes picadas",
                "2 colheres de mel",
                "1 colher de chia"
            ],
            preparation: [
                "Misture todos os ingredientes",
                "Pressione em forma forrada",
                "Leve ao freezer por 30 minutos",
                "Corte em barras"
            ],
            healthyTips: "Use tâmaras picadas como aglutinante natural",
            nutrition: {
                calories: 130,
                fat: 6,
                protein: 3,
                carbs: 18
            }
        },
        {
            name: "Chips de Batata Doce Assados",
            ingredients: [
                "1 batata doce média",
                "1 colher de azeite",
                "Páprica defumada",
                "Alecrim seco"
            ],
            preparation: [
                "Corte batata doce em fatias finas",
                "Misture com azeite e temperos",
                "Asse em forno a 180°C por 20 minutos",
                "Vire na metade do tempo"
            ],
            healthyTips: "Use mandolin para cortes uniformes",
            nutrition: {
                calories: 140,
                fat: 5,
                protein: 2,
                carbs: 22
            }
        },
        {
            name: "Queijo Cottage com Mel e Nozes",
            ingredients: [
                "1/2 xícara de queijo cottage",
                "1 colher de mel",
                "1 colher de nozes picadas",
                "Canela em pó"
            ],
            preparation: [
                "Coloque cottage em tigela",
                "Regue com mel",
                "Polvilhe nozes e canela"
            ],
            healthyTips: "Adicione frutas vermelhas frescas",
            nutrition: {
                calories: 180,
                fat: 7,
                protein: 14,
                carbs: 15
            }
        },
        {
            name: "Picolé de Frutas Vermelhas",
            ingredients: [
                "1 xícara de frutas vermelhas",
                "1/2 xícara de água de coco",
                "Suco de 1/2 limão",
                "Folhas de hortelã"
            ],
            preparation: [
                "Bata todos os ingredientes no liquidificador",
                "Coe se necessário",
                "Despeje em forminhas de picolé",
                "Leve ao freezer por 4 horas"
            ],
            healthyTips: "Adicione pedaços de fruta inteira antes de congelar",
            nutrition: {
                calories: 60,
                fat: 0,
                protein: 1,
                carbs: 15
            }
        },
        {
            name: "Ovo Cozido com Sal Rosa",
            ingredients: [
                "1 ovo cozido",
                "Pitada de sal rosa",
                "Pimenta-do-reino moída",
                "Orégano seco"
            ],
            preparation: [
                "Cozinhe o ovo por 8 minutos",
                "Descasque e corte ao meio",
                "Tempere com sal, pimenta e orégano"
            ],
            healthyTips: "Sirva com palitos de aipo",
            nutrition: {
                calories: 80,
                fat: 5,
                protein: 7,
                carbs: 1
            }
        },
        {
            name: "Abacate com Mel e Linhaça",
            ingredients: [
                "1/2 abacate",
                "1 colher de chá de mel",
                "1 colher de linhaça dourada",
                "Gergelim preto"
            ],
            preparation: [
                "Corte o abacate ao meio",
                "Regue com mel",
                "Polvilhe linhaça e gergelim"
            ],
            healthyTips: "Adicione gotas de limão para evitar oxidação",
            nutrition: {
                calories: 190,
                fat: 15,
                protein: 2,
                carbs: 15
            }
        }
    ],
    dinner: [
        // Receita existente (Salmão Assado com Aspargos)
        {
            name: "Salmão Assado com Aspargos",
            ingredients: [
                "1 filé de salmão (150g)",
                "1 maço de aspargos",
                "1 colher de sopa de azeite",
                "Suco de 1/2 limão",
                "1 dente de alho picado",
                "Sal e pimenta a gosto",
                "Raspas de limão para decorar"
            ],
            preparation: [
                "Pré-aqueça o forno a 200°C",
                "Tempere o salmão com sal, pimenta, alho e metade do suco de limão",
                "Em uma assadeira, coloque os aspargos e regue com o azeite e o restante do suco de limão. Tempere com sal e pimenta",
                "Coloque o salmão sobre os aspargos",
                "Asse por 12-15 minutos, até o salmão cozinhar",
                "Decore com raspas de limão"
            ],
            healthyTips: "Use aspargos frescos para melhor sabor e textura",
            nutrition: {
                calories: 320,
                fat: 18,
                protein: 30,
                carbs: 8
            }
        },
        // 14 novas receitas
        {
            name: "Creme de Abóbora com Gengibre",
            ingredients: [
                "2 xícaras de abóbora cabotiá",
                "1 cebola picada",
                "1 dente de alho",
                "1 colher de gengibre ralado",
                "500ml de caldo de legumes",
                "1 colher de azeite",
                "Nozes picadas para decorar"
            ],
            preparation: [
                "Asse abóbora em cubos por 20 minutos",
                "Refogue cebola e alho no azeite",
                "Adicione abóbora, gengibre e caldo",
                "Cozinhe por 15 minutos",
                "Bata no liquidificador até cremoso",
                "Decore com nozes"
            ],
            healthyTips: "Adicione cúrcuma para cor e propriedades anti-inflamatórias",
            nutrition: {
                calories: 180,
                fat: 8,
                protein: 5,
                carbs: 25
            }
        },
        {
            name: "Frango ao Molho de Mostarda e Mel",
            ingredients: [
                "1 filé de frango",
                "1 colher de mostarda dijon",
                "1 colher de mel",
                "Suco de 1/2 limão",
                "1 colher de azeite",
                "Aleo-poró fatiado"
            ],
            preparation: [
                "Tempere frango com sal e pimenta",
                "Grelhe por 5 minutos de cada lado",
                "Misture mostarda, mel e suco de limão",
                "Regue o frango com o molho",
                "Finalize com alho-poró refogado"
            ],
            healthyTips: "Sirva com purê de couve-flor",
            nutrition: {
                calories: 280,
                fat: 10,
                protein: 30,
                carbs: 15
            }
        },
        {
            name: "Ratatouille de Forno Vegano",
            ingredients: [
                "1 berinjela",
                "1 abobrinha",
                "1 pimentão vermelho",
                "2 tomates",
                "1 cebola",
                "Ervas provençais",
                "2 colheres de azeite"
            ],
            preparation: [
                "Corte todos os vegetais em rodelas finas",
                "Arrume em camadas em um refratário",
                "Tempere com ervas, sal e azeite",
                "Asse a 180°C por 30 minutos",
                "Finalize com manjericão fresco"
            ],
            healthyTips: "Adicione tofu marinado para proteína",
            nutrition: {
                calories: 200,
                fat: 10,
                protein: 5,
                carbs: 25
            }
        },
        {
            name: "Omelete de Vegetais",
            ingredients: [
                "2 ovos",
                "1/4 de pimentão picado",
                "2 cogumelos shiitake",
                "1/2 xícara de espinafre",
                "1 colher de queijo minas light",
                "Cebolinha picada"
            ],
            preparation: [
                "Bata os ovos com sal",
                "Refogue os vegetais rapidamente",
                "Despeje os ovos sobre os vegetais",
                "Cozinhe em fogo baixo até firmar",
                "Polvilhe queijo e cebolinha"
            ],
            healthyTips: "Use claras para menos calorias",
            nutrition: {
                calories: 210,
                fat: 12,
                protein: 16,
                carbs: 8
            }
        },
        {
            name: "Filé de Peixe ao Molho de Maracujá",
            ingredients: [
                "1 filé de pescada branca",
                "Polpa de 1 maracujá",
                "1 colher de manteiga ghee",
                "1 colher de farinha de arroz",
                "Cebolinha picada"
            ],
            preparation: [
                "Tempere o peixe com sal e limão",
                "Grelhe por 3 minutos de cada lado",
                "Derreta manteiga e misture farinha",
                "Adicione polpa de maracujá e cozinhe até engrossar",
                "Regue o peixe com o molho"
            ],
            healthyTips: "Sirva com arroz de couve-flor",
            nutrition: {
                calories: 250,
                fat: 10,
                protein: 28,
                carbs: 12
            }
        },
        {
            name: "Legumes Refogados com Tofu",
            ingredients: [
                "150g de tofu firme",
                "1 brócolis ninja",
                "1 cenoura em rodelas",
                "1 colher de gengibre ralado",
                "1 colher de óleo de gergelim",
                "Molho shoyu light"
            ],
            preparation: [
                "Corte tofu em cubos e doure",
                "Refogue legumes no óleo de gergelim",
                "Adicione gengibre e shoyu",
                "Incorpore tofu e cozinhe por 5 minutos"
            ],
            healthyTips: "Adicione castanha de caju torrada",
            nutrition: {
                calories: 220,
                fat: 12,
                protein: 15,
                carbs: 15
            }
        },
        {
            name: "Espetinho de Carne com Pimentões",
            ingredients: [
                "150g de patinho em cubos",
                "1 pimentão amarelo",
                "1 pimentão vermelho",
                "1 cebola roxa",
                "Vinagrete de ervas",
                "Orégano fresco"
            ],
            preparation: [
                "Marine a carne no vinagrete por 30 minutos",
                "Monte espetinhos alternando carne e vegetais",
                "Grelhe por 10 minutos virando sempre",
                "Finalize com orégano fresco"
            ],
            healthyTips: "Use cogumelos como substituto vegetariano",
            nutrition: {
                calories: 280,
                fat: 12,
                protein: 30,
                carbs: 10
            }
        },
        {
            name: "Sopa de Feijão com Couve",
            ingredients: [
                "1 xícara de feijão carioquinha cozido",
                "2 xícaras de caldo de legumes",
                "2 folhas de couve picadas",
                "1 cenoura ralada",
                "1 colher de azeite",
                "Páprica defumada"
            ],
            preparation: [
                "Refogue cenoura no azeite",
                "Adicione feijão e caldo",
                "Cozinhe por 10 minutos",
                "Amasse levemente alguns grãos",
                "Acrescente couve e cozinhe por 5 minutos"
            ],
            healthyTips: "Sirva com cebola crispy",
            nutrition: {
                calories: 250,
                fat: 6,
                protein: 12,
                carbs: 38
            }
        },
        {
            name: "Berinjela Recheada com Quinoa",
            ingredients: [
                "1 berinjela média",
                "1/2 xícara de quinoa cozida",
                "1 tomate picado",
                "Manjericão fresco",
                "1 colher de azeite",
                "Queijo feta light"
            ],
            preparation: [
                "Corte berinjela ao meio e retire polpa",
                "Asse as "cascas" por 10 minutos",
                "Misture polpa picada com quinoa, tomate e manjericão",
                "Recheie as cascas",
                "Polvilhe queijo feta e leve ao forno por 15 minutos"
            ],
            healthyTips: "Adicione lentilhas para mais proteína",
            nutrition: {
                calories: 280,
                fat: 10,
                protein: 10,
                carbs: 40
            }
        },
        {
            name: "Frango Xadrez Vegetariano",
            ingredients: [
                "150g de proteína de soja texturizada",
                "1 pimentão verde",
                "1 cebola",
                "1 colher de gengibre ralado",
                "2 colheres de molho shoyu light",
                "1 colher de óleo de gergelim",
                "Castanha de caju"
            ],
            preparation: [
                "Hidrate a proteína de soja",
                "Refogue vegetais no óleo",
                "Adicione PTS e gengibre",
                "Tempere com shoyu",
                "Finalize com castanhas"
            ],
            healthyTips: "Use amendoim torrado sem sal",
            nutrition: {
                calories: 300,
                fat: 10,
                protein: 25,
                carbs: 25
            }
        },
        {
            name: "Moqueca Vegetariana",
            ingredients: [
                "1 banana-da-terra verde",
                "1 chuchu em cubos",
                "1/2 pimentão vermelho",
                "Leite de coco light",
                "Azeite de dendê",
                "Coentro e cebolinha"
            ],
            preparation: [
                "Cozinhe banana-da-terra e chuchu",
                "Refogue pimentão em panela de barro",
                "Adicione vegetais cozidos e leite de coco",
                "Cozinhe por 10 minutos",
                "Finalize com dendê e ervas"
            ],
            healthyTips: "Adicione palmito pupunha",
            nutrition: {
                calories: 240,
                fat: 12,
                protein: 5,
                carbs: 30
            }
        },
        {
            name: "Frango Assado com Batatas",
            ingredients: [
                "1 sobrecoxa de frango sem pele",
                "2 batatas inglesas",
                "1 colher de alecrim fresco",
                "1 colher de azeite",
                "Alho picado",
                "Suco de limão"
            ],
            preparation: [
                "Marine o frango em alho, limão e alecrim",
                "Corte batatas em wedges",
                "Arrume em assadeira com frango",
                "Regue com azeite",
                "Asse a 200°C por 30 minutos"
            ],
            healthyTips: "Adicione cebola pérola inteira",
            nutrition: {
                calories: 350,
                fat: 15,
                protein: 25,
                carbs: 30
            }
        },
        {
            name: "Salada Caesar Light",
            ingredients: [
                "2 xícaras de alface romana",
                "100g de peito de frango grelhado",
                "1 colher de parmesão ralado",
                "Croutons integrais",
                "Molho: iogurte grego, alho, anchova"
            ],
            preparation: [
                "Misture ingredientes do molho",
                "Monte salada com alface e frango",
                "Regue com molho",
                "Polvilhe parmesão e croutons"
            ],
            healthyTips: "Use tofu grelhado para versão vegetariana",
            nutrition: {
                calories: 300,
                fat: 12,
                protein: 30,
                carbs: 15
            }
        },
        {
            name: "Brócolis Grelhado com Alho",
            ingredients: [
                "1 maço de brócolis ninja",
                "2 dentes de alho picados",
                "1 colher de azeite",
                "Suco de limão",
                "Pimenta calabresa"
            ],
            preparation: [
                "Corte brócolis em floretes",
                "Grelhe em frigideira quente com azeite",
                "Adicione alho no final",
                "Regue com suco de limão",
                "Tempere com pimenta"
            ],
            healthyTips: "Polvilhe queijo parmesão light",
            nutrition: {
                calories: 150,
                fat: 8,
                protein: 6,
                carbs: 15
            }
        }
    ]
};
