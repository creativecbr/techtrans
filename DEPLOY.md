# Instrukcja Wdrożenia TechTrans na GitHub Pages

Ta strona jest skonfigurowana do automatycznego wdrożenia na GitHub Pages przy użyciu GitHub Actions.

## Krok 1: Utwórz Repozytorium na GitHub

1. Zaloguj się na swoje konto GitHub.
2. Utwórz nowe, puste repozytorium (np. o nazwie `techtrans`).
3. Nie dodawaj plików README, .gitignore ani licencji na tym etapie.

## Krok 2: Wgraj Kod

Jeśli pobrałeś pliki na swój komputer:

1. Otwórz terminal w folderze z projektem.
2. Zainicjuj git i wypchnij kod:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TWOJA_NAZWA_UZYTKOWNIKA/techtrans.git
git push -u origin main
```

*(Pamiętaj, aby zamienić `TWOJA_NAZWA_UZYTKOWNIKA` na swoją nazwę użytkownika GitHub)*

## Krok 3: Skonfiguruj GitHub Pages

1. Przejdź do zakładki **Settings** (Ustawienia) w swoim repozytorium na GitHub.
2. W menu po lewej wybierz **Pages**.
3. W sekcji **Build and deployment**:
   - **Source**: Wybierz `GitHub Actions`.
4. To wszystko! GitHub automatycznie wykryje plik `.github/workflows/deploy.yml` i rozpocznie proces wdrażania.

## Krok 4: Sprawdź Status

1. Przejdź do zakładki **Actions** w repozytorium.
2. Powinieneś widzieć workflow o nazwie "Deploy to GitHub Pages" w trakcie działania (żółta kropka) lub zakończony sukcesem (zielona kropka).
3. Po zakończeniu, kliknij w zakończony workflow, a w sekcji "deploy" znajdziesz link do swojej działającej strony!

## Ważna Uwaga o Ścieżkach (Base Path)

Jeśli Twoja strona nie wyświetla się poprawnie (np. brak obrazków lub stylów), może to oznaczać, że musisz ustawić `base` w pliku `vite.config.ts`.

Dla repozytorium `https://github.com/user/techtrans`, Twoja strona będzie pod adresem `https://user.github.io/techtrans/`.

W takim przypadku edytuj `vite.config.ts` i dodaj:

```typescript
export default defineConfig({
  base: '/techtrans/', // Nazwa Twojego repozytorium
  // ... reszta konfiguracji
})
```

Następnie zrób commit i push zmian.
