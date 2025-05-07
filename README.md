# Baza kompetencji


## Wymagania

Przed rozpoczęciem upewnij się, że masz zainstalowane następujące narzędzia:

* **Node.js** (dla frontendu, sprawdź wersję w pliku `.nvmrc` lub `package.json` jeśli istnieje)
* **npm** lub **yarn** (menedżer pakietów dla frontendu)
* **Python** (dla backendu, 3.9.13)
* **pip** (menedżer pakietów dla Pythona)
* **Git** (opcjonalnie, do klonowania repozytorium)

## Uruchomienie - Frontend

Instrukcje krok po kroku, jak uruchomić część frontendową aplikacji.

1.  **Przejdź do katalogu frontendu:**
    Otwórz terminal lub wiersz polecenia i przejdź do katalogu zawierającego kod frontendu. Zazwyczaj nazywa się `frontend`, `client` lub podobnie.

    ```bash
    cd frontend
    ```

2.  **Zainstaluj zależności:**
    Użyj menedżera pakietów (npm lub yarn) aby zainstalować wszystkie niezbędne biblioteki i zależności wymienione w pliku `package.json`.

    * **Jeśli używasz npm:**
        ```bash
        npm install
        ```

    * **Jeśli używasz yarn:**
        ```bash
        yarn install
        ```

3.  **Uruchom serwer deweloperski frontendu:**
    Użyj skryptu startowego zdefiniowanego w `package.json`. Często używane skrypty to `start`, `dev` lub `serve`.

    * **Jeśli używasz npm:**
        ```bash
        npm start
        # lub
        npm run dev
        # lub
        npm run serve
        ```

    * **Jeśli używasz yarn:**
        ```bash
        yarn start
        # lub
        yarn dev
        # lub
        yarn serve
        ```

    Po uruchomieniu serwera deweloperskiego, aplikacja frontendowa powinna być dostępna pod wskazanym adresem (zazwyczaj `http://localhost:3000` lub innym).

## Uruchomienie - Backend

Instrukcje krok po kroku, jak uruchomić część backendową aplikacji.

1.  **Przejdź do katalogu backendu:**
    Otwórz nowy terminal lub wiersz polecenia i przejdź do katalogu zawierającego kod backendu. Zazwyczaj nazywa się `backend`, `server` lub podobnie.

    ```bash
    cd backend
    ```

2.  **Utwórz i aktywuj wirtualne środowisko Pythona (zalecane):**
    Jeśli jeszcze tego nie zrobiłeś, utwórz wirtualne środowisko dla zależności backendu i aktywuj je.

    * **Dla systemów Unix/macOS:**
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```

    * **Dla systemu Windows:**
        ```bash
        python -m venv venv
        .\venv\Scripts\activate
        ```

3.  **Zainstaluj zależności backendu:**
    Użyj `pip` aby zainstalować wszystkie niezbędne biblioteki wymienione w pliku `requirements.txt`.

    ```bash
    pip install -r requirements.txt
    ```

4.  **Skonfiguruj zmienne środowiskowe:**
    Backend również może wymagać zmiennych środowiskowych (np. adres bazy danych, klucze API). Zawartość pliku .env bedzie przesłana na chacie.

    ```bash
    cp .env.example .env
    # Otwórz i edytuj .env zgodnie z potrzebami
    nano .env
    ```

    Jeśli używasz biblioteki `python-dotenv`, upewnij się, że jest załadowana na początku Twojego kodu backendowego.

5.  **Uruchom serwer deweloperski backendu:**
    Sposób uruchomienia backendu zależy od używanego frameworka (np. Django, Flask).

    * **Dla Django:**
        Przejdź do katalogu zawierającego plik `manage.py` (jeśli nie jesteś już w nim) i uruchom:
        ```bash
        python manage.py runserver
        ```
        Backend powinien być dostępny pod adresem `http://localhost:8000` (domyślnie).

## Konfiguracja obowiązkowa

Żeby móc dodawać kontrybucje do projektu, należy zainstalować w VSCode 2 rozszerzenia: "prettier" oraz "autopep8". Są to formatery kodu, dbające o jego spójność. Aby automatycznie formatowały, należy zaznaczyć w VSCode opcje automatycznego zapisu oraz podać w ustawieniach prettier ścieżkę do pliku konfiguracyjnego, tj. '.prettierrc'.
**Ponadto nie commitujemy bezpośrednio na maina, tylko tworzymy pull requesty na dev'a.**

![image](https://github.com/user-attachments/assets/c0437fce-4504-4758-bb76-e09c314e9176)
![image](https://github.com/user-attachments/assets/1834b36d-f8d9-4ddd-bc2b-64670904eaf5)


Po wykonaniu powyższych kroków zarówno frontend, jak i backend Twojej aplikacji powinny działać lokalnie. Frontend będzie łączył się z backendem pod skonfigurowanym adresem API.
