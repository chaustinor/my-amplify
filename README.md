# HIPAA Compliant Next.js + Lambda

Simple Hello World example with AWS Lambda backend.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Deploy Lambda to AWS:
```bash
serverless deploy
```

3. Copy the API Gateway URL from deployment output and add to `.env.local`:
```
NEXT_PUBLIC_API_GATEWAY_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com
```

4. Run Next.js locally:
```bash
npm run dev
```

5. Open http://localhost:3000 and click the button!

## Deploying to AWS Amplify

1. In Amplify Console → Environment variables, add:
   - Variable: `NEXT_PUBLIC_API_GATEWAY_URL`
   - Value: `https://your-api-id.execute-api.us-east-1.amazonaws.com`

2. Create `amplify.yml` in project root (see below)

3. Redeploy the app

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── lib/
│       └── api-client.ts
├── lambda/
│   └── hello.ts
├── serverless.yml
└── amplify.yml
```