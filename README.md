---
# Hover Preview Card

A lightweight React component that displays a hoverable preview card with an embedded website. Perfect for link previews, documentation links, or any hover-based website snippet.

## ✨ Features

- Show a live preview of a website in an `iframe` when hovering over a link.
- Fully customizable via Tailwind CSS or custom class names.
- Supports both light and dark mode styles.
- No dependencies other than React.


## 📦 Installation

```bash
npm install hover-preview-card
````

or with Yarn:

```bash
yarn add hover-preview-card
```

## 🚀 Usage

```tsx
import { HoverPreview } from 'hover-preview-card';

export default function Example() {
  return (
    <HoverPreview
      text="Visit Tailwind"
      url="https://tailwindcss.com/"
      textClassName="text-blue-600 underline"
      cardClassName="w-[500px] h-[400px] bg-white border shadow"
    />
  );
}
```

---

## ⚙️ Props

| Prop            | Type     | Default                                                                                                        | Description                            |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `text`          | `string` | —                                                                                                              | The text that triggers the preview.    |
| `url`           | `string` | —                                                                                                              | The URL to be shown inside the iframe. |
| `textClassName` | `string` | `"underline italic text-lg"`                                                                                   | Class for styling the trigger text.    |
| `cardClassName` | `string` | `"absolute top-full left-0 mt-2 p-4 bg-white shadow-lg rounded-lg border border-gray-200 w-[400px] h-[300px]"` | Class for styling the preview card.    |

---

## 🧩 Tailwind Support

This component is Tailwind CSS-friendly. If your project doesn't use Tailwind, you can still apply regular CSS classes via `textClassName` and `cardClassName`.

---

## 📝 Example Use Cases

* Tooltips with embedded documentation
* Link previews in blogs or articles
* Internal UI link previews in dashboards

---

## 🛠 Development

To run or modify this component locally:

```bash
git clone https://github.com/NasirAbdullahSyed/hover-preview-card.git
cd hover-preview-card
npm install
npm run build
```

---

## 🤝 Contributing

Contributions are welcome and appreciated! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Make your changes and commit them
4. Push to your fork (`git push origin feature/my-feature`)
5. Open a pull request with a clear description of the change

---

## 📄 License

MIT © [Syed Abdullah Nasr](https://github.com/NasirAbdullahSyed)