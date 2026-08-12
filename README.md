# BHUKYA SAIDA NAIK - Personal Portfolio Website

Welcome to the personal portfolio website of **BHUKYA SAIDA NAIK** (B.Tech 2nd Year Information Technology Student at Vignan University).

This website is designed with a modern, responsive aesthetic, featuring dark/light theme toggling, smooth section navigation, interactive skill indicators, and a live demonstration of the **Smart Agriculture Investment Calculator** project.

---

## 📁 File Structure

```text
saida-naik-portfolio/
│
├── index.html          # Main HTML structure with clear edit comments
├── style.css           # Styling, colors, responsive layouts & themes
├── script.js           # Interactive features (Dark mode, menu, calculator demo)
├── README.md           # Instructions & GitHub Pages deployment guide
└── images/
    └── profile.jpg     # Profile photo (Easy to replace with your own photo)
```

---

## 🚀 How to Run Locally

1. Open the project folder `saida-naik-portfolio`.
2. Double-click **`index.html`** to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).
3. No server or build tools are required!

---

## ✏️ How to Customize Your Details

Open `index.html` in any text editor (VS Code, Notepad++, Notepad) and look for the **`<!-- EDIT HERE -->`** comments:

1. **Profile Photo (`images/profile.jpg`)**:
   - Replace the file `images/profile.jpg` with your photo using the same name, OR edit `<img src="images/profile.jpg">` in `index.html`.

2. **Resume Download**:
   - Place your resume PDF (e.g. `resume.pdf`) inside the project folder.
   - Update line 67 in `index.html`: `href="resume.pdf"`.

3. **Education Details (Dates & CGPA)**:
   - Search for `<!-- EDIT HERE: Add dates, CGPA/percentages -->` in `index.html` to update your graduation years, CGPA, or marks.

4. **Certifications & Internships**:
   - Update the certificate names, issuers, dates, and links in the Certifications section.
   - Edit the Internship section to add company name, role, and duration when completed.

5. **Social Links (LinkedIn & GitHub)**:
   - Update `https://linkedin.com/in/your-profile` and `https://github.com/your-username` with your actual profile links in both the Contact section and Footer.

---

## 🌐 How to Upload & Deploy to GitHub Pages (Free Hosting)

Follow these simple steps to make your portfolio live on the internet:

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and log in.
2. Click the **`+`** icon in the top-right corner and select **New repository**.
3. Name your repository (e.g., `saida-portfolio` or `saida-naik`).
4. Set visibility to **Public**.
5. Click **Create repository**.

### Step 2: Upload Files to GitHub
- **Option A (Via Web Browser)**:
  1. In your new repository page, click **uploading an existing file**.
  2. Drag and drop all files (`index.html`, `style.css`, `script.js`, `README.md`, and the `images/` folder).
  3. Click **Commit changes**.

- **Option B (Via Git Terminal)**:
  ```bash
  git init
  git add .
  git commit -m "Initial portfolio commit for BHUKYA SAIDA NAIK"
  git branch -M main
  git remote add origin https://github.com/your-username/saida-portfolio.git
  git push -u origin main
  ```

### Step 3: Enable GitHub Pages
1. In your GitHub repository, go to **Settings** -> **Pages** (on the left sidebar).
2. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
3. Under **Branch**, select **`main`** branch and folder **`/ (root)`**.
4. Click **Save**.
5. Wait 1-2 minutes. GitHub will provide your live website link:
   `https://your-username.github.io/saida-portfolio/`

---

## 🛠️ Built With

* **HTML5** (Semantic layout & accessibility)
* **CSS3** (Custom properties, Flexbox, Grid, Glassmorphism, Responsive design)
* **JavaScript (ES6+)** (Theme switcher, DOM manipulation, interactive modal demo)
* **FontAwesome 6** (Modern vector icons)
* **Google Fonts** (Outfit & Inter fonts)
