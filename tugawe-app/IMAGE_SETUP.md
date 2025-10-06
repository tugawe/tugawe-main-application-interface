# Adding the Dining Table Image

To use the beautiful dining table image with ocean view in the sign-in page:

## Step 1: Save the Image
1. Save your dining table image as `dining-table.jpg` (or `.png`, `.webp`)
2. Place it in the `/public` folder of your project
3. The path should be: `tugawe-app/public/dining-table.jpg`

## Step 2: Enable the Image in AuthLayout
1. Open `components/AuthLayout.tsx`
2. Find the commented section that says "If you want to use an actual image"
3. Uncomment the `<Image>` component code
4. Comment out or remove the gradient background div

## Alternative: Use External URL
If your image is hosted online, you can:
1. Update the `imageSrc` prop in `app/signin/page.tsx`:
```tsx
<AuthLayout imageSrc="https://your-image-url.com/dining.jpg">
```

2. Add the domain to `next.config.ts`:
```ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-url.com',
    },
  ],
},
```

## Current Setup
The AuthLayout currently uses a beautiful blue gradient that mimics the ocean view theme while you add your actual image.
