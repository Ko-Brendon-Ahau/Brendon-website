# Personal Website

A simple personal website built with plain HTML, CSS, and JavaScript. No frameworks, no build tools — just files you can open and edit in any text editor.

---

## How to edit the site

Every page has comments like `<!-- EDIT: ... -->` that tell you exactly what to change. Open any `.html` file in a text editor (TextEdit on Mac, Notepad on Windows, or a free code editor like [VS Code](https://code.visualstudio.com)) and look for those comments.

Common things to update:
- Replace `Ko Brendon Ahau` with your actual name (it appears in the header and footer of every page)
- Fill in the `[bracketed placeholders]` on each page with your real content
- Update the email address in `contact.html`
- Add or remove `org-entry` blocks to list your organisations, publications, talks, etc.

---

## File structure

```
/
├── index.html          ← Home page
├── about.html          ← About page
├── work.html           ← Overview of all four work areas
├── research.html       ← Research page
├── governance.html     ← Governance & Leadership page
├── writing.html        ← Writing page
├── speaking.html       ← Speaking & Collaboration page
├── contact.html        ← Contact page
├── css/
│   └── style.css       ← All the visual styling (colours, fonts, layout)
├── js/
│   └── main.js         ← Small scripts (mobile menu, active nav link, form)
└── README.md           ← This file
```

---

## Running locally

You don't need to install anything. Just open `index.html` in your web browser.

On a Mac:
1. Find the folder in Finder
2. Double-click `index.html` — it will open in your browser

Or, if you have [VS Code](https://code.visualstudio.com) installed, install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), open the folder, and click "Go Live" in the bottom bar. This gives you a live preview that refreshes as you save changes.

---

## Making the contact form work

The contact form is set up to work with [Formspree](https://formspree.io) — a free service that receives form submissions and emails them to you.

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — Formspree will give you a form ID (looks like `xabcdefg`)
3. Open `contact.html` and find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual ID
5. Open `js/main.js` and delete or comment out the `e.preventDefault()` line in the form handler

The free Formspree plan allows 50 submissions per month, which is plenty for a personal site.

---

## Deploying to GitHub Pages (free hosting)

GitHub Pages lets you host this site for free at `https://yourusername.github.io`.

### Step 1 — Create a GitHub account

Go to [github.com](https://github.com) and sign up for a free account if you don't have one.

### Step 2 — Create a repository

1. Click the **+** icon (top right) → **New repository**
2. Name it exactly: `yourusername.github.io` (replace `yourusername` with your GitHub username)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files

The easiest way (no command line needed):

1. Open your new repository on GitHub
2. Click **uploading an existing file** (or drag and drop)
3. Select all the files and folders from your website folder:
   - `index.html`, `about.html`, `work.html`, `research.html`, `governance.html`, `writing.html`, `speaking.html`, `contact.html`
   - The `css/` folder
   - The `js/` folder
4. Click **Commit changes**

> Important: make sure `index.html` is at the root level of the repository, not inside a subfolder.

### Step 4 — Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages** (in the left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch and **/ (root)**
4. Click **Save**

Your site will be live at `https://yourusername.github.io` within a minute or two.

### Updating the site later

To update content after the initial upload:
1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Click **Commit changes**

The site will update automatically within about 30 seconds.

---

## Using a custom domain (optional)

If you want the site at your own domain (e.g. `yourname.nz`):

1. Buy a domain from a registrar (e.g. [Namecheap](https://namecheap.com), [Google Domains](https://domains.google))
2. In your GitHub repository → **Settings** → **Pages**, enter your custom domain
3. Follow GitHub's instructions to update your domain's DNS settings

GitHub has a [detailed guide here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Changing colours

All colours are defined at the top of `css/style.css` in the `:root` block:

```css
:root {
  --green:       #2d6a4f;   /* main dark green */
  --green-light: #52b788;   /* lighter green for accents */
  --cream:       #f8f5f0;   /* page background */
  --dark:        #1a1a1a;   /* headings and dark text */
  --mid:         #555;      /* body text */
}
```

Change the hex colour values there and the whole site updates.
