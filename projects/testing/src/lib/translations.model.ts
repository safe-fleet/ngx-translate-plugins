export declare type LanguageTranslation = string | string[] | { [translationKey: string]: LanguageTranslation };

/**
 * LanguageTranslations represents a mapping between a translation key and the translation for that key
 * or to nested translation keys.
 *
 * @export
 */
export type LanguageTranslations = Record<string, LanguageTranslation>;

/**
 * Translations represents a mapping between a language and the translations for that language.
 *
 * @export
 */
export type Translations = Record<string, LanguageTranslations>;
