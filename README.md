# Formistic — Development Repository

This is the **development** repository for **Formistic**, the smart contact-form
and submission-operations plugin for WordPress, published by **Wordpressistic**.

Everything needed to develop, document, and package the plugin lives here. The
**public release** repository
([`Wordpressistic/Formistic`](https://github.com/Wordpressistic/Formistic))
contains **only** the installable plugin — none of the development docs or
tooling below.

## Repository layout

```
.
├── formistic/        ← the plugin (this folder IS the public release)
│   ├── formistic.php          Plugin bootstrap + constants
│   ├── uninstall.php          Clean uninstall
│   ├── readme.txt             WordPress.org-style readme (source of truth)
│   ├── README.md              Public-facing readme
│   ├── LICENSE                GPL-2.0+
│   ├── assets/                Admin + frontend CSS/JS
│   ├── includes/              Core PHP modules
│   └── languages/             Translation template (.pot)
├── docs/             ← development docs (NOT published)
│   ├── USER-GUIDE.md
│   ├── PLUGIN-WORKFLOW.md
│   ├── AI-MODEL-VALIDATION.md
│   └── Formistic-User-Guide-v1.5.2.pdf
├── build.sh          ← produces the publishable zip / dist folder
└── README.md         ← you are here (development readme)
```

## What gets published

When releasing to `Wordpressistic/Formistic`, publish **only the contents of the
`formistic/` folder**. Nothing else in this repository (this README, `docs/`,
`build.sh`, `.git*`, CI, or any AI/assistant files) should be made public.

The simplest way to produce a clean release artifact:

```bash
./build.sh
```

This creates:

- `dist/formistic/` — a clean copy of the plugin folder
- `dist/formistic-<version>.zip` — ready to upload via **Plugins → Add New →
  Upload Plugin**, or to commit to the public repository

The version is read automatically from `formistic/formistic.php`.

## Current release

- **Version:** `2.0.0`
- **Requires WordPress:** `6.2+`
- **Tested up to:** `6.9`
- **Requires PHP:** `7.4+`
- **License:** GPL-2.0+

## Development notes

- All plugin code uses the `WPISTIC_CF_` class/constant prefix and the
  `formistic` text domain.
- Stored options, database tables, hooks, AJAX actions, and shortcodes are kept
  backward compatible — do not rename them without a migration.
- Newsletter sign-ups are stored in the dedicated subscribers table (Newsletter
  tab); contact submissions are stored in the inbox table. These paths are
  intentionally separate.
- Run `php -l` on changed files before committing; the plugin targets PHP 7.4+.
