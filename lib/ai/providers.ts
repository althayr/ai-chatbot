import { customProvider } from 'ai';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import { groq } from '@ai-sdk/groq';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model-small': chatModel,
        'chat-model-large': chatModel,
        'chat-model-reasoning': reasoningModel,
        'chat-model-anthropic': chatModel,
        'chat-model-gemini': chatModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
        'groq-llama-3.3-70b-versatile': chatModel,
        'groq-llama-3.1-8b-instant': chatModel,
        'groq-deepseek-r1-distill-qwen-32b': chatModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model-small': openai('gpt-4o-mini'),
        'chat-model-large': openai('gpt-4o'),
        'chat-model-reasoning': openai('o3-mini'),
        'chat-model-anthropic': anthropic('claude-3-7-sonnet-20250219'),
        'chat-model-gemini': google('gemini-2.0-flash-exp'),
        'groq-llama-3.3-70b-versatile': groq('llama-3.3-70b-versatile'),
        'groq-llama-3.1-8b-instant': groq('llama-3.1-8b-instant'),
        'groq-deepseek-r1-distill-qwen-32b': groq('deepseek-r1-distill-qwen-32b'),
        'title-model': openai('gpt-4o-mini'),
        'artifact-model': openai('gpt-4o-mini'),
      },
      imageModels: {
        'small-model': openai.image('dall-e-2'),
        'large-model': openai.image('dall-e-3'),
      },
    });
