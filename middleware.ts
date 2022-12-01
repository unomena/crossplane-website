import { NextRequest, NextResponse } from 'next/server';

const no_auth_urls: string[] = [
  'crossplane.io',
  'www.crossplane.io',
  'crossplane-website.vercel.app',
  'www-crossplane.vercel.app'
];

export function middleware(req: NextRequest) {
  if (process.env.NODE_ENV === 'development' || no_auth_urls.includes(req.nextUrl.hostname)) {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');
    if (user === 'cocoon' && pwd === 'Bt79') {
      return NextResponse.next();
    }
  }

  const url = req.nextUrl;
  url.pathname = '/api/basic-auth';
  return NextResponse.rewrite(url);
}
