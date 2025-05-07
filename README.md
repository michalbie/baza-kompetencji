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

## Konfiguracja dodatkowa (opcjonalnie)

* **Baza danych:** Jeśli Twój projekt korzysta z bazy danych, upewnij się, że jest ona uruchomiona i skonfigurowana zgodnie z ustawieniami w backendzie (np. w pliku `settings.py` dla Django lub konfiguracji Flask).
* **Inne usługi:** Jeśli projekt korzysta z innych usług (np. Redis, kolejki zadań), upewnij się, że są one uruchomione.

Po wykonaniu powyższych kroków zarówno frontend, jak i backend Twojej aplikacji powinny działać lokalnie. Frontend będzie łączył się z backendem pod skonfigurowanym adresem API. Pamiętaj, aby dostosować ten plik `README.md` do specyfiki Twojego projektu!
