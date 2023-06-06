# Component Library Planning


## Overview

<details>

**<summary>Direction</summary>**
  
- Microfrontend / Component based
- Shared design system & consistent look/feel
- Shared project directory structure
- Accessible, tested, standalone components
- Error Handlers
- Intercepts & Authentication layer

</details>
<details>

**<summary>Interface</summary>**

- Inventory
- Overlap
- Variations
- Accessibility
- Guides/Tutorial overlays?

</details>
<details>

**<summary>flows</summary>**

- one way funnels
- bi-directional funnels
- complex flows

</details>

## Lacking areas

<details>

**<summary>User Roles, Permissions, & Personas</summary>**

- we should start defining this ASAP

**Notable areas:** Claims & Product Details

**Performance**

- SSR/CSR Hybrid
- Web “Service” Workers (multi-thread)
- IndexedDB (localized Storage)
- LazyLoading
- CodeSplitting
- Hydration
- DocumentFragment/ShadowDOM

</details>

<details>

**<summary>Interview 2-3 internal Users</summary>**

- Create a questionare
- Document interview process pros/cons

</details>

## General questions

<details>

**<summary>What problems will this component library solve?</summary>**

- Consistency
- efficient reuse
- standardizations baked in
- easy to adapt new themes
- Components can be updated and refactored in isolation
- Easily shared across projects
- Updates cascade when updated in npm library

</details>
<details>

**<summary>Is everyone on board with building a component library?</summary>**

-  Seems to be!

</details>
<details>

**<summary>How will the library be utilized?</summary>**

- Backend devs will be referencing styleguide to implement
- Needs to be utilized across web & mobile clients
- Ideally this will become the source of truth for future projects, so we only need to update in one place.

</details>
<details>

**<summary>What tools do we need in order to build a component library?</summary>**

**Framework:** `Angular`

**Theming:** `SCSS`

- Brand Themes (Dark, Light, High Contrast)

**Testing:** Jest & Playwright

</details>
<details>

**<summary>Setup and structure</summary>**

**Directory Structures**

- COLOCATION

  - Context
  - Hookes
  - Styles
  - Types
  - Helpers
  - Mocks

**Base configurations**

- LINTERS

  - Markdown Lint
  - ESLint
  - StyleLint
  - CommitLint
  - Axe-Linter
  - JSHint
  - RomeJS
  - SVGO / Jock.SVG

- COMMIT HOOKS

  - Lint-Staged
  - Husky
  - Git Actions

- FORMATTERS

  - PrettierJS
  - RomeJS
  - EditorConfig

**Git Document Templates**

- PULL_REQUEST_TEMPLATE.md

  - Chore
  - Fix / Bug
  - Configuration
  - Documentation
  - Stylistic / Visual
  - Testing
  - Feature / Enhancement
  - Refactor
  - Abstraction

- CONTRIBUTING.md
- REPORT_BUG.md
- FEATURE_REQUEST.md
- DEVELOPMENT.md
- CODE_OF_CONDUCT.md
- Project README.md
- Process README.md

</details>
<details>

**<summary>How granular/organized does the library need to be?</summary>**

- to start, we'll keep it more high-level, may delve deeper as need arises.
- Atomic commits & design
- verbose naming conventions

</details>
<details>

**<summary>Where should component library live?</summary>**

- Ideally in an artifactory that is accessible via yaml/json configs to target internal package managers

</details>
<details>

**<summary>How will components be scoped? pages? layout? etc.</summary>**

- Will look into module patterns, I generally utilize BEM

</details>
<details>

**<summary>What data will be utilized in the library?</summary>**

- Will likely build a mocking/fixtuer layer with sample data

</details>
