import DOMPurify from 'dompurify';
export const sanitizeHTML = (html: string) =>
  DOMPurify.sanitize(html, { ALLOWED_TAGS: ['b','i','em','strong','a','p','br'], ALLOWED_ATTR: ['href','target'] });

export const sanitizeFileName = (name: string) => name.replace(/[^a-zA-Z0-9._-]/g, '_');
