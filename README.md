# ECT Test Excercise

This is test excercise for ECT based on Expo React Native.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

To run tests

```bash
npm test
```

### To test app on device you can use Expo Go.


## Project structure

```bash
├── components/
│   ├── products/
│   │   ├── ProductsList.tsx
│   │   ├── ProductListItem.tsx
│   │   └── ProductOverview.tsx
│   │   └── single/
│   │       ├── ProductImage.tsx
│   │       ├── Ratings.tsx
│   │       ├── Price.tsx
│   │       └── AddToCart.tsx
│   │       └── Meta/
│   │           ├── InfoBox.tsx
│   │           └── Tags.tsx
├── constants/
│   ├── Context.ts
│   ├── Types.ts
├── screens/
│   ├── Home.tsx
│   ├── Single.tsx
├── app/
│   ├── app.ts
│   ├── layout.tsx
```

## Design Patterns

### Components

Components are reusable UI elements that can be used in multiple screens.

### Context

Context is used to share data between components.

### Types

Types are used to define the data types.  

### High order component

High order component is used for sortable list.

### Separate screen styles

Separate style file for each screen.