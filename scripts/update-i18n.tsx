import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

const translationsFileName = 'src/i18n/locales/es.json';
const translationKeysRegex =
  /\bt\(\s*'([^']+)',\s*(?:'([^']+)'|"([^"]+)")|<Trans[^>]*i18nKey="([^"]+)"[^>]*defaults=(?:"([^"]+)"|'([^']+)')[^>]*\/?>/g;

const findTranslations = (fileName: string): Array<[string, string]> => {
  const translations: Array<[string, string]> = [];
  const src = readFileSync(fileName, 'utf-8');

  let result;

  while ((result = translationKeysRegex.exec(src))) {
    const [
      ,
      tKey,
      tDefaultValueSingleQuote,
      tDefaultValueDoubleQuote,
      transKey,
      transDefaultValueDoubleQuote,
      transDefaultValueSingleQuote,
    ] = result;
    const key = tKey || transKey;
    const defaultValue =
      tDefaultValueSingleQuote ||
      tDefaultValueDoubleQuote ||
      transDefaultValueDoubleQuote ||
      transDefaultValueSingleQuote;

    if (!key || !defaultValue) {
      continue;
    }
    translations.push([key, defaultValue]);
  }

  return translations;
};

const findAllTranslations = async () => {
  const srcFileNames = await glob('src/**/*.{ts,js,tsx,jsx}');
  const translations = new Map<string, string>();

  for (const fileName of srcFileNames) {
    findTranslations(fileName).forEach(([key, defaultValue]) => {
      if (translations.has(key) && translations.get(key) !== defaultValue) {
        throw new Error(
          `Duplicate translation key with different values: ${key}: \n"${translations.get(key)}" vs "${defaultValue}"`,
        );
      }
      translations.set(key, defaultValue);
    });
  }

  return translations;
};

const translations = await findAllTranslations();
const currentTranslationsContent = readFileSync(translationsFileName, 'utf-8');
const currentTranslationsObject = JSON.parse(currentTranslationsContent);
const translationsWithSuffix = Object.entries(currentTranslationsObject).filter(
  ([key]) => key.includes('_') && translations.has(key.split('_')[0]),
);
const translationsArray = [...translations, ...translationsWithSuffix].sort(([key1], [key2]) =>
  key1.localeCompare(key2),
);
const translationsObject = Object.fromEntries(translationsArray);
const newTranslationsContent = JSON.stringify(translationsObject, null, 2) + '\n';

if (newTranslationsContent === currentTranslationsContent) {
  console.info('✔️ No translations updated.');
} else {
  writeFileSync(translationsFileName, newTranslationsContent);
  console.error(
    `⚠️ There are updated translations, ${translationsFileName} got overwritten; please check and re-commit :)`,
  );
  process.exit(1);
}
