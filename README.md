[Воробьева финальный проект React.pptx](https://github.com/user-attachments/files/26906350/React.pptx)

# Что сделано
- Частично доработана архитектура по FSD
- Частично оптимизация рендеров (useMemo, useCallback, memo)
- Добавлен компонент модального окна (React.Portal)
- useRef: автофокус (форма регистрации, входа) + счетчик (CartCounter)
- React 19 hooks (useActionState для добавления комментария)

# Структура папок
- app
- pages
* CartPage - Корзина
* FavoritesPage - Избранное
* HomePage - Главная
* NotFoundPage - 404
* ProductPage - Страница карточки
* SignInPage - Страница входа
* SignUpPage - Страница регистрации
- widgets
* Footer - Подвал
* Header - Шапка
* SignInForm - Форма входа
* SignUpForm - Форма регистрации
* ReviewList - Отзывы
* CardList - Список карточек
* SortWidget - Сортировка
- features
* Sort - хук сортировки
* Search - хук поиска
- ???

## Запуск проекта локально:

- `npm i` - установка зависимостей
- `npm run start` - запуск проекта
