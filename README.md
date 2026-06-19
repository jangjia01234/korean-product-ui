# Korean Product UI

Reusable React primitives and design tokens for quiet Korean product interfaces: dense dashboards, admin tools, clinic workflows, B2B operations screens, and role-based internal tools.

The package is code-first. It is not a prompt pack. Install the components, import the CSS, and build product screens with the same visual vocabulary.

## Install

From npm after publish:

```bash
npm install korean-product-ui
```

Before npm publish, install directly from GitHub:

```bash
npm install github:jangjia01234/korean-product-ui
```

GitHub installs run the package `prepare` script, so the package builds `dist/` automatically.

Import once in your app entry:

```tsx
import 'korean-product-ui/styles.css'
```

Use components:

```tsx
import { ProductButton, ProductPanel, ProductPanelHeader, ProductStatusBadge } from 'korean-product-ui'

export function Example() {
  return (
    <ProductPanel tone="outlined" elevation="raised">
      <ProductPanelHeader
        eyebrow="운영 상태"
        title="검토 대기 12건"
        description="담당자가 바로 처리해야 하는 항목만 먼저 보여줍니다."
      />
      <ProductStatusBadge tone="accent">진행 가능</ProductStatusBadge>
      <ProductButton>처리 시작</ProductButton>
    </ProductPanel>
  )
}
```

## shadcn-style copy install

For projects that want to own and edit the copied source:

```bash
npx shadcn add https://raw.githubusercontent.com/jangjia01234/korean-product-ui/main/registry/product-ui.json
```

## Example

Run the Korean product page example:

```bash
npm install
npm run build
cd examples/korean-product-page
npm install
npm run dev
```

The example lives in `examples/korean-product-page` and shows a Korean B2B operations dashboard using the package primitives.

## Package layout

```txt
src/
  ProductButton.tsx
  ProductPanel.tsx
  ProductStatusBadge.tsx
  tokens.css
  components.css
  styles.css
  index.ts

examples/korean-product-page/
  src/App.tsx
```

## Design stance

- Restrained product UI, not marketing UI.
- Dense but readable information.
- Standard controls, predictable hierarchy, useful color.
- Korean labels and operations copy fit naturally.
- Components are intentionally small so each project can compose them into its own domain screens.
