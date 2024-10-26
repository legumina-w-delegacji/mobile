# Pomoc na wyciągnięcie ręki

![Project Logo](.readme.assets/pomoc-logo.png "Logo")

## Ogólny Opis

Zobacz, gdzie najbliżej Ciebie potrzebna jest pomoc. Otrzymuj alerty o nowych prośbach o pomoc w Twojej okolicy oraz aktualizacje statusu zgłoszeń – dzięki temu nigdy nie przegapisz okazji, by pomóc bliskim w swojej okolicy.

## Funkcjonalności

- [x] **Od początku w mObywatel**:  Aplikacja jest dokładką do istniejącej aplikacji mObywatel, dzięki czemu możesz korzystać z jej funkcjonalności bezkonieczności instalowania dodatkowych aplikacji.
- [x] **Rozpoznawanie powagi zagrożenia przy pomocy LLM**: Aplikacja wykorzystuje sztuczną inteligencję do rozpoznawania powagi zagrożenia na podstawie opisu zgłoszenia. Dzięki temu możesz szybko i łatwo zdecydować, jakiej pomocy potrzebujesz.
- [x] **Integracja z mapą**: Ustaw miejsce w którym potrzebujesz pomocy łatwo i szybko na interaktywnej mapie mapie.
- [x] **Powiadomienia Push**: Otrzymuj powiadomienia o nowych prośbach o pomoc w Twojej okolicy.

## Stack Technologiczny

- **Languages**: TypeScript
- **Frameworks**: React Native
- **Libraries**: Apollo Client, Expo, React Navigation
- **Tools**: WebStorm, npm

## Setup

### Prerequisites

- Node.js
- npm
- Expo CLI

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/legumina-w-delegacji/mobile.git
    cd mobile
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the App

1. Start the Expo development server:
    ```sh
    npx expo start
    ```

2. Use the Expo Go app on your mobile device to scan the QR code and run the app.