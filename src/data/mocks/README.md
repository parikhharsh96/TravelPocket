# Mock Data for Development

This folder contains mock JSON responses for API endpoints to use during development.

## How to Enable Mock Mode

Add the following to your `.env.local` file:

```env
# Enable mock mode (use mock data instead of real API calls)
NEXT_PUBLIC_USE_MOCK_DATA=true
```

Or disable it explicitly:

```env
# Disable mock mode (use real API calls)
NEXT_PUBLIC_USE_MOCK_DATA=false
```

## Default Behavior

- **Development mode**: Mock mode is enabled by default (unless explicitly set to `false`)
- **Production mode**: Mock mode is disabled by default (unless explicitly set to `true`)

## Folder Structure

```
src/data/mocks/
├── customer-home/
│   ├── getTrendingPackages.json
│   ├── getDestinations.json
│   ├── getSearchDropdownValues.json
│   ├── getTravelGoals.json
│   ├── getStories.json
│   └── getSharedExperiences.json
├── auth/
│   ├── login.json
│   └── generatetoken.json
└── booking/
    └── (add booking mocks as needed)
```

## Adding New Mock Files

1. Create a JSON file in the appropriate subfolder
2. Add the mapping in `src/lib/mock-utils.ts`:
   - Add to `MOCK_FILE_MAP` object
   - Add to `mockDataImports` object

## Mock Data Format

Mock JSON files should match the expected API response format:

```json
{
  "success": true,
  "message": "Execution completed",
  "data": {
    // Your mock data here
  }
}
```

