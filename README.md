# Aplikacja do notatek front

Jest to aplikacja do notatek napisana na potrzeby projektu zaliczeniowego na studia z przedmiotu szkielety programistyczne.

## Wykorzystane Technologie

Lista technologii i bibliotek użytych w projekcie:

### Frameworki i Biblioteki Frontendowe
- **Vue.js**: Framework JavaScript do budowania interfejsów użytkownika.
- **Vue Router**: Oficjalna biblioteka routingu dla Vue.js.
- **Axios**: Biblioteka do wykonywania zapytań HTTP.
- **Vue Toast Notification**: Biblioteka do wyświetlania powiadomień.
- **Vue3 Pagination** oraz **Vuejs Paginate Next**: Biblioteki do obsługi paginacji danych.
- **Vuelidate**: Biblioteka do walidacji formularzy w Vue.js.
- **Bootstrap 5**: Framework CSS do szybkiego tworzenia responsywnych projektów.

## Uruchomienie aplikacji

### Aplikacja Klienta (Frontend)
1. **Sklonuj repozytorium do wybranego katalogu:**
    ```bash
    git clone https://github.com/kcarol3/NoteApp-front.git
    ```

2. **Uruchom serwer klienta:**
    ```bash
    npm run server
    ```

### Serwer (Backend)
1. **Sklonuj repozytorium serwera z repo:**
    ```bash
    git clone https://github.com/kcarol3/NoteApp-backend.git
    ```
2. **Ustaw wartości dotyczące bazy danych MongoDB w pliku `.env`:**
    Otwórz plik `.env` w głównym katalogu serwera i upewnij się, że posiada on odpowiednie wartości dla bazy danych MongoDB. Sprawdź, czy w pliku `.env` znajduje się wpis `DB` o treści:
    ```
    DB=mongodb+srv://<uzytkownik>:<haslo>@<adres_hosta>/<nazwa_bazy_danych>?retryWrites=true&w=majority
    ```
    Zastąp `<uzytkownik>`, `<haslo>`, `<adres_hosta>` i `<nazwa_bazy_danych>` odpowiednimi danymi dostępowymi do Twojej bazy danych MongoDB.

3. **Uruchom serwer:**
    ```bash
    npm run dev
    ```

## Użycie

Opis funkcjonalności

> *Strona logowania lub rejestracji*
![Opis obrazu](https://github.com/kcarol3/NoteApp-front/blob/master/screens/screen1.png)

<br/><br/>

> *Strona domowa*
![Opis innego obrazu](https://github.com/kcarol3/NoteApp-front/blob/master/screens/screen2.png)


<br/><br/>

> *Dodanie nowej notatki*
![Opis innego obrazu](https://github.com/kcarol3/NoteApp-front/blob/master/screens/screen3.png)


<br/><br/>

> *Podgląd notatek pogrupowanych pod względem pilności*
![Opis innego obrazu](https://github.com/kcarol3/NoteApp-front/blob/master/screens/screen4.png)


<br/><br/>

> *Edycja lub usuwanie notatek*
![Opis innego obrazu](https://github.com/kcarol3/NoteApp-front/blob/master/screens/screen5.png)


## Autor

Karol Kurowski Politechnika lubelska



