![header-fu-react](https://user-images.githubusercontent.com/54267140/144246962-b4140129-ddcf-4609-857a-eaf117a95d81.png)

# Övning 1
1. Skapa en ny react-applikation
2. Skapa valfritt antal *pages*
3. Importera det nödvändiga från *react-router-dom*-biblioteket
4. Skapa upp din *React Router*-struktur med *BrowserRouter*, *Routes* och *Route*. Testa i url:en så att det fungerar
5. Skapa nu en *navigation* med *Link*-element och skapa funktionalitet så att du kan ta dig till dina olika *pages*
6. Skapa ytterligare en *page*-komponent som skall ta emot parametrar
7. Skapa ytterligare en *Route* till din nya *page*, i vilken du kan skicka med parametrar i url:en
8. Ta emot parametrarna med *useParams*-hooken och rendera ut dem på något sätt i din komponent


# Övning 2

I denna övning ska du göra ett bibliotek av barnböcker. Du hittar data om ett antal barnböcker med hjälp av nedanstående API-anrop:
```
GET https://santosnr6.github.io/Data/childrens_books.json
```

Använd dig av `React router` med två vyer, en för alla böcker och en för en detaljerad vy av en bok.

Figmaskiss: https://www.figma.com/design/lm4l7OViUO8ypfQn9IBG91/Mini-Library?node-id=1-2&t=JQvpbmFQcc9sOvUu-0

**Funktionalitet**

* Lista alla böcker från APIet
* När jag klickar på en bok ska den visas med mer information [se Figmaskiss](https://www.figma.com/file/lm4l7OViUO8ypfQn9IBG91/Mini-Library?node-id=2%3A41).