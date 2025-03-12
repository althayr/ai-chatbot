import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import {  customProvider } from 'ai';
import { google } from '@ai-sdk/google';

export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';

export const myProvider = customProvider({
  languageModels: {
    'chat-model-small': openai('gpt-4o-mini'),
    'chat-model-large': openai('gpt-4o'),
    'chat-model-reasoning': openai('o3-mini'),
    'chat-model-gemini': google('models/gemini-2.0-flash-exp'),
    'chat-model-anthropic': anthropic('claude-3-7-sonnet-20250219'),
    'title-model': openai('gpt-4o'),
    'artifact-model': openai('gpt-4o-mini'),
  },
  imageModels: {
    'small-model': openai.image('dall-e-2'),
    'large-model': openai.image('dall-e-3'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-small',
    name: 'Small model (gpt-4o-mini)',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'chat-model-large',
    name: 'Large model (gpt-4o)',
    description: 'Large model for complex, multi-step tasks',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model (o3-mini)',
    description: 'Uses advanced reasoning',
  },
  {
    id: 'chat-model-gemini',
    name: 'Gemini model',
    description: 'Gemini Flash 2.0 flash exp',
  },
  {
    id: 'chat-model-anthropic',
    name: 'Anthropic model',
    description: 'claude-sonnet-3.7',
  },
];
