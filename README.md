# Open Source Society's website

The official website of Open Source Society JU.

[Live Website](https://github.com/0Risotto/osswebsite/issues) | [Report Bug or Request Feature](https://github.com/0Risotto/osswebsite/issues)

---

# Quick Start Guide - Fork, Clone, Edit, & Contribute

---

## 1. Fork the Repository

Click the **Fork** button at the top right of the GitHub page.

---

## 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/osswebsite.git
cd osswebsite
```

---

## 3. Install Dependencies

```bash
pnpm install
```

---

## 4. Run Development Server

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 5. Build to Test Production

```bash
pnpm build
pnpm start
```

---

## 6. Make Your Changes
## File structure for features
```
domain/[feature-name]/
├── components/
│   ├── [Feature+ComponentName].tsx        # Component
├── services/
│   └── [feature]Service.ts      # Data fetching logic
├── utils/
│   └── helpers.ts               # Helper functions
├── constants.ts                 # Static data (arrays, configs)
├── types.ts                     # TypeScript interfaces
└── [Feature]Page.ts    #Page component (then import it in the app folder)
```


### What to Edit

| To Change... | Edit This... |
|-------------|--------------|
| Homepage text | `domain/hero/constants.ts` |
| Hero animation | `domain/hero/components/HeroContent.tsx` |
| Navigation menu | `domain/hero/components/HeroNav.tsx` |
| Blog listing | `domain/blogs/components/BlogListing.tsx` |
| Colors | `tailwind.config.ts` |
| Blog posts | Add folder in `content/content/posts/` |

---

## 7. Commit & Push

```bash
git add .
git commit -m "feat: add my awesome feature"
git push origin main
```

---

## Pull request : What does this PR do?

<!-- Describe what changes you made and why -->

-

---

## Screenshots / Demo

<!-- If UI changes, add screenshots or screen recordings -->

| Before | After |
|--------|-------|
|        |       |

---

## Type of Change

<!-- Check the boxes that apply -->

- [ ] New Feature
- [ ] Bug Fix
- [ ] UI/Design Update
- [ ] Content Update (blog, text, etc.)
- [ ] Performance Improvement
- [ ] Code Refactor
- [ ] Documentation
- [ ] Configuration / Build

---

## Files Changed

<!-- List main files you modified -->

- file1.example
- file2.example
- file3.example

---

## How to Test

1. Clone the branch
2. Run `pnpm install`
3. Run `pnpm dev`
4. Navigate to <!-- specific page or component -->
5. Verify that <!-- expected behavior -->

---

## Related Issues

<!-- Link any related issues using #issue-number -->

Closes #

---

## Additional Notes

<!-- Any extra context for reviewers -->

---

## Checklist

- [ ] I have tested my changes locally
- [ ] I have run `pnpm build` and it completed successfully
- [ ] My code follows the project's style guidelines
- [ ] I have added necessary documentation
- [ ] I have updated the README if needed
- [ ] My changes don't introduce new warnings
- [ ] I have added comments in complex code areas

---

**Type of Change Legend:**

| Icon | Meaning |
|------|---------|
| 🚀 | New Feature – adds new functionality |
| 🐛 | Bug Fix – fixes an issue |
| 🎨 | UI/Design – visual changes only |
| 📝 | Content – blog posts, text updates |
| ⚡ | Performance – makes things faster |
| 🧹 | Refactor – code cleanup, no functional changes |
| 📚 | Documentation – README, comments |
| 🔧 | Config – build, dependencies, settings |

---

## PR Test Checklist

- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] All links work
- [ ] Images load correctly
- [ ] Dark/light mode (if applicable)

---

Thank you for contributing!

---

**Questions?** Open an issue or ask in the discussion!
