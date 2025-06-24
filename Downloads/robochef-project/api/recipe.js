
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { recipe } = req.body;

  if (!recipe) {
    return res.status(400).json({ error: 'Recipe name is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Você é um chef de cozinha. Forneça receitas em JSON no formato: {title, ingredients: [], instructions: [], prepTime, servings, tips}.',
        },
        {
          role: 'user',
          content: `Receita de ${recipe}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const result = completion.choices[0].message.content;
    const recipeData = JSON.parse(result);

    res.status(200).json(recipeData);
  } catch (error) {
    console.error('Erro OpenAI:', error);
    res.status(500).json({ error: 'Erro ao gerar receita' });
  }
}
