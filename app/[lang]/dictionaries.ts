import "server-only";

import fr from "@/dictionaries/fr.json";
import en from "@/dictionaries/en.json";

const dictionaries = { fr, en } as const;

export type Locale = keyof typeof dictionaries;
export type Dict = typeof fr;

export const hasLocale = (lang: string): lang is Locale => lang in dictionaries;

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
