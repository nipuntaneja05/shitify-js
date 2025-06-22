export interface ShitifyOptions {
  poopEmoji?: string;
  sound?: boolean;
  cursor?: 'toilet-paper' | 'none';
  maxPoops?: number;
  targets?: string;
}

/**
 * Injects poop emojis, fart sounds, and toilet paper cursors into your webpage.
 * @param userOptions Optional configuration to control behavior.
 */
export function shitify(userOptions?: ShitifyOptions): void;
