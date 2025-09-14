# MerkelScience-AI-Chat

A React + Vite project with TypeScript, TailwindCSS, and TinyMCE integration.

---

## 🚀 Getting Started

### 1. Prerequisites
Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>=18.x recommended)
- [npm](https://www.npmjs.com/) (comes with Node) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

Check versions:

```bash
node -v
npm -v
```

---

### 2. Clone the Repository

```bash
git clone <your-repo-url>
cd ms-chat
```

---

### 3. Install Dependencies

```bash
npm install
```

(or use `yarn install` / `pnpm install` if you prefer)

---

### 4. Run in Development

```bash
npm run dev
```

This will start the Vite development server.  
By default, your app will be available at:  
👉 [http://localhost:5173](http://localhost:5173)

---

### 5. Build for Production

```bash
npm run build
```

This will:

- Run TypeScript compiler (`tsc -b`)
- Create an optimized production build inside the `dist/` folder.

---

### 6. Preview Production Build (Locally)

```bash
npm run preview
```

This serves the `dist/` folder locally so you can test the production build.

---

### 7. Linting

```bash
npm run lint
```

Runs ESLint checks to maintain code quality.

---

## 📦 Tech Stack

- **React 19** with **Vite**
- **TypeScript**
- **TailwindCSS 4**
- **TinyMCE** rich text editor (`tinymce`, `@tinymce/tinymce-react`)
- **styled-components**
- **react-markdown** with `remark-gfm` & `rehype-highlight`
- **OpenAI API** integration
- ESLint + TypeScript ESLint for linting

---

## 🌐 Deployment

### Deploy to [Netlify](https://www.netlify.com/)

1. Run `npm run build`
2. Deploy the contents of the `dist/` folder.
   - Either drag & drop `dist/` in Netlify dashboard.
   - Or connect your repo to Netlify and set:
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`

---

