# Nuxt-Cloudinary-Image

## Installation

```shell
// yarn
yarn add @teamnovu/nuxt-cloudinary-image

// npm
npm i @teamnovu/nuxt-cloudinary-image
```

## Setup

```javascript
{
  modules: [
    '@teamnovu/nuxt-cloudinary-image',
  ],

  cloudinaryImage: {
    cloudinaryBaseUrl: 'https://res.cloudinary.com/<your-cloud-name>/image/upload/'
  }
}
```

## Usage

```html
<CloudinaryImage src="/src.jpg"></CloudinaryImage>
```

## Documentation

This is a wrapper library. Please check out the full documentation here: [@teamnovu/vue-cloudinary-image](https://www.npmjs.com/package/@teamnovu/vue-cloudinary-image)
