'use server';

/**
 * @fileOverview Keyword suggestion tool for Misan Digital's services.
 *
 * - suggestKeywords - A function that suggests keywords based on service descriptions and current trends.
 * - KeywordSuggestionInput - The input type for the suggestKeywords function.
 * - KeywordSuggestionOutput - The return type for the suggestKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const KeywordSuggestionInputSchema = z.object({
  serviceDescription: z
    .string()
    .describe('The description of the digital marketing service.'),
});
export type KeywordSuggestionInput = z.infer<typeof KeywordSuggestionInputSchema>;

const KeywordSuggestionOutputSchema = z.object({
  keywords: z.array(z.string()).describe('An array of suggested keywords.'),
  reasoning: z
    .string()
    .describe(
      'Explanation of why those keywords were chosen and what trends are related to each keyword.'
    ),
});
export type KeywordSuggestionOutput = z.infer<typeof KeywordSuggestionOutputSchema>;

export async function suggestKeywords(input: KeywordSuggestionInput): Promise<KeywordSuggestionOutput> {
  return keywordSuggestionFlow(input);
}

const keywordSuggestionPrompt = ai.definePrompt({
  name: 'keywordSuggestionPrompt',
  input: {schema: KeywordSuggestionInputSchema},
  output: {schema: KeywordSuggestionOutputSchema},
  prompt: `You are an SEO expert for a digital marketing agency named Misan Digital.
  Your task is to suggest high-performing keywords for a given service description based on current trends.

  Service Description: {{{serviceDescription}}}

  Provide an array of keywords that are relevant to the service description and are likely to drive traffic.
  Also, provide a reasoning for why you chose those keywords and what trends are related to each keyword.

  Return the keywords in the format: {"keywords": ["keyword1", "keyword2", "keyword3"], "reasoning": "explanation"}
  `,
});

const keywordSuggestionFlow = ai.defineFlow(
  {
    name: 'keywordSuggestionFlow',
    inputSchema: KeywordSuggestionInputSchema,
    outputSchema: KeywordSuggestionOutputSchema,
  },
  async input => {
    const {output} = await keywordSuggestionPrompt(input);
    return output!;
  }
);
