// This file implements the AI-powered skill suggester for freelancers.

'use server';

/**
 * @fileOverview This file defines the Genkit flow for suggesting relevant skills to freelancers based on their experience and portfolio.
 *
 * - suggestSkills - A function that suggests skills based on freelancer's input.
 * - SkillSuggesterInput - The input type for the suggestSkills function.
 * - SkillSuggestionOutput - The return type for the suggestSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillSuggesterInputSchema = z.object({
  experience: z
    .string()
    .describe('Description of the freelancer\'s professional experience.'),
  portfolioLinks: z
    .string()
    .describe('Links to the freelancer\'s portfolio, separated by commas.'),
});

export type SkillSuggesterInput = z.infer<typeof SkillSuggesterInputSchema>;

const SkillSuggestionOutputSchema = z.object({
  suggestedSkills: z
    .array(z.string())
    .describe('An array of suggested skills relevant to the freelancer.'),
});

export type SkillSuggestionOutput = z.infer<typeof SkillSuggestionOutputSchema>;

export async function suggestSkills(input: SkillSuggesterInput): Promise<SkillSuggestionOutput> {
  return skillSuggesterFlow(input);
}

const skillSuggesterPrompt = ai.definePrompt({
  name: 'skillSuggesterPrompt',
  input: {schema: SkillSuggesterInputSchema},
  output: {schema: SkillSuggestionOutputSchema},
  prompt: `You are an AI skill suggestion tool for a freelancer platform.

  Based on the freelancer's experience and portfolio links, suggest relevant skills they can add to their profile.
  Return the skills as a JSON array of strings.

  Experience: {{{experience}}}
  Portfolio Links: {{{portfolioLinks}}}

  Skills:`,
});

const skillSuggesterFlow = ai.defineFlow(
  {
    name: 'skillSuggesterFlow',
    inputSchema: SkillSuggesterInputSchema,
    outputSchema: SkillSuggestionOutputSchema,
  },
  async input => {
    const {output} = await skillSuggesterPrompt(input);
    return output!;
  }
);
