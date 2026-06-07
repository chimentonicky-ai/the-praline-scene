# Shopify Theme Files

This directory contains Shopify-specific theme files and configuration for The Praline Scene.

## Structure

- `theme.liquid` - Main theme template
- `sections/` - Reusable theme sections
- `snippets/` - Reusable template components
- `assets/` - CSS, JS, and image assets

## How to Use

1. Update your Shopify store settings
2. Install the Shopify CLI
3. Connect your store
4. Deploy theme files using:
   ```bash
   shopify theme push
   ```

## Theme Development

For local development:
```bash
shopify theme dev
```

This will create a development theme and allow real-time updates.
