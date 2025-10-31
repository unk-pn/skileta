<p align="center">
    <img src="./public/logo.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">skileta</h1></p>
<p align="center">
	<em>Памятная страница игры Deceit 1 с возможностью поделиться своим игровым при помощи Telegram бота.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/unk-pn/skileta?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/unk-pn/skileta?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/unk-pn/skileta?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white" alt="Next.js">
	<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL">
	<img src="https://img.shields.io/badge/Telegram-2CA5E0?style=flat&logo=telegram&logoColor=white" alt="Telegram">
</p>
<br>

## Содержание

- [Обзор](#обзор)
- [Возможности](#возможности)
- [SEO и оптимизация](#seo-и-оптимизация)
- [Технологический стек](#технологический-стек)
- [Структура проекта](#структура-проекта)
- [Быстрый старт](#быстрый-старт)
- [Использование](#использование)
- [Разработка](#разработка)
- [Участие в разработке](#участие-в-разработке)
- [Лицензия](#лицензия)

## Обзор

**skileta.ru** — это современное full-stack веб-приложение, построенное на Next.js с интеграцией Telegram бота для сбора и отображения цитат. Проект демонстрирует продвинутые навыки разработки, включая SSR, SEO, управление базой данных и модерацию контента.

🌐 **Live Demo**: [skileta.ru](https://skileta.ru)

### Что вы можете изучить:

- 🏠 **Главная страница** - Посадочная страница с обзором проекта и информацией о команде
- 📸 **Галерея** ([skileta.ru/gallery](https://skileta.ru/gallery)) - Pinterest-стиль мозаичная раскладка с фотографиями проекта
- 💬 **Цитаты** ([skileta.ru/quotes](https://skileta.ru/quotes)) - Пользовательские цитаты с интеграцией бота
- 📝 **Специальные страницы** - Тематический контент и интерактивные компоненты

### Ключевая концепция

- Пользователи отправляют цитаты через Telegram бота
- Модераторы одобряют или отклоняют контент через встроенные клавиатуры
- Одобренные цитаты отображаются на веб-сайте в красивой галерее

## Возможности

### Telegram бот

- **Двухэтапная отправка цитат**: цитата → имя автора
- **Команды**: `/new`, `/cancel`, `/delete`, `/info`
- **Архитектура webhook** для совместимости с serverless
- **Система модерации** со встроенными клавиатурами и уведомлениями в реальном времени

### Веб-интерфейс

- **Серверный рендеринг (SSR)** для оптимальной производительности
- **Адаптивный дизайн** с mobile-first подходом
- **Pinterest-стиль мозаичная галерея** для отображения цитат
- **Плавные анимации** и эффекты при наведении

### Backend и база данных

- **Prisma ORM** для безопасных операций с базой данных
- **PostgreSQL** для надежного хранения данных
- **Автоматические миграции** и управление схемой
- **API Routes** для обработки webhook и данных

## SEO и оптимизация

### SEO-возможности

- **Динамические meta-теги** для каждой страницы с уникальным контентом
- **Structured Data (JSON-LD)** для лучшего понимания контента поисковыми системами
- **Open Graph метатеги** для красивого отображения в социальных сетях
- **Twitter Card метатеги** для оптимизации в Twitter
- **Canonical URLs** для предотвращения дублированного контента
- **Sitemap.xml** автоматически генерируется Next.js для всех страниц
- **Robots.txt** для управления индексацией поисковыми роботами

### Производительность и Core Web Vitals

- **Server-Side Rendering (SSR)** для мгновенной загрузки контента
- **Оптимизация изображений** с Next.js Image компонентом
- **Code Splitting** автоматическое разделение JavaScript бундлов
- **Prefetching** критических ресурсов для ускорения навигации
- **Минификация CSS и JavaScript** в продакшн сборке
- **CDN доставка** через Vercel Edge Network

### Метрики производительности

#### Desktop

```bash
# Lighthouse Score
🟢 Performance: 100
🟢 Accessibility: 96
🟢 Best Practices: 100
🟢 SEO: 100

# Core Web Vitals
🟢 LCP (Largest Contentful Paint): < 0.6s
🟢 SI (Speed Index): 0.4s
🟢 CLS (Cumulative Layout Shift): 0.003
```

<img src="https://i.postimg.cc/PrGGdz2J/image.png" alt="Метрика Lighthouse">

---

#### Mobile

```bash
# Lighthouse Score
🟢 Performance: 99
🟢 Accessibility: 96
🟢 Best Practices: 100
🟢 SEO: 100

# Core Web Vitals
🟢 LCP (Largest Contentful Paint): 2.1s
🟢 SI (Speed Index): 2.7s
🟢 CLS (Cumulative Layout Shift): 0
```

<img src="https://i.postimg.cc/J4Sf43xN/image.png" alt="Метрика Lighthouse">

---

### Оптимизация для поисковых систем

- **Семантическая HTML-разметка** с правильным использованием заголовков
- **Мобильная адаптивность** с mobile-first подходом
- **Быстрая загрузка страниц** благодаря SSR и оптимизации
- **Внутренняя перелинковка** между связанными страницами
- **Уникальные title и description** для каждой страницы
- **Хлебные крошки** для улучшения навигации

### Accessibility (Доступность)

- **Цветовой контраст** соответствует стандартам доступности
- **Альтернативный текст** для всех изображений
- **Focus indicators** для улучшения навигации с клавиатуры

## Технологический стек

- **Frontend**: Next.js 15, TypeScript, CSS Modules
- **Backend**: Next.js API Routes, Prisma ORM
- **База данных**: PostgreSQL (Neon)
- **Бот**: Telegram Bot API с архитектурой webhook
- **Развертывание**: Vercel (serverless)
- **Стилизация**: CSS Modules с адаптивным дизайном
- **SEO**: Next.js встроенная поддержка meta-тегов и sitemap
- **Мониторинг**: Vercel Analytics для отслеживания производительности
- **Оптимизация**: Next.js Image optimization, code splitting

## Структура проекта

```
skileta/
├── README.md
├── next.config.ts
├── package.json
├── tsconfig.json
├── .env
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── public/
│   ├── gallery/
│   ├── logo.svg
│   └── *.svg
└── src/
    ├── app/
    │   ├── api/
    │   │   ├── webhook/
    │   │   └── quotes/
    │   ├── quotes/
    │   ├── gallery/
    │   └── globals.css
    └── components/
        ├── Header/
        ├── Footer/
        ├── MainPage/
        └── deceit-memory-page/
```

### Ключевые файлы:

- `src/app/api/webhook/route.ts` - Обработчик Telegram webhook
- `src/app/sitemap.ts` - Автоматическая генерация sitemap.xml для SEO
- `src/app/layout.tsx` - Глобальные meta-теги и структура страниц
- `public/robots.txt` - Настройки для поисковых роботов
- `prisma/schema.prisma` - Схема базы данных для пользователей и цитат
- `src/components/` - Переиспользуемые React компоненты
- `.env` - Переменные окружения (токены, ID чатов)

## Быстрый старт

### Предварительные требования

- **Node.js** (версия 18.0.0 или выше)
- **npm** или **yarn** менеджер пакетов
- **PostgreSQL** база данных (или Neon/Supabase)
- **Telegram Bot Token** (получить от [@BotFather](https://t.me/botfather))

### Установка

1. **Клонируйте репозиторий:**

```bash
git clone https://github.com/unk-pn/skileta
cd skileta
```

2. **Установите зависимости:**

```bash
npm install
```

3. **Настройте переменные окружения:**
   Создайте `.env` в корневой директории:

```env
# Telegram Bot
BOT_API_TOKEN=your_telegram_bot_token
MODERATOR1_CHAT_ID=your_moderator_chat_id
MODERATOR2_CHAT_ID=your_second_moderator_chat_id

# Database
DATABASE_URL=your_postgresql_connection_string
```

4. **Настройте базу данных:**

```bash
# Применить миграции
npx prisma migrate dev

# Сгенерировать Prisma Client
npx prisma generate
```

## Использование

### 🌐 Live demo

Посетите [skileta.ru](https://skileta.ru), чтобы посмотреть вживую:

**Страницы для проверки:**

- **Главная страница** - Обзор проекта с плавными анимациями и адаптивным дизайном
- **Галерея** ([/gallery](https://skileta.ru/gallery)) - Демонстрация мозаичной раскладки в стиле Pinterest
- **Цитаты** ([/quotes](https://skileta.ru/quotes)) - Интерактивное отображение цитат с интеграцией бота
- **Специальные страницы** - Тематические страницы, демонстрирующие различные UI компоненты

**Попробуйте Telegram бота:**

1. Найдите бота в Telegram (ссылка доступна на странице цитат)
2. Отправьте `/start` для начала
3. Используйте `/new` для отправки цитаты и наблюдения за процессом модерации

### Режим разработки

```bash
npm run dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

### Настройка Telegram Webhook

```bash
curl -X POST https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook \
  -H "Content-Type: application/json" \
  -d '{"url": "https://yourdomain.com/api/webhook"}'
```

### Продакшн сборка

```bash
npm run build
npm start
```

### Команды бота

- `/start` - Начать использование бота
- `/new` - Создать новую цитату
- `/cancel` - Отменить создание цитаты
- `/delete` - Удалить вашу цитату
- `/info` - Получить справочную информацию

## Разработка

### Обзор архитектуры

```mermaid
graph TB
    A [Пользователь Telegram] --> (Отправляет цитату) --> B [Telegram Бот]
    B --> (Webhook) --> C [Next.js API Route]
    C --> (Сохраняет в БД) --> D [PostgreSQL БД]
    C --> (Уведомляет) --> E [Модераторы]
    E --> (Одобрить/Отклонить) C
    C --> (Обновляет статус) --> D
    F [Веб-пользователи] --> (Просматривают) --> G[Next.js SSR]
    G --> (Получает данные) --> D
```

### Основные компоненты:

1. **Обработчик Telegram Webhook** (`/api/webhook`) - обрабатывает сообщения и callbacks
2. **API цитат** (`/api/quotes`) - предоставляет одобренные цитаты для frontend
3. **Схема Prisma** - определяет структуру данных пользователей и цитат
4. **React компоненты** - переиспользуемые UI компоненты с CSS Modules

## Участие в разработке

Мы приветствуем участие в разработке! Пожалуйста, не стесняйтесь отправлять Pull Request.

1. Сделайте fork репозитория
2. Создайте ветку для новой функции (`git checkout -b feature/AmazingFeature`)
3. Зафиксируйте изменения (`git commit -m 'Добавить AmazingFeature'`)
4. Отправьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## Лицензия

Этот проект лицензирован под лицензией MIT. Смотрите файл [LICENSE](LICENSE) для подробностей.

## Благодарности

- **Команда Next.js** за отличный SSR фреймворк
- **Prisma** за удобную ORM и типобезопасность
- **Vercel** за простой и надежный хостинг
- **Telegram** за мощный Bot API
- **Neon** за управляемый сервис PostgreSQL

---

<p align="center">
	Сделано с ❤️ для демонстрации навыков full-stack разработки
</p>
